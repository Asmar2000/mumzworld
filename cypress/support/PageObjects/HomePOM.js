class Home{
    
    SearchforProduct(){
        cy.url().should('include','mumzworld')
        cy.contains('What are you looking for?').should('be.exist');
        cy.contains("Successfully added to bag").should("be.exist");
        cy.searchField().click()
        cy.searchField().type(data.productName)
        cy.searchButton().click()
        

    }
    SelectProduct(){
        cy.url().should('include','Kinder%20Valley%20-%20White%20Waffle%20Palm%20Moses%20Basket%20w/%20Stand')
        cy.contains('Search results for Kinder Valley - White Waffle Palm Moses Basket w/ Stand').should('be.exist');
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
        cy.increaseQuantity().type('5')
        
    }



}

export default Home;