describe("Cypress todo app", () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo');
    });

    it("Should displays two todo items by default", () => {
        cy.get(".todo-list li").should("have.length", 2);
        cy.get(".todo-list li").first().should("have.text", "Pay electric bill");
        cy.get(".todo-list li").last().should("have.text", "Walk the dog");
    });

    it("Should add new item on submit", () => {
        cy.get('input.new-todo').type(`New item{enter}`)
        cy.get(".todo-list li").should("have.length", 3);
    });

    it("Should strike an item when it's complete", () => {
        cy.contains('Pay electric bill')
            .parent()
            .find("input[type=checkbox]")
            .check();

        cy.contains('Pay electric bill')
            .parents("li")
            .should("have.class", "completed");
    });

    it("Should edit todo on double click", () => {
        // Given
        cy.contains('Walk the dog')
            .dblclick();

        // When
        cy.get("input.edit")
            .clear()
            .type("New item text{enter}")

        // Then
        // Should throw an error on some executions ==> It seems to have a bug on the app
        cy.get(".todo-list li").first().should("have.text", "Pay electric bill");
        cy.get(".todo-list li").last().should("have.text", "New item text");
    });

});