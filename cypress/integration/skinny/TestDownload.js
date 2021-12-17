/// <reference types = "Cypress"/>
import Amplify, {Auth} from 'aws-amplify'
import LoginPage from "../../support/pageObject/LoginPage";
import HomeSkinnyPage from "../../support/pageObject/HomeSkinnyPage";

describe('Home page flow test suite', function () {
    let length;
    let link;
    before(function () {
        cy.visit(Cypress.env('url'));
        cy.fixture('example').then(function (data) {
           this.data = data
            const loginPage = new LoginPage()
            cy.enterLogPassClickOk(loginPage, this.data.emailVal, this.data.passwordVal);
        })

/*        const homePage = new HomeSkinnyPage()
        homePage.resoursesLink().each(($el, index) => {
            let text = $el.text()
            console.log(text)
            text = text.toLowerCase()
            if (!(text.includes('watch')) && !(text.includes('video'))) {
                //cy.pause()
                length++;
            }
        })*/
    });

    beforeEach(function () {
        /* cy.restoreLocalStorage();
         cy.viewport(1200, 800)

         cy.get('body').then((body) => {
             if (body.find('.button-lable').length === 0) {
                 cy.visit(Cypress.env('url'))
             }
         });
         cy.get('body').then((body) => {
             if (body.find('.button-lable').length === 0) {
                 const loginPage = new LoginPage()
                 cy.enterLogPassClickOk(loginPage, this.data.emailVal, this.data.passwordVal);
             }
         });*/
    });


    it('testResourcesDownload', function () {
        cy.log(length)
        // cy.get('[style="flex-basis: 50%;"] > :nth-child(1) > .event-info > .event-link').invoke('removeAttr', 'target').click()
        // Get window object
        cy.window().then((win) => {
            // Replace window.open(url, target)-function with our own arrow function
            cy.stub(win, 'open', url => {
                // change window location to be same as the popup url
                win.location.href = Cypress.config().baseUrl + url;
            }).as("popup") // alias it with popup, so we can wait refer it with @popup
        })

        // Click button which triggers javascript's window.open() call
        cy.on('window:before:load', (win) => {
            // just log the win.location.href for convenience
            console.log('WINDOW BEFORE LOAD', win.location.href)
            cy.log('WINDOW BEFORE LOAD', win.location.href)

            // if we're trying to load the page we want to stop, win.stop()
            if (win.location.href.includes('https://asm.hitachi-qdx360.com/go/storage-acceleration/null/content/dam')) {
                cy.log('stopping page loading')
                cy.wait(1500)
                win.stop()
            }
        })

        cy.get('[style="flex-basis: 50%;"] > :nth-child(1) > .event-info > .event-link').click()
        cy.on('url:changed', url => {
            cy.log(url)
            url = url.replace('https://asm.hitachi-qdx360.com/go/storage-acceleration/null/content/dam/virtualevents-lite/us/', 'http://aem.hitachi-qdx360.com/content/dam/virtualevents-lite/us/');
            //url = url.replace('https://asm.hitachi-qdx360.com/go/storage-acceleration/null/content/dam/virtualevents-lite/us/', 'http://aem.hitachi-qdx360.com/content/dam/virtualevents-lite/us/');
            cy.log(url)
            link = url;
            cy.forceVisit(url)
            cy.visit(Cypress.env('url'));
        });


        /*cy.on('url:changed', url => {
            cy.pause()
            cy.location('hash').then(hash => {
                if (!url.endsWith(hash)) {
                 /!*   cy.visit(url);
                    link=url;*!/
                    cy.log(url)
                    url=url.replace('https', 'http').replace('asm.hitachi-','aem.hitachi-');
                    cy.log(url)
                    link=url;
                }
            });
        });*/


        // Make sure that it triggered window.open function call
        cy.get("@popup").should("be.called")
        // Now we can continue integration testing for the new "popup tab" inside the same tab
        cy.log(link)

    });

})

/*
//stop loading
cy.log('WINDOW BEFORE LOAD', win.location.href)

// if we're trying to load the page we want to stop, win.stop()
if (win.location.href.contains('https://asm.hitachi-qdx360.com/go/storage-acceleration/null')) {
    win.stop()
}*/

//cy.verifyDownload('hitachi-drives-compelling-value-proposition-as-it-pursues-midrange-storage-customers.pdf');
/*const downloadsFolder = Cypress.config('downloadsFolder')
const downloadedFilename = path.join(downloadsFolder, 'archive.zip')

cy.readFile(downloadedFilename, 'binary', { timeout: 15000 })
    .should(buffer => expect(buffer.length).to.be.gt(100));*/