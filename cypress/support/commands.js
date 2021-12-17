import "cypress-localstorage-commands";
import RegistrationPage from "./pageObject/RegistrationPage";

require('cypress-downloadfile/lib/downloadFileCommand')

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


Cypress.Commands.add('testVideo()', () => {
    cy.get('video')
        .should("have.prop", 'paused', true)
        .and("have.prop", 'ended', false)
        .then(($video) => {
            $video[0].play()
        })
    cy.get('video')
        .should('have.prop', 'paused', false)
        .and('have.prop', 'ended', false)
    //https://glebbahmutov.com/blog/test-video-play/
    // cy.get('video', {timeout: 1000}).should('have.prop', 'ended', true) // cy.get('video').should($video => { expect($video.get(0)).to.have.property('paused', true); });
    //cy.pause()//cy.get('.MediaStyles__MediaChatPollContainer-sc-p5uh1a-1').click()
    cy.visit(Cypress.env('url'))
})

Cypress.Commands.add('confirmEmailAndValidateResult',(expectingText)=> {
    let emailHTML;
    // app will send user an email containing a code, use mailslurp to wait for the latest email
    cy.mailslurp()
        // use inbox id and a timeout of 30 seconds
        .then(mailslurp => mailslurp.waitForLatestEmail(this.inboxId, 30000, true))
        // extract the confirmation code from the email body
        .then(email => {
            // cy.log(email.body)
            emailHTML = email.body;
        })
        .then((html) => {
            cy.document().invoke('write', emailHTML)
        })

    cy.get('a').invoke('removeAttr', 'target').click()
    cy.get('.message').should('have.text', expectingText)
})


//easiest Hitachi
Cypress.Commands.add('enterLogPassClickOk', (page, a, b) => {
    page.email().type(a)
    page.password().type(b)
    page.signInBn().should('not.be.disabled')
    page.signInBn().click()
})

Cypress.Commands.add('registrationFillinAllFieldsClickOk', (page, a, b) => {
    page.email().type(a)
    page.companyName().type("QD")
    page.firstName().type("FirstName")
    page.lastName().type("LastName")
    page.phone().type("12345")
    page.jobTitle().type("JobTitle")
    page.industry().select("Technology")
    page.attendeeCategory().select('Existing Customer')
    page.country().select('United States')
    page.state().select('Florida')
    page.password().type(b)
    //cy.get('#Comms_Opt_In__c-yes').check().should('be.checked')
    page.registerBn().should('be.disabled')
    page.radioBnYes().check().should('be.checked')
    page.registerBn().should('not.be.disabled')
    page.registerBn().click()
})

Cypress.Commands.add('verifyErrorMessagesInputField', (el, text) => {
    el.type(text).clear()
    const registrationPage = new RegistrationPage()
    registrationPage.email().click()
    el.click()
    el.then(($el) => {
        let text = $el.next().text()
        console.log(text)
        cy.log(text)
        expect(text.includes('Please enter')).to.be.true
    })
})

Cypress.Commands.add('verifyTextIsPresent(el)', () => {
    el.then(function (element) {
        let actualText = element.text()
        //cy.log(actualText + '\n')
        expect(actualText).to.be.not.empty
    })
})


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


