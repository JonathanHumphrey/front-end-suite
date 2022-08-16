describe("Initial Navigation", () => {
	it("Navigate and verify Home data", () => {
		cy.visit("/");
		cy.contains("Home").click();
		cy.get("[data-cy=card-prop-header]");
	});
});
