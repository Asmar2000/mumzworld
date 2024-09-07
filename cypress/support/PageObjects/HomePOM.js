class Home{
    
    SearchforProduct(){
        cy.url().should('include','mumzworld')
        cy.searchField().should('be.exist');
        cy.searchField().type(data.productName)
        
        cy.searchButton().click()
        

    }
    SelectProduct(){
        cy.url().should('include','Kinder%20Valley%20-%20White%20Waffle%20Palm%20Moses%20Basket%20w/%20Stand')
        cy.contains('Search results for Kinder Valley - White Waffle Palm Moses Basket w/ Stand').should('be.exist');
        //add click in the middle of the screen to make sure the product is visible
        cy.get('.header-searchMask-21o').click({ force: true, failOnStatusCode: false })
        cy.selectProduct().click()
    }
    AddToCart(){
        cy.url().should('include','kinder-valley-white-waffle-palm-moses-basket-w-stand')
        cy.contains('Kinder Valley - White Waffle Palm Moses Basket w/ Stand').should('be.exist');
        cy.contains('Add to bag').should('be.exist');
        cy.addToCart().click()
    }
    ViewCart(){
        cy.contains("Successfully added to bag").should("be.exist");
        cy.contains('Continue Shopping').should('be.exist');
        cy.contains('View Bag').should('be.exist');
        cy.viewCart().click()
    }
    increaseQuantity(){
        cy.url().should('include','cart')
        cy.contains('Shopping bag').should('be.exist');
        cy.increaseQuantity().clear()
        cy.increaseQuantity().type('5')
        //click the screen to make sure the quantity is updated
        cy.get('.cartPage-left_contents-y33')
        
    }
    proceedToCheckout(){
        cy.contains(data.productName).should('be.exist');
        cy.contains('Order summary').should('be.exist');
        cy.contains('Item subtotal').should('be.exist');
        cy.contains('Estimated shipping').should('be.exist');
        cy.contains('VAT (%5)').should('be.exist');
        cy.contains('Order total').should('be.exist');
        cy.proceedToCheckout().click()
        
    }
    placeOrder(){
        cy.url().should('include','checkout')
        cy.contains('Secure checkout').should('be.exist');
        cy.contains('Shipping method').should('be.exist');
        cy.contains('Payment information').should('be.exist');
        cy.contains('Review items').should('be.exist');
        cy.contains('Order summary').should('be.exist');
        cy.contains('Item subtotal').should('be.exist');
        cy.contains('VAT (%5)').should('be.exist');
        cy.contains('Order total').should('be.exist');
        cy.contains('Place order').should('be.exist');
        //cy.placeOrder().click()
    }



}

export default Home;