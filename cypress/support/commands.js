import "cypress-localstorage-commands";

require('cy-verify-downloads').addCustomCommand();
const Auth = require("aws-amplify").Auth;

const username = Cypress.env("username");
const password = Cypress.env("password");
const userPoolId = Cypress.env("userPoolId");
const clientId = Cypress.env("clientId");

const awsconfig = {
    aws_user_pools_id: userPoolId,
    aws_user_pools_web_client_id: clientId,
};

Auth.configure(awsconfig);

Cypress.Commands.add("signIn", () => {
    cy.then(() => Auth.signIn(username, password)).then((cognitoUser) => {
        const idToken = cognitoUser.signInUserSession.idToken.jwtToken;
        const accessToken = cognitoUser.signInUserSession.accessToken.jwtToken;

        const makeKey = (name) =>
            `CognitoIdentityServiceProvider.${cognitoUser.pool.clientId}.${cognitoUser.username}.${name}`;

        cy.setLocalStorage(makeKey("accessToken"), accessToken);
        cy.setLocalStorage(makeKey("idToken"), idToken);
        cy.setLocalStorage(
            `CognitoIdentityServiceProvider.${cognitoUser.pool.clientId}.LastAuthUser`,
            cognitoUser.username
        );
    });
    cy.saveLocalStorage();
});

Cypress.Commands.add('forceVisit', url => {
    cy.window().then(win => {
        return win.open(url, '_self');
    });
});

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// Access element whose parent is hidden
Cypress.Commands.add('isVisible', {
    prevSubject: true
}, (subject) => {
    const isVisible = (elem) => !!(
        elem.offsetWidth ||
        elem.offsetHeight ||
        elem.getClientRects().length
    )
    expect(isVisible(subject[0])).to.be.true
})

Cypress.Commands.add('selectProduct', (productName) => {
    cy.get('h4.card-title').each(($el, index, $list) => {
        if ($el.text().includes(productName))
            cy.get('.btn.btn-info').eq(index).click()
    })
})

