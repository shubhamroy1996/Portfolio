describe(
  "Portfolio E2E Tests",
  { viewportWidth: 1280, viewportHeight: 720 },
  () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("✅ Page loads with hero section visible", () => {
      cy.get('main, header, [class*="hero"], [class*="container"]').should(
        "be.visible",
      );
      cy.get('h1, [class*="hero-title"], [class*="name"]').should(
        "contain.text",
        "Shubham",
      );
    });

    it("✅ About section loads and is scrollable", () => {
      cy.get('[class*="about"], [id*="about"], section h2')
        .contains("About")
        .parents("section")
        .scrollIntoView()
        .should("be.visible");

      // Verify content (text, paragraphs, etc.)
      cy.get(
        '[class*="about"] p, [class*="about"] div[class*="text"], section p',
      ).should("be.visible");
    });
  },
);
