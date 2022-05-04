import { Given, When, Then } from "cypress-cucumber-preprocessor";

console.log("STEP DEFINITIONS FILE EVALUATED SOMETHING SOME SHIT");

Given("a user goes to {string}", (url) => {
  cy.visit(url);
});

When("they search for {string}", (searchTerm) => {
  cy.get("input[name='q']").type(`${searchTerm}{enter}`);
});

Then("they see {string}", (text) => {});
