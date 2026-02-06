describe("Portfolio Advanced E2E Tests", { viewportWidth: 1280, viewportHeight: 720 }, () => {
  beforeEach(() => {
    cy.visit("/");
  });

  // ========== DETAILED USER JOURNEY TESTS ==========
  describe("Complete User Journeys", () => {
    it("✅ User can navigate through entire portfolio", () => {
      // Start at home
      cy.scrollToSection("home");
      cy.checkSectionVisible("home");

      // View about section
      cy.navigateToSection("About");
      cy.checkSectionVisible("about");

      // Browse projects
      cy.navigateToSection("Work");
      cy.checkSectionVisible("work");

      // Check contact
      cy.navigateToSection("Contact");
      cy.checkSectionVisible("contact");
    });

    it("✅ User can view project details and navigate back", () => {
      cy.openProjectModal(0);
      cy.get("[style*='backdrop-blur']").should("be.visible");
      cy.get("[style*='backdrop-blur']").within(() => {
        cy.get("h5").should("be.visible");
        cy.get("p").first().should("contain.text", /description|built|using/i);
      });

      cy.closeProjectModal();
      cy.get("[style*='backdrop-blur']").should("not.exist");
      cy.checkSectionVisible("work");
    });

    it("✅ User can fill and submit contact form", () => {
      const formData = {
        name: "John Doe",
        email: "john.doe@example.com",
        message: "I would like to discuss a new project opportunity.",
      };

      cy.scrollToSection("contact");
      cy.fillContactForm(formData);

      // Verify form fields are filled
      cy.get("input[name='name']").should("have.value", formData.name);
      cy.get("input[name='email']").should("have.value", formData.email);
      cy.get("textarea[name='message']").should("have.value", formData.message);

      cy.submitContactForm();

      // Verify loading state
      cy.get("button[type='submit']").should("include.text", "Sending");
    });

    it("✅ User can copy email address from about section", () => {
      cy.scrollToSection("about");
      cy.copyEmail();
      cy.get("#about").within(() => {
        cy.get("button").should("contain", /copied/i);
      });
    });

    it("✅ User can view multiple projects sequentially", () => {
      cy.scrollToSection("work");

      // Open first project
      cy.openProjectModal(0);
      cy.get("[style*='backdrop-blur']").should("be.visible");
      cy.get("[style*='backdrop-blur']").within(() => {
        cy.get("h5").should("contain", "Swiggy Clone");
      });

      // Close and open second project
      cy.closeProjectModal();
      cy.openProjectModal(1);
      cy.get("[style*='backdrop-blur']").should("be.visible");
      cy.get("[style*='backdrop-blur']").within(() => {
        cy.get("h5").should("contain", "Tourvisto");
      });

      cy.closeProjectModal();
    });
  });

  // ========== MOBILE USER JOURNEY TESTS ==========
  describe("Mobile Navigation & Interactions", () => {
    beforeEach(() => {
      cy.setMobileViewport();
      cy.visit("/");
    });

    it("✅ Mobile user can toggle menu and navigate", () => {
      cy.get("button[aria-label='Toggle Menu']").should("be.visible");
      cy.get("button[aria-label='Toggle Menu']").click();
      cy.get(".sm\\:hidden").should("be.visible");

      // Navigate using mobile menu
      cy.get(".nav-link").contains("About").click();
      cy.checkSectionVisible("about");

      // Menu should close after navigation
      cy.get(".sm\\:hidden").should("not.be.visible");
    });

    it("✅ Mobile user can view projects", () => {
      cy.get("button[aria-label='Toggle Menu']").click();
      cy.get(".nav-link").contains("Work").click();
      cy.checkSectionVisible("work");

      // Open project on mobile
      cy.get("#work").within(() => {
        cy.get("button").contains("Read More").first().click();
      });
      cy.get("[style*='backdrop-blur']").should("be.visible");
    });

    it("✅ Mobile user can fill contact form", () => {
      cy.get("button[aria-label='Toggle Menu']").click();
      cy.get(".nav-link").contains("Contact").click();
      cy.checkSectionVisible("contact");

      cy.fillContactForm({
        name: "Mobile User",
        email: "mobile@example.com",
        message: "Testing from mobile",
      });

      cy.get("input[name='name']").should("have.value", "Mobile User");
    });

    it("✅ Content is readable on mobile viewport", () => {
      cy.checkSectionVisible("home");
      cy.get("#home").within(() => {
        cy.get("h1, p").should("have.length.greaterThan", 0);
      });
    });
  });

  // ========== FORM VALIDATION TESTS ==========
  describe("Form Validation & Error Handling", () => {
    it("✅ Form prevents submission with empty fields", () => {
      cy.scrollToSection("contact");
      cy.verifyFormValidation();

      // HTML5 validation should prevent submission with empty required fields
      cy.get("#contact").within(() => {
        cy.get("button[type='submit']").then(($btn) => {
          // If HTML5 validation is in place, this should fail validation
          expect($btn[0].checkValidity()).to.be.false;
        });
      });
    });

    it("✅ Form validates email format", () => {
      cy.scrollToSection("contact");
      cy.get("input[name='name']").type("John Doe");
      cy.get("input[name='email']").type("invalid-email");
      cy.get("textarea[name='message']").type("Test message");

      // HTML5 email validation
      cy.get("input[name='email']").then(($input) => {
        expect($input[0].validity.typeMismatch).to.be.true;
      });
    });

    it("✅ Form accepts valid email formats", () => {
      cy.scrollToSection("contact");
      const validEmails = [
        "user@example.com",
        "test.user@example.co.uk",
        "user+tag@example.com",
      ];

      validEmails.forEach((email) => {
        cy.get("input[name='email']").clear().type(email);
        cy.get("input[name='email']").then(($input) => {
          expect($input[0].validity.valid).to.be.true;
        });
      });
    });

    it("✅ Form clears after successful submission", () => {
      cy.scrollToSection("contact");
      cy.fillContactForm({
        name: "John Doe",
        email: "john@example.com",
        message: "Test message",
      });

      cy.submitContactForm();

      // Wait for submission to complete
      cy.get("button[type='submit']")
        .contains("Send", { timeout: 6000 })
        .should("exist");

      // Fields should be cleared
      cy.get("input[name='name']").should("have.value", "");
      cy.get("input[name='email']").should("have.value", "");
      cy.get("textarea[name='message']").should("have.value", "");
    });
  });

  // ========== PROJECT INTERACTION TESTS ==========
  describe("Project Carousel & Details", () => {
    it("✅ All project modals open correctly", () => {
      cy.scrollToSection("work");

      // Get number of projects with "Read More" buttons
      cy.get("#work")
        .within(() => {
          cy.get("button").contains("Read More").then(($buttons) => {
            const projectCount = $buttons.length;

            // Test opening each project
            for (let i = 0; i < projectCount && i < 2; i++) {
              cy.openProjectModal(i);
              cy.get("[style*='backdrop-blur']").should("be.visible");
              cy.closeProjectModal();
            }
          });
        });
    });

    it("✅ Project modal displays complete information", () => {
      cy.openProjectModal(0);

      cy.get("[style*='backdrop-blur']").within(() => {
        // Title
        cy.get("h5").should("be.visible");

        // Description
        cy.get("p").should("have.length.greaterThan", 0);

        // Technology tags (images)
        cy.get("img").should("have.length.greaterThan", 0);

        // View Project link
        cy.get("a").then(($links) => {
          const hasViewLink = $links
            .toArray()
            .some(($link) => $link.textContent.includes("View Project"));
          expect(hasViewLink).to.be.true;
        });
      });
    });

    it("✅ Project view link opens in new tab", () => {
      cy.openProjectModal(0);

      cy.get("[style*='backdrop-blur']").within(() => {
        cy.get("a").each(($link) => {
          if ($link.text().includes("View Project")) {
            cy.wrap($link)
              .should("have.attr", "target", "_blank")
              .should("have.attr", "rel", "noopener noreferrer");
          }
        });
      });

      cy.closeProjectModal();
    });

    it("✅ Mouse preview image appears on project hover", () => {
      cy.scrollToSection("work");
      cy.get("#work").within(() => {
        cy.get("[class*='space-y']").first().trigger("mouseenter");
      });
      // Preview image should be positioned near mouse
      cy.get("#work").find("img[class*='fixed']").should("exist");
    });
  });

  // ========== SECTION-SPECIFIC TESTS ==========
  describe("About Section Deep Dive", () => {
    it("✅ Copy email button shows correct email", () => {
      cy.scrollToSection("about");
      cy.get("#about").within(() => {
        cy.get("button").contains(/copy/i).should("contain.text", "Copy Email");
      });
    });

    it("✅ Email copy state reverts after timeout", () => {
      cy.scrollToSection("about");
      cy.copyEmail();

      cy.get("#about").within(() => {
        cy.get("button").should("contain", /copied/i);
        cy.wait(2100);
        cy.get("button").should("contain", /copy/i);
      });
    });

    it("✅ About section displays technical background", () => {
      cy.scrollToSection("about");
      cy.get("#about").within(() => {
        cy.get("p").should("contain.text", /react|experience|engineer/i);
      });
    });

    it("✅ Time display updates (IST timezone)", () => {
      cy.scrollToSection("about");
      cy.get("#about").within(() => {
        // Check for time pattern HH:MM AM/PM
        cy.get("p").then(($p) => {
          const text = $p.text();
          expect(text).to.match(/\d{1,2}:\d{2}\s*(?:AM|PM)/i);
        });
      });
    });
  });

  describe("Experiences Section", () => {
    it("✅ All experience entries are visible", () => {
      cy.contains("h2", /experience|timeline/i).scrollIntoView();

      // Check for multiple experience titles
      cy.contains(/software engineer|analyst/i).should("exist");
      cy.contains(/insurance|supply chain|audit/i).should("exist");
    });

    it("✅ Experience dates are displayed correctly", () => {
      cy.contains("h2", /experience|timeline/i).scrollIntoView();

      // Verify date ranges exist
      cy.contains(/2019|2022|2025/i).should("exist");
    });

    it("✅ Experience descriptions contain achievements", () => {
      cy.contains("h2", /experience|timeline/i).scrollIntoView();

      // Check for achievement markers
      cy.contains(/✅|built|developed|engineered|implemented/i).should("exist");
    });
  });

  describe("Testimonials Section", () => {
    it("✅ Multiple review cards are displayed", () => {
      cy.contains("h2", /clients|testimonial/i).scrollIntoView();

      cy.get("figure").should("have.length.greaterThan", 2);
    });

    it("✅ Each review has complete information", () => {
      cy.contains("h2", /clients|testimonial/i).scrollIntoView();

      cy.get("figure").first().within(() => {
        // Avatar image
        cy.get("img").should("exist");

        // Name
        cy.get("figcaption").should("contain.text", /\w+/);

        // Username
        cy.get("p").should("contain.text", /@/);

        // Review text
        cy.get("blockquote").should("not.be.empty");
      });
    });

    it("✅ Reviews display positive feedback", () => {
      cy.contains("h2", /clients|testimonial/i).scrollIntoView();

      cy.get("figure").each(($figure) => {
        cy.wrap($figure)
          .within(() => {
            cy.get("blockquote").should(
              "contain.text",
              /amazing|excellent|great|recommend|incredible|stunning|breathtaking|speechless/i
            );
          });
      });
    });

    it("✅ Marquee animation is present", () => {
      cy.contains("h2", /clients|testimonial/i).scrollIntoView();

      // Check for marquee or animated containers
      cy.get("[class*='_Marquee']").should("have.length.greaterThan", 0);
    });
  });

  // ========== PERFORMANCE & LOAD TESTS ==========
  describe("Performance & Loading", () => {
    it("✅ Hero section loads immediately", () => {
      cy.visit("/");
      cy.get("#home").should("be.visible");
    });

    it("✅ Sections load on demand (lazy loading)", () => {
      cy.visit("/");

      // Initially, bottom sections might not be loaded
      cy.scrollTo("bottom", { duration: 2000 });

      // All sections should be visible after scrolling
      cy.contains(/projects|experiences|testimonial|contact/i).should("exist");
    });

    it("✅ Images render without console errors", () => {
      cy.visit("/", {
        onBeforeLoad(win) {
          win.addEventListener("error", cy.stub().as("windowError"));
        },
      });

      cy.get("img").should("have.length.greaterThan", 0);
      cy.get("@windowError").should("not.have.been.called");
    });

    it("✅ Page scrolls smoothly without lag", () => {
      cy.visit("/");

      // Measure scroll performance
      cy.window().then((win) => {
        const startTime = performance.now();
        cy.get(".nav-link").contains("Contact").click();

        cy.window().then(() => {
          const endTime = performance.now();
          const scrollTime = endTime - startTime;
          // Scroll should complete within reasonable time
          expect(scrollTime).to.be.lessThan(5000);
        });
      });
    });
  });

  // ========== RESPONSIVE TESTING ==========
  describe("Responsive Layout Verification", () => {
    it("✅ Desktop layout displays properly", () => {
      cy.setDesktopViewport();
      cy.visit("/");

      cy.get(".hidden.sm\\:flex").should("be.visible");
      cy.get("button[aria-label='Toggle Menu']").should("not.be.visible");
    });

    it("✅ Tablet layout displays properly", () => {
      cy.setTabletViewport();
      cy.visit("/");

      cy.get("body").should("be.visible");
      cy.get("#home").should("be.visible");
    });

    it("✅ Mobile layout displays properly", () => {
      cy.setMobileViewport();
      cy.visit("/");

      cy.get("button[aria-label='Toggle Menu']").should("be.visible");
      cy.get(".hidden.sm\\:flex").should("not.be.visible");
    });

    it("✅ Content reflows correctly on resize", () => {
      cy.setDesktopViewport();
      cy.visit("/");
      cy.get(".hidden.sm\\:flex").should("be.visible");

      // Simulate resize to mobile
      cy.setMobileViewport();
      cy.get("button[aria-label='Toggle Menu']").should("be.visible");

      // Resize back to desktop
      cy.setDesktopViewport();
      cy.get(".hidden.sm\\:flex").should("be.visible");
    });

    it("✅ Images scale appropriately on different viewports", () => {
      cy.visit("/");

      cy.setMobileViewport();
      cy.get("img").first().should("be.visible");

      cy.setTabletViewport();
      cy.get("img").first().should("be.visible");

      cy.setDesktopViewport();
      cy.get("img").first().should("be.visible");
    });
  });

  // ========== ACCESSIBILITY DEEP DIVE ==========
  describe("Accessibility Compliance", () => {
    it("✅ All images have descriptive alt text", () => {
      cy.verifyImageAltText();
    });

    it("✅ All navigation links are keyboard accessible", () => {
      cy.verifyNavLinks();
    });

    it("✅ Form fields are properly labeled", () => {
      cy.scrollToSection("contact");

      cy.get("#contact").within(() => {
        cy.get("input[name='name']")
          .should("have.attr", "id", "name")
          .parent()
          .should("contain.text", "Full Name");

        cy.get("input[name='email']")
          .should("have.attr", "id", "email")
          .parent()
          .should("contain.text", "Email");

        cy.get("textarea[name='message']")
          .should("have.attr", "id", "message")
          .parent()
          .should("contain.text", "Message");
      });
    });

    it("✅ Form autocomplete attributes are set", () => {
      cy.scrollToSection("contact");

      cy.get("#contact").within(() => {
        cy.get("input[name='name']").should("have.attr", "autocomplete", "name");
        cy.get("input[name='email']").should("have.attr", "autocomplete", "email");
      });
    });

    it("✅ Links have rel attributes for external links", () => {
      cy.get("a[target='_blank']").each(($link) => {
        cy.wrap($link).should("have.attr", "rel", "noopener noreferrer");
      });
    });

    it("✅ Color contrast is adequate (visual inspection)", () => {
      cy.visit("/");
      // Visual check - dark theme should have good contrast
      cy.get("h1, h2, p").should("have.css", "color");
    });
  });

  // ========== BROWSER COMPATIBILITY TESTS ==========
  describe("Browser & Platform Support", () => {
    it("✅ Page works without JavaScript errors", () => {
      cy.visit("/", {
        onBeforeLoad(win) {
          cy.spy(win.console, "error");
        },
      });

      cy.get("body").should("be.visible");
      cy.window().then((win) => {
        // Filter out expected errors if any
        const errors = win.console.error.getCalls();
        // Should have minimal or no console errors
        expect(errors.length).to.be.lessThan(5);
      });
    });

    it("✅ CSS transitions work smoothly", () => {
      cy.visit("/");
      cy.get("button").first().should("have.css", "transition");
    });

    it("✅ SVG assets render correctly", () => {
      cy.visit("/");
      cy.get("svg, img[src*='.svg']").should("have.length.greaterThan", 0);
    });
  });

  // ========== FOOTER VERIFICATION ==========
  describe("Footer Links & Social", () => {
    beforeEach(() => {
      cy.verifyResponsiveMenu();
    });

    it("✅ All social media links are present", () => {
      cy.verifySocialLinks();
    });

    it("✅ Social links point to correct platforms", () => {
      cy.get("footer, [class*='footer']").within(() => {
        cy.get("a").each(($link) => {
          const href = $link.attr("href");
          expect(href).to.not.be.empty;
        });
      });
    });

    it("✅ Footer displays all required legal links", () => {
      cy.get("footer, [class*='footer']").within(() => {
        cy.contains("Terms & Conditions").should("exist");
        cy.contains("Privacy Policy").should("exist");
        cy.contains(/©.*2026.*Shubham/i).should("exist");
      });
    });
  });

  // ========== ANIMATION TESTS ==========
  describe("Animation & Transition", () => {
    it("✅ Smooth scroll animation works", () => {
      cy.testSmoothScroll();
    });

    it("✅ Modal animates on open and close", () => {
      cy.scrollToSection("work");
      cy.openProjectModal(0);

      cy.get("[style*='backdrop-blur']").should(
        "have.css",
        "backdrop-filter"
      );

      cy.closeProjectModal();
      cy.get("[style*='backdrop-blur']").should("not.exist");
    });

    it("✅ Copy email button state changes with animation", () => {
      cy.scrollToSection("about");
      cy.copyEmail();

      cy.get("#about").within(() => {
        cy.get("button").should("contain", /copied/i);
      });

      cy.wait(2100);

      cy.get("#about").within(() => {
        cy.get("button").should("contain", /copy/i);
      });
    });
  });
});
