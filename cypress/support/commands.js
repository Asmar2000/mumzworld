//login
Cypress.Commands.add('LoginBTN', () => {
    cy.contains('Login')
})

Cypress.Commands.add('userNameField', () => {
    cy.get('[name="email"]')
})
Cypress.Commands.add('passwordField', () => {
    cy.get('[name="password"]')
})
Cypress.Commands.add('SigninBTN', () => {
    cy.get('[title="Sign in"]')
})
//Registration
Cypress.Commands.add('signUpBTN', () => {
    cy.contains('Sign up')
})
Cypress.Commands.add('RegisterBTN', () => {
    cy.get("main > [bis_skin_checked] [title='Register']")
})
Cypress.Commands.add('firstNameField', () => {
    cy.get('[name="customer.firstname"]')
})
Cypress.Commands.add('lastNameField', () => {
    cy.get('[name="customer.lastname"]')
})  
Cypress.Commands.add('emailField', () => {
    cy.get('[name="customer.email"]')
})
Cypress.Commands.add('passwordField', () => {
    cy.get('[name="password"]')
})
Cypress.Commands.add('terms_conditions', () => {
    cy.get('[name="terms_and_conditions"]')
})
Cypress.Commands.add('confirmRegistration', () => {
    cy.get(".createAccount-root-2hg  button[title='Register']")

})
//Search

Cypress.Commands.add('searchField', () => {
    cy.get('[placeholder="What are you looking for?"]')
})
Cypress.Commands.add('searchButton', () => {
    cy.get('[title="Submit your search query"]')
})
//select product
Cypress.Commands.add('selectProduct', () => {
    cy.get('.item-root-1iS')
})
//Add to cart
Cypress.Commands.add('addToCart', () => {
    cy.contains('Add to bag')
})
//view cart 
Cypress.Commands.add('viewCart', () => {
    cy.contains('View Bag')
})
//increase quantity
Cypress.Commands.add('increaseQuantity', () => {
    cy.get(".product-detailsRight-2ix  form input[name='quantity']")
})
//Proceed to checkout
Cypress.Commands.add('proceedToCheckout', () => {
    cy.get(".proceedToCheckoutBtn-root-2ra > button[title='Proceed to Checkout']")
})
