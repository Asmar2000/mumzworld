import Environment from "../support/PageObjects/env";

import Home from "../support/PageObjects/HomePOM";

const browseEnv = new Environment()
const Test = new Home()
describe("Login TCs", () => {
    before(function () {
      cy.fixture("example").then(function (data) {
        globalThis.data = data;
      });
    });
    beforeEach(function () {
        browseEnv.prod()
        
      });




});