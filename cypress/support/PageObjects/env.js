import data from '../../fixtures/example.json';

class environment{
    prod(){
        cy.visit(data.PROD_url)
    }
}
export default environment