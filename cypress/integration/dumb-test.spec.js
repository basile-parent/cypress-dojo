describe("This is a dumb test to check if install is ok", () => {
    it("Should display google and... that's it !", () => {
        cy.visit("https://www.google.com/");
        expect(true).to.equal(true)
    });
});