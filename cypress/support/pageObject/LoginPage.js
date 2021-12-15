class LoginPage {

    pageTitle() {
        return cy.get('.form-title')
    }

    registerBn() {
        return cy.get('.change-form-button')
    }

    signInBn() {
        return cy.get('.styles__BasicButtonStyles-sc-1o5eo0o-1')
    }

    email() {
        return cy.get('#email')
    }

    password() {
        return cy.get('#password')
    }

    showPasswordBn() {
        return cy.get('.field-action-button')
    }

    popupClose() {
        return cy.get('.styles__ModalClose-sc-1h51gcw-14 > .Icons__IconContainerStyles-sc-1s01ooq-0 > svg')
    }

    popupTryAgain() {
        return cy.get('[href=""]')
    }

    popupRegister() {
        return cy.get('.button-group > [href="/go/storage-acceleration/en/registration?ecid=null&utmMedium=null&utmSource=null&utmCampaignnull&utmContent=null"]')
    }

    resetPassword() {
        return cy.get('.secondary-field-action-button')
    }

}

export default LoginPage;