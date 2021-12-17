/// <reference types = "Cypress"/>
import Amplify, {Auth} from 'aws-amplify'
import LoginPage from "../../support/pageObject/LoginPage";
import HomeSkinnyPage from "../../support/pageObject/HomeSkinnyPage";

describe('Home page flow test suite', function () {
/*
    before(function () {
        cy.visit(Cypress.env('url'));
        cy.fixture('example').then(function (data) {
            this.data = data
            const loginPage = new LoginPage()
            cy.enterLogPassClickOk(loginPage, this.data.emailVal, this.data.passwordVal);
        })
    });


    it('testResourcesDownload', function () {

        const homePage = new HomeSkinnyPage()
        homePage.resoursesLink().each(($el, index) => {
            let text = $el.text()
            console.log(text)
            text = text.toLowerCase()
            if ((text.includes('watch')) || (text.includes('video'))) {
                $el.click();
                cy.testVideo();
            }else {
                cy.log("not video")
              /!*  $el.click();
                //test download
                cy.visit(Cypress.env('url'));*!/
             /!*   cy.window().then((win) => {
                    // Replace window.open(url, target)-function with our own arrow function
                    cy.stub(win, 'open', url => {
                        // change window location to be same as the popup url
                        win.location.href = Cypress.config().baseUrl + url;
                    }).as("popup") // alias it with popup, so we can wait refer it with @popup
                })*!/

                $el.click();
                cy.pause()

            }
        })
    });
*/

    it('Download & Extract PDF Text', () => {
        //https://www.youtube.com/watch?v=L_bN52Uebkc&list=PLMZdod-kiMhKBxYSWwp7uqHc7zJZbFnRf&index=13
        //https://github.com/Xvier/cypress-downloadfile
        // cy.downloadFile('https://stage.hitachivantara.com/content/dam/virtualevents-lite/us/en_us/assets/resources/hitachi-drives-compelling-value-proposition-as-it-pursues-midrange-storage-customers.pdf', 'mydownloads', 'example.pdf')
            cy.downloadFile('http://aem.hitachi-qdx360.com/content/dam/virtualevents-lite/us/en_us/assets/resources/hitachi-drives-compelling-value-proposition-as-it-pursues-midrange-storage-customers.pdf', 'mydownloads', 'example.pdf')
            .then(() => {
                cy.task("getPDFText", {pdfFile: "./mydownloads/example.pdf", maxPages: 1})
                    .then(text => {
                        expect(text).to.contains("Hitachi")
                        //  expect(text).to.contains("hello")
                    })
            })
    });

})
