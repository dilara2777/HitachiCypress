/// <reference types = "Cypress"/>
import Amplify, {Auth} from 'aws-amplify'
import LoginPage from "../../support/pageObject/LoginPage";
import HomeSkinnyPage from "../../support/pageObject/HomeSkinnyPage";

//npx cypress run --spec cypress/integration/skinny/*.js --headed
//npx cypress run --record --key a0bb4e45-0119-46db-8d3d-3ed115e42ded ./node_modules/.bin/cypress run --spec cypress/integration/skinny/*Login.js --headed

function enterLogPassClickOk(page, a, b) {
    page.email().type(a)
    page.password().type(b)
    page.signInBn().should('not.be.disabled')
    page.signInBn().click()
    cy.get('.button-lable', {timeout: 15000}).should('have.length', 1)
    cy.get('.button-lable', {timeout: 15000}).should('be.visible')

}

function verifyTextIsPresent(el) {
    el.then(function (element) {
        let actualText = element.text()
        //cy.log(actualText + '\n')
        expect(actualText).to.be.not.empty
    })
}

function testVideo() {
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
}

//todo download, screenshot, best way to setup env

describe('Home page flow test suite', function () {

    before(function () {
        cy.signIn();
        cy.visit(Cypress.env('url'));
        cy.fixture('example').then(function (data) {
            this.data = data
            const loginPage = new LoginPage()
            cy.pause()
        })

    });

    beforeEach(function () {
        cy.restoreLocalStorage();
        cy.viewport(1200, 800)
        /* uncomment only if error in auth
        cy.get('body').then((body) => {
             if (body.find('.button-lable').length === 0) {
                 cy.visit(Cypress.env('url'))
             }
         });
         cy.get('body').then((body) => {
             if (body.find('.button-lable').length === 0) {
                 const loginPage = new LoginPage()
                 enterLogPassClickOk(loginPage, this.data.emailVal, this.data.passwordVal);
             }
         });*/
    });

    after(() => {
        cy.clearLocalStorageSnapshot();
        cy.clearLocalStorage();
    });

    afterEach(() => {
        cy.saveLocalStorage();
    });

/*    it('testMainWidget', function () {
        const homePage = new HomeSkinnyPage()
        cy.log(Cypress.env('state'))
        let expMessage = ""
        if (Cypress.env('state').includes('active'))
            expMessage = "Watch the Session"
        else if (Cypress.env('state').includes('post'))
            expMessage = "Watch the Session"
        else if (Cypress.env('state').includes('pre'))
            expMessage = "Event has not started yet."
        cy.log(expMessage)
        homePage.mainWidgetMessage().should('have.text', expMessage)
    });

    it('testResources', function () {
        const homePage = new HomeSkinnyPage()
        verifyTextIsPresent(homePage.resoursesTitle());
        verifyTextIsPresent(homePage.resoursesLink());
        homePage.resoursesImg().isVisible()
        //homePage.resoursesImg().should('be.visible')

        let el = homePage.resoursesImg();
        cy.wait(500)
        // disableSmoothScroll();
        homePage.resoursesImg().eq(0).scrollIntoView()//.pause(100)//, {"capture":"fullPage"}
        homePage.resoursesImg().each(($img, index) => {
            // "naturalWidth" and "naturalHeight" are set when the image loads
            let width = $img[0].naturalWidth;
            let height = $img[0].naturalHeight
            cy.log('**naturalWidth = ' + width + '  naturalHeight = ' + height + '  index = ' + index + '** ')
            expect(width).to.be.greaterThan(0) //  expect($img[0].naturalWidth).to.be.greaterThan(0)
            expect(height).to.be.greaterThan(0)
        })
        cy.screenshot(this.test.title, {"overwrite": true})
    });

    it('testResourcesVideo', function () {
        const homePage = new HomeSkinnyPage()
        homePage.resoursesLink().each(($el, index) => {
            let text = $el.text()
            console.log(text)
            text = text.toLowerCase()
            if ((text.includes('watch')) || (text.includes('video'))) {
                $el.click();
                testVideo();
            }
        })
    });*/

    it('testResourcesDownload', function () {
        /*    const homePage = new HomeSkinnyPage()
      homePage.resoursesLink().each(($el, index) => {
             let text = $el.text()
             console.log(text)
             text = text.toLowerCase()
             if ((text.includes('watch')) || (text.includes('video'))) {
                 $el.click();
                 testVideo();
             }
         })*/
        cy.get('[style="flex-basis: 50%;"] > :nth-child(1) > .event-info > .event-link').invoke('removeAttr', 'target').click()
        cy.log(cy.url())
    });

   /* it('testMuchMore', function () {
        const homePage = new HomeSkinnyPage()
        if ((Cypress.env('state').includes('active')) || (Cypress.env('state').includes('post')))
            homePage.muchMoreImg().should('not.exist')
        else if (Cypress.env('state').includes('pre')) {
            homePage.muchMoreImg().should('be.visible')
            //uiMethods.assertImgIsPresent(driver,h.MuchMoreImg());
        }
    });

    it('testSpeakers', function () {
        const homePage = new HomeSkinnyPage()
        verifyTextIsPresent(homePage.speakerName());
        verifyTextIsPresent(homePage.speakerTitle());
        homePage.speakerTitle().eq(0).scrollIntoView()//.pause(100)//, {"capture":"fullPage"}
        //cy.screenshot('testSpeakers', {"overwrite": true})
        cy.screenshot(this.test.title, {"overwrite": true})
    });

    it('testVideo', function () {
        cy.get('[title="session video"]').click();
        testVideo();
    });

    it('testAgenda', function () {
        const homePage = new HomeSkinnyPage()

        if ((Cypress.env('state').includes('active')) || (Cypress.env('state').includes('post')))
            homePage.agendaTime().should('not.exist')
        else if (Cypress.env('state').includes('pre')) {
            homePage.agendaTime().should('be.visible')
            verifyTextIsPresent(homePage.agendaTime());
        }
    });*/

})

