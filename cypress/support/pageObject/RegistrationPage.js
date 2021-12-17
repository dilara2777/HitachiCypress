class RegistrationPage {

    pageTitle(){
        return cy.get('.form-title')
    }
    signInBn() {
        return cy.get('.change-form-button')
    }

    email() {
        return cy.get('#email')
    }

    companyName() {
        return cy.get('#companyName')
    }

    firstName() {
        return cy.get('#firstName')
    }

    lastName() {
        return cy.get('#lastName')
    }

    phone() {
        return cy.get('#phone')
    }

    jobTitle() {
        return cy.get('#jobTitle')
    }

    industry() {
        return cy.get('#industry')
    }

    attendeeCategory() {
        return cy.get('#attendeeCategory')
    }


    country() {
        return cy.get('#country')
    }

    state() {
        return cy.get('#state')
    }

    province() {
        return cy.get('#province')
    }

    password() {
        return cy.get('#password')
    }

    radioBnYes() {
        return cy.get('#Comms_Opt_In__c-yes')
    }

    registerBn() {
        return cy.get('[class = \'styles__BasicButtonStyles-sc-1o5eo0o-1 dSmWXc Forms__FormButton-sc-3ou94x-0 cPhoFW\']')
    }

    radioBnNo() {
        return cy.get('#Comms_Opt_In__c-no')
    }
    logoutBn() {
        return cy.get('.button-lable')
    }

    redErrorMarkIfInputFieldIncorrect() {
        return cy.get('.error-message')
    }


    redErrorMark() {
        return cy.get('#Comms_Opt_In__c-yes')
    }

    greenOkMark() {
        return cy.get('#Comms_Opt_In__c-no')
    }


    popupClose() {
        return cy.get('[fill="currentColor"]')
    }

    popupText() {
        return cy.get('.modal-message')
    }

    popupSigninInstead() {
        return cy.get('.styles__ModalLinkStyles-sc-1h51gcw-13')
    }

    popupRegisterWithDifferentEmailBn() {
        return cy.get('.button-group > .styles__BasicButtonStyles-sc-1o5eo0o-1')
    }

}

export default RegistrationPage;