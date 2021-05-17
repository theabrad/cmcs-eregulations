describe("Homepage", () => {
    it("loads the homepage", () => {
        cy.visit("/");
        cy.contains("Medicaid & CHIP Regulations");
    });

    it("clicks on part 430 and loads the page", () => {
        cy.visit("/");
        cy.contains("430").click()

        cy.url().should('eq', Cypress.config().baseUrl + '/430/')
        cy.contains("This is the default landing view content to be displayed if no overrides exist.")
    });

    it("allows a user to go back to the homepage by clicking the top left link", () => {
        cy.visit("/430/");
        cy.contains("Medicaid & CHIP Regulations").click();

        cy.url().should("eq", Cypress.config().baseUrl + "/");
    });
});