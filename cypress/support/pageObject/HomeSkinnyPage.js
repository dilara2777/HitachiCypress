class HomeSkinnyPage {

    pageTitle() {
        return cy.get('.home-main-event > .home-titles')
    }

    mainWidgetMessage() {
        return cy.get('[class=\'main-event-wrapper\']>div>div')
    }

    agendaTime() {
        return cy.get('.time-header')
    }

    muchMoreImg() {
        return cy.get('div[class=\'styles__HomeMuchMoreWrapper-sc-14ef639-19 juPKYW\'] img')
    }

    muchMoreHeader() {
        return cy.get('.home-much-more h2')
    }


    allSpeakers() {
        return cy.get('.speaker')
    }

    speakerName() {
        return cy.get('.speaker h3')
    }

    speakerTitle() {
        return cy.get('.speaker .title')
    }

    speakerImage() {
        return cy.get('.speaker .image-container')
    }

    resoursesImg() {
        return cy.get('.events-wrapper img')
    }

    resoursesTitle() {
        return cy.get('.events-wrapper h2')
    }

    resoursesLink() {
        return cy.get('.events-wrapper .event-link')
    }

    logoutBn() {
        return cy.get('.button-lable')
    }

    /*  resoursesLink() {
          return cy.get('.events-wrapper img')
      }

      resoursesImg() {
          return cy.get('.events-wrapper img')
      }

      resoursesImg() {
          return cy.get('.events-wrapper img')
      }

      resoursesImg() {
          return cy.get('.events-wrapper img')
      }
  */

}

export default HomeSkinnyPage;