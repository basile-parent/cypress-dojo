import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I'm on the todo list", () => {
    cy.visit("https://example.cypress.io/todo");
});

Then("I should see {int} items", (itemCount) => {
    cy.get(".todo-list li").should("have.length", itemCount);
});

Then("item number {int} should be {string}", (itemIndex, label) => {
    cy.get(`.todo-list li:nth-of-type(${ itemIndex })`).should("have.text", label);
});

When("I type {string} on the input and validate", (newItemLabel) => {
    cy.get('input.new-todo').type(`${newItemLabel}{enter}`);
});

When("I check the item {string}", (itemLabel) => {
    cy.contains(itemLabel)
        .parent()
        .find("input[type=checkbox]")
        .check();
});

Then("the item {string} be striked", (itemLabel) => {
    cy.contains(itemLabel)
        .parents("li")
        .should("have.class", "completed");
});

When("I double click on item {string}", (itemLabel) => {
    cy.contains(itemLabel)
        .dblclick();
});

When("I change the label to {string} and validate", (itemLabel) => {
    cy.get("input.edit")
        .clear()
        .type(`${itemLabel}{enter}`);
});

Then("the item label has changed to {string}", (itemLabel) => {
    cy.contains(itemLabel);
});
