// ***********************************************
// Custom Commands for Portfolio Testing
// ***********************************************

// Navigate to a specific section
Cypress.Commands.add("navigateToSection", (sectionName) => {
  cy.get(".nav-link").contains(sectionName).click();
});

// Fill contact form
Cypress.Commands.add("fillContactForm", (formData) => {
  const { name = "", email = "", message = "" } = formData;
  
  cy.get("#contact").within(() => {
    if (name) cy.get("input[name='name']").clear().type(name);
    if (email) cy.get("input[name='email']").clear().type(email);
    if (message) cy.get("textarea[name='message']").clear().type(message);
  });
});

// Submit contact form
Cypress.Commands.add("submitContactForm", () => {
  cy.get("#contact").within(() => {
    cy.get("button[type='submit']").click();
  });
});

// Open project modal
Cypress.Commands.add("openProjectModal", (projectIndex = 0) => {
  cy.get("#work").scrollIntoView();
  cy.get("#work")
    .within(() => {
      cy.get("button").contains("Read More").eq(projectIndex).click();
    });
  cy.get("[style*='backdrop-blur']").should("be.visible");
});

// Close project modal
Cypress.Commands.add("closeProjectModal", () => {
  cy.get("[style*='backdrop-blur']").within(() => {
    cy.get("button").first().click();
  });
});

// Scroll to section
Cypress.Commands.add("scrollToSection", (sectionId) => {
  cy.get(`#${sectionId}`).scrollIntoView();
  cy.get(`#${sectionId}`).should("be.visible");
});

// Check section visibility
Cypress.Commands.add("checkSectionVisible", (sectionId) => {
  cy.get(`#${sectionId}`).should("be.visible");
});

// Copy email (trigger copy email button)
Cypress.Commands.add("copyEmail", () => {
  cy.get("#about").within(() => {
    cy.get("button").contains(/copy/i).click();
  });
});

// Verify form validation
Cypress.Commands.add("verifyFormValidation", () => {
  cy.get("#contact").within(() => {
    cy.get("input[name='name']").should("have.attr", "required");
    cy.get("input[name='email']").should("have.attr", "required");
    cy.get("textarea[name='message']").should("have.attr", "required");
  });
});

// Change viewport to mobile
Cypress.Commands.add("setMobileViewport", () => {
  cy.viewport(375, 667);
});

// Change viewport to tablet
Cypress.Commands.add("setTabletViewport", () => {
  cy.viewport(768, 1024);
});

// Change viewport to desktop
Cypress.Commands.add("setDesktopViewport", () => {
  cy.viewport(1280, 720);
});

// Get project count
Cypress.Commands.add("getProjectCount", () => {
  cy.get("#work").within(() => {
    cy.get("button").contains("Read More").then(($buttons) => {
      return $buttons.length;
    });
  });
});

// Verify all nav links exist
Cypress.Commands.add("verifyNavLinks", () => {
  const expectedLinks = ["Home", "About", "Work", "Contact"];
  expectedLinks.forEach((link) => {
    cy.get(".nav-link").contains(link).should("exist");
  });
});

// Check if social links exist
Cypress.Commands.add("verifySocialLinks", () => {
  cy.get("footer, [class*='footer']").within(() => {
    cy.get("a[href*='whatsapp'], a[href*='linkedin'], a[href*='gmail']").should(
      "have.length.greaterThan",
      0
    );
  });
});

// Verify responsive menu toggle
Cypress.Commands.add("verifyResponsiveMenu", () => {
  cy.setMobileViewport();
  cy.get("button[aria-label='Toggle Menu']").should("be.visible");
  cy.get(".hidden.sm\\:flex").should("not.be.visible");
  
  cy.setDesktopViewport();
  cy.get("button[aria-label='Toggle Menu']").should("not.be.visible");
  cy.get(".hidden.sm\\:flex").should("be.visible");
});

// Test smooth scroll behavior
Cypress.Commands.add("testSmoothScroll", () => {
  cy.window().then((win) => {
    const initialScrollY = win.scrollY;
    cy.get(".nav-link").contains("About").click();
    cy.window().then((win) => {
      expect(win.scrollY).to.not.equal(initialScrollY);
    });
  });
});

// Verify all images have alt text
Cypress.Commands.add("verifyImageAltText", () => {
  cy.get("img").each(($img) => {
    cy.wrap($img).should("have.attr", "alt");
  });
});

// Verify form fields are focused correctly
Cypress.Commands.add("testFormKeyboardNavigation", () => {
  cy.get("#contact").within(() => {
    cy.get("input[name='name']").focus().should("have.focus");
    cy.tab();
    cy.get("input[name='email']").should("have.focus");
    cy.tab();
    cy.get("textarea[name='message']").should("have.focus");
  });
});
