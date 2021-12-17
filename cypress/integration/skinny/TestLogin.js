/// <reference types = "Cypress"/>
import LoginPage from "../../support/pageObject/LoginPage"
import HomeSkinnyPage from "../../support/pageObject/HomeSkinnyPage";

describe('Login/Registration flow test suite', function () {

    beforeEach(function () {
        //cy.viewport(1200, 800)
        cy.visit(Cypress.env('url'))
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })

    it('Valid login, logout', function () {
        const loginPage = new LoginPage()
        cy.enterLogPassClickOk(loginPage, this.data.emailVal, this.data.passwordVal);
        const homePage = new HomeSkinnyPage()
        homePage.logoutBn({timeout: 15000}).should('have.length', 1)
        homePage.logoutBn({timeout: 15000}).should('be.visible')
        homePage.logoutBn().click()
        cy.url().should('include', '/registration/login')
        loginPage.showPasswordBn({timeout: 15000}).should('be.visible')
    })

    it('Login: valid email, invalid password', function () {
        const loginPage = new LoginPage()
        cy.enterLogPassClickOk(loginPage, this.data.emailVal, this.data.passwordVal + 1);
        loginPage.popupClose().should('have.length', 1)
        loginPage.popupTryAgain().click()
        loginPage.popupClose().should('have.length', 0)

    })

    it('Login: new (invalid) email, valid password', function () {
        const loginPage = new LoginPage()
        cy.enterLogPassClickOk(loginPage, this.data.emailInval, this.data.passwordVal);
        //cy.pause()
        loginPage.popupClose().should('have.length', 1)
        loginPage.popupRegister().click()
        loginPage.popupClose().should('have.length', 0)
        cy.get('.form-title').should('have.length', 1)
        cy.get('.form-title').then(function (element) {
            expect(element.text().includes('Register Now')).to.be.true
        })
    })

    it('Login: new (invalid) email, invalid password', function () {
        const loginPage = new LoginPage()
        cy.enterLogPassClickOk(loginPage, this.data.emailInval, this.data.passwordVal + 1);
        loginPage.popupClose().should('have.length', 1)
        loginPage.popupRegister().click()
        loginPage.popupClose().should('have.length', 0)
        cy.get('.form-title').should('have.length', 1)
        cy.get('.form-title').then(function (element) {
            expect(element.text().includes('Register Now')).to.be.true
        })
    })

    it('LoginFn', function () {
        const page = new LoginPage()
        page.email().click()
        page.password().type(this.data.passwordVal).should('have.attr', 'type', 'password')
        page.showPasswordBn().click()
        page.password().should('have.attr', 'type', 'text')
        page.email().parent().should('have.class', 'invalid') //to contain
        page.signInBn().should('be.disabled')
        page.email().type(this.data.emailVal)
        page.password().clear().parent().should('have.class', 'invalid')
        page.signInBn().should('be.disabled')
    })
})

