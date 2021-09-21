import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I'm on the todo list", () => {
    cy.visit("https://example.cypress.io/todo");
});

Then("I should see 2 items", () => {
    cy.get(".todo-list li").should("have.length", 2);
});