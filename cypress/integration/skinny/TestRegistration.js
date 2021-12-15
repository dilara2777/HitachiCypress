/// <reference types = "Cypress"/>
import LoginPage from "../../support/pageObject/LoginPage"
import RegistrationPage from '../../support/pageObject/RegistrationPage'

function enterLogPassClickOk(page, a, b) {
    page.email().type(a)
    page.password().type(b)
    page.signInBn().should('not.be.disabled')
    page.signInBn().click()
}

function registrationFillinAllFieldsClickOk(page, a, b) {
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
}

function verifyErrorMessagesInputField(el, text) {
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
}

function confirmEmailAndValidateResult(expectingText) {
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
}

describe('Login/Registration flow test suite', function () {
    let currentEmail;

    before(function () {
        cy.pause()
        return cy.mailslurp()
            .then(mailslurp => mailslurp.createInbox())
            .then(inbox => {
                // save inbox id and email address to this (make sure you use function and not arrow syntax)
                cy.wrap(inbox.id).as('inboxId')
                cy.wrap(inbox.emailAddress).as('emailAddress')
            })
    });

    beforeEach(function () {
        cy.viewport(1200, 800)
        cy.visit(Cypress.env('url') + '/registration')
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })

/*
    it("Registration valid", function () {
        expect(this.emailAddress).to.contain("@mailslurp");
        currentEmail = this.emailAddress
        cy.log(currentEmail)
        const registrationPage = new RegistrationPage()
        registrationFillinAllFieldsClickOk(registrationPage, this.emailAddress, this.data.passwordVal);
        let expectedText = ' Your account has been confirmed. You can now log in.'
        confirmEmailAndValidateResult.call(this, expectedText);
        cy.screenshot(this.test.title, {"overwrite": true})
        const loginPage = new LoginPage()
        loginPage.password().type(this.data.passwordVal);
        loginPage.signInBn().click()
        cy.get('.button-lable', {timeout: 15000}).should('have.length', 1)
        cy.get('.button-lable', {timeout: 15000}).should('be.visible')
    });

    it("Reset password", function () {
        cy.log(currentEmail)
        const loginPage = new LoginPage()
        //loginPage.registerBn().click() //click login
        //loginPage.resetPassword().click()
        cy.visit('https://asm.hitachi-qdx360.com/go/storage-acceleration/en/registration/forgot-password')
        loginPage.email().type(currentEmail)
        loginPage.signInBn().click()

        confirmEmailAndValidateResult.call(this, ' Your password was reset. Choose a new one.');
        cy.screenshot(this.test.title, {"overwrite": true})
        let newPassword = '123456789'
        loginPage.password().type(newPassword);
        loginPage.signInBn().click()

        enterLogPassClickOk(new LoginPage(), currentEmail, newPassword);
        cy.get('.button-lable', {timeout: 15000}).should('have.length', 1)
        cy.get('.button-lable', {timeout: 15000}).should('be.visible')
    })
*/

    it('testRegistration with already in use email and click RegisterWithDifferentEmailBn', function () {
        const registrationPage = new RegistrationPage()
        registrationFillinAllFieldsClickOk(registrationPage, this.data.emailVal, this.data.passwordVal);
        //validate new window with 'The email dbtest27+1@yandex.com is already in use.
        registrationPage.popupText().should('have.length', 1).then(function (element) {
            expect(element.text().includes('is already in use')).to.be.true
        })
        registrationPage.popupRegisterWithDifferentEmailBn().click()
        registrationPage.pageTitle().then(function (element) {
            expect(element.text().includes('Register Now')).to.be.true
        })
        registrationPage.email().should('have.value', '')
    })

    it('testRegistration with already in use email and click SigninInstead', function () {
        const registrationPage = new RegistrationPage()
        registrationFillinAllFieldsClickOk(registrationPage, this.data.emailVal, this.data.passwordVal);
        //vlidate new window with 'The email dbtest27+1@yandex.com is already in use.
        registrationPage.popupText().should('have.length', 1).then(function (element) {
            expect(element.text().includes('is already in use')).to.be.true
        })
        registrationPage.popupSigninInstead().click()
        cy.screenshot(this.test.title, {"overwrite": true})
        registrationPage.pageTitle().should("have.text", 'Sign into the Hitachi Event')
        registrationPage.email().should('have.value', '')
    })

    it('Registration verifyErrorMessagesInputField', function () {
        const registrationPage = new RegistrationPage()
        verifyErrorMessagesInputField(registrationPage.email(), '1');
        verifyErrorMessagesInputField(registrationPage.companyName(), '1');
        verifyErrorMessagesInputField(registrationPage.firstName(), '1');
        verifyErrorMessagesInputField(registrationPage.lastName(), '1');
        verifyErrorMessagesInputField(registrationPage.phone(), '1');
        verifyErrorMessagesInputField(registrationPage.jobTitle(), '1');
        verifyErrorMessagesInputField(registrationPage.password(), '1');
        cy.screenshot(this.test.title, {"overwrite": true})
    })

    it('Registration verifyDD', function () {
        const registrationPage = new RegistrationPage()
        registrationPage.country().select('United States')
        registrationPage.state().should('be.visible')
        registrationPage.country().select('Canada')
        registrationPage.province().should('be.visible')
    })

    it('Registration: Radio button "Yes" should be checked', function () {
        const page = new RegistrationPage()
        page.email().type(this.data.emailVal)
        page.companyName().type("QD")
        page.firstName().type("FirstName")
        page.lastName().type("LastName")
        page.phone().type("12345")
        page.jobTitle().type("JobTitle")
        page.industry().select("Technology")
        page.attendeeCategory().select('Existing Customer')
        page.country().select('United States')
        page.state().select('Florida')
        page.password().type(this.data.passwordVal)
        //cy.get('#Comms_Opt_In__c-yes').check().should('be.checked')
        page.registerBn().should('be.disabled')
        page.radioBnYes().check().should('be.checked')
        page.radioBnNo().check().should('be.checked')
        page.registerBn().should('be.disabled')
        cy.screenshot(this.test.title, {"overwrite": true})
    })

    it('testRegistration scrolling', function () {
        cy.window().scrollTo(0, 100) //working, scroll a little bit, next 2 working as well
        cy.window().scrollTo('bottom')
        // cy.get('[style="display:block;margin-left:53px"]').scrollIntoView({ easing: 'linear' })
    })

})
