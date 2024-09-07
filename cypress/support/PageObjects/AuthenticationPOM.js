const random = require("random-name");
const firstName = "Automation " + random.first();
const LastName = "Automation " + random.last();
const email = random.first() + random.last() + "@mailinator.com";
class Authentication {
    navigateToRegister() {
        cy.signUpBTN().click()
    }
    registerNewUser() {
        
        cy.firstNameField().type(firstName)
        cy.lastNameField().type(LastName)
        cy.emailField().type(email)
        cy.passwordField().type(data.password)
        cy.terms_conditions().check()
        cy.confirmRegistration().click()

    }
    navigateToLogin() {
        cy.LoginBTN().click()
    }
    sucessLogin() {
        cy.userNameField().type(email)
        cy.passwordField().type(data.password)
        cy.SigninBTN().click()
    }
    
}
export default Authentication;