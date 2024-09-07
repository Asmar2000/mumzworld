import Environment from "../support/PageObjects/env";
import Auth from "../support/PageObjects/AuthenticationPOM";

import Home from "../support/PageObjects/HomePOM";

const browseEnv = new Environment()
const Test = new Home()
const auth = new Auth()
describe("Smoke Testing", () => {
    before(function () {
      cy.fixture("example").then(function (data) {
        globalThis.data = data;
      });
    });
    beforeEach(function () {
        browseEnv.prod()
        
      });

    it("buy a product full flow", () => {
        Test.SearchforProduct()
        Test.SelectProduct()
        Test.AddToCart()
        Test.ViewCart()
        Test.increaseQuantity()
        Test.proceedToCheckout()
        auth.navigateToRegister()
        auth.registerNewUser()
        Test.placeOrder()

    })



});