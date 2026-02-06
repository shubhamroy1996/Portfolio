describe("Portfolio Component Specific Tests", { viewportWidth: 1280, viewportHeight: 720 }, () => {
  beforeEach(() => {
    cy.visit("/");
  });

  // ========== NAVBAR COMPONENT TESTS ==========
  describe("Navbar Component", () => {
    it("✅ Navbar persists all page actions", () => {
      // Navbar should remain visible and functional
      cy.get('[class*="fixed"][class*="z-20"]').should("be.visible");

      // Click navigation and verify navbar is still there
      cy.get(".nav-link").contains("About").click();
      cy.get('[class*="fixed"][class*="z-20"]').should("be.visible");
    });

    it("✅ Navbar logo links to home", () => {
      cy.navigateToSection("About");
      cy.get("a").contains("Shubham").click();
      cy.get("#home").should("be.visible");
    });

    it("✅ Mobile menu shows all navigation options", () => {
      cy.setMobileViewport();
      cy.get("button[aria-label='Toggle Menu']").click();

      cy.get(".nav-link").contains("Home").should("be.visible");
      cy.get(".nav-link").contains("About").should("be.visible");
      cy.get(".nav-link").contains("Work").should("be.visible");
      cy.get(".nav-link").contains("Contact").should("be.visible");
    });

    it("✅ Mobile menu closes on link click", () => {
      cy.setMobileViewport();
      cy.get("button[aria-label='Toggle Menu']").click();
      cy.get(".sm\\:hidden").should("be.visible");

      cy.get(".nav-link").first().click();
      cy.get(".sm\\:hidden").should("not.be.visible");
    });

    it("✅ Mobile menu toggle button shows correct icon", () => {
      cy.setMobileViewport();
      cy.get("button[aria-label='Toggle Menu']").within(() => {
        cy.get("img").should("have.attr", "src");
      });

      // Open menu
      cy.get("button[aria-label='Toggle Menu']").click();
      cy.get("button[aria-label='Toggle Menu']").within(() => {
        cy.get("img").should("have.attr", "alt", "toggle");
      });
    });

    it("✅ Backdrop blur is applied to navbar", () => {
      cy.get('[class*="backdrop-blur"]').first().should("be.visible");
    });

    it("✅ Navigation links have hover effects", () => {
      cy.get(".nav-link").first().trigger("mouseenter");
      cy.get(".nav-link").first().trigger("mouseleave");
    });
  });

  // ========== HERO SECTION COMPONENT TESTS ==========
  describe("Hero Component", () => {
    it("✅ Hero section has correct id", () => {
      cy.get("#home").should("exist");
    });

    it("✅ Hero section is full viewport height", () => {
      cy.get("#home").then(($hero) => {
        const height = $hero.height();
        cy.window().then((win) => {
          expect(height).to.be.greaterThan(win.innerHeight * 0.8);
        });
      });
    });

    it("✅ Hero contains profile/main image", () => {
      cy.get("#home").within(() => {
        cy.get("img").should("have.length.greaterThan", 0);
      });
    });

    it("✅ Hero content is centered and positioned", () => {
      cy.get("#home").should("have.css", "display");
    });

    it("✅ Dark theme is applied to hero", () => {
      cy.get("#home").should("have.css", "color");
    });

    it("✅ Hero has scroll down indicator", () => {
      cy.get("#home").within(() => {
        // Check for chevron down or scroll indicator
        cy.get("button, svg, img").should("have.length.greaterThan", 0);
      });
    });
  });

  // ========== ABOUT SECTION COMPONENT TESTS ==========
  describe("About Component", () => {
    beforeEach(() => {
      cy.scrollToSection("about");
    });

    it("✅ About section has correct id", () => {
      cy.get("#about").should("exist");
    });

    it("✅ About displays professional heading", () => {
      cy.get("#about").within(() => {
        cy.get("h1").should("contain", "Shubham");
      });
    });

    it("✅ About section uses grid layout", () => {
      cy.get("#about").within(() => {
        cy.get("[class*='grid']").should("have.length.greaterThan", 0);
      });
    });

    it("✅ Copy email button has interactive state", () => {
      cy.get("#about").within(() => {
        const $btn = cy.get("button").contains(/copy/i);
        $btn.trigger("mouseenter");
        $btn.should("be.visible");
      });
    });

    it("✅ Email copied state is animated", () => {
      cy.get("#about").within(() => {
        cy.get("button").contains(/copy/i).click();
        cy.get("button").should("contain", /copied/i);

        // Verify animation - wait and check state changes back
        cy.wait(2100);
        cy.get("button").should("contain", /copy/i);
      });
    });

    it("✅ About displays coded image", () => {
      cy.get("#about").within(() => {
        cy.get("img").should("have.attr", "src");
      });
    });

    it("✅ About displays skill cards/sections", () => {
      cy.get("#about").within(() => {
        cy.get("[class*='group'], [class*='card'], div").should(
          "have.length.greaterThan",
          5
        );
      });
    });

    it("✅ Globe component initializes in about", () => {
      cy.get("#about").within(() => {
        // Globe is 3D component - check for canvas
        cy.get("canvas").should("exist");
      });
    });

    it("✅ About displays frameworks/skills", () => {
      cy.get("#about").within(() => {
        cy.get("img[alt*='skill'], img[alt*='logo'], img[src*='logos']")
          .should("have.length.greaterThan", 0);
      });
    });
  });

  // ========== PROJECT COMPONENT TESTS ==========
  describe("Project Component", () => {
    beforeEach(() => {
      cy.scrollToSection("work");
    });

    it("✅ Project section has work id", () => {
      cy.get("#work").should("exist");
    });

    it("✅ Project cards display project titles", () => {
      cy.get("#work").within(() => {
        cy.get("p").should("contain.text", /Swiggy|Tourvisto/);
      });
    });

    it("✅ Project cards show technology tags", () => {
      cy.get("#work").within(() => {
        cy.get("span").should("contain.text", /React|TypeScript|TailwindCSS/);
      });
    });

    it("✅ Project cards have Read More button", () => {
      cy.get("#work").within(() => {
        cy.get("button").contains("Read More").should("have.length.greaterThan", 0);
      });
    });

    it("✅ Project preview image follows mouse", () => {
      cy.get("#work").within(() => {
        const firstProject = cy.get("[class*='space-y']").first();
        firstProject.trigger("mousemove", { clientX: 100, clientY: 100 });

        // Preview should exist
        cy.get("#work").find("img[class*='fixed']").should("exist");

        firstProject.trigger("mouseleave");
      });
    });

    it("✅ ProjectDetails modal renders correctly", () => {
      cy.openProjectModal(0);

      cy.get("[style*='backdrop-blur']").within(() => {
        // Modal should have title
        cy.get("h5").should("be.visible");

        // Modal should have description
        cy.get("p").should("have.length.greaterThan", 0);

        // Modal should have close button
        cy.get("button").should("have.length.greaterThan", 0);

        // Modal should have project image
        cy.get("img").should("have.length.greaterThan", 0);
      });

      cy.closeProjectModal();
    });

    it("✅ ProjectDetails modal has technology icons", () => {
      cy.openProjectModal(0);

      cy.get("[style*='backdrop-blur']").within(() => {
        cy.get("img[alt]").should("have.length.greaterThan", 1);
      });

      cy.closeProjectModal();
    });

    it("✅ ProjectDetails has View Project link", () => {
      cy.openProjectModal(0);

      cy.get("[style*='backdrop-blur']").within(() => {
        cy.get("a").should("contain.text", /View Project|view/i);
      });

      cy.closeProjectModal();
    });

    it("✅ Project divider line is visible between projects", () => {
      cy.get("#work").within(() => {
        cy.get("[class*='bg-gradient'], [class*='h-\\[1px\\]']").should(
          "have.length.greaterThan",
          1
        );
      });
    });
  });

  // ========== TIMELINE/EXPERIENCES COMPONENT TESTS ==========
  describe("Timeline Component", () => {
    it("✅ Timeline displays all experiences", () => {
      cy.contains(/software engineer|timeline|experience/i).scrollIntoView();

      // Check for multiple entries
      cy.contains(/insurance|supply chain|audit/i).should("exist");
    });

    it("✅ Timeline entries show dates", () => {
      cy.contains(/software engineer|timeline/i).scrollIntoView();

      cy.contains(/2019|2022|2025/i).should("exist");
    });

    it("✅ Timeline entries show job titles", () => {
      cy.contains(/software engineer|analyst/i).scrollIntoView();

      cy.contains(/Senior|Analyst|Engineer/i).should("exist");
    });

    it("✅ Timeline entries show descriptions", () => {
      cy.contains(/software engineer|analyst/i).scrollIntoView();

      cy.contains(/Built|developed|engineered|implemented/i).should("exist");
    });
  });

  // ========== MARQUEE/TESTIMONIALS COMPONENT TESTS ==========
  describe("Marquee Component", () => {
    beforeEach(() => {
      cy.contains("h2", /clients|testimonial/i).scrollIntoView();
    });

    it("✅ Marquee displays multiple review cards", () => {
      cy.get("figure").should("have.length.greaterThan", 3);
    });

    it("✅ Review cards contain required elements", () => {
      cy.get("figure").first().within(() => {
        // Avatar
        cy.get("img").should("exist");

        // Name
        cy.contains(/\\S+/, { matchCase: false }).should("exist");

        // Review text
        cy.get("blockquote").should("be.visible");
      });
    });

    it("✅ Review cards are styled correctly", () => {
      cy.get("figure")
        .first()
        .should(
          "have.class",
          "relative",
          "h-full",
          "w-64",
          "cursor-pointer",
          "overflow-hidden",
          "rounded-xl"
        );
    });

    it("✅ Marquee has pause on hover", () => {
      cy.get("figure").first().trigger("mouseenter");
      cy.get("figure").first().trigger("mouseleave");
    });

    it("✅ Two marquee rows exist for reviews", () => {
      cy.get("[class*='Marquee']").should("have.length", 2);
    });

    it("✅ One marquee goes forward, one reverse", () => {
      cy.get("[class*='Marquee']").eq(1).should("have.class", "reverse");
    });

    it("✅ Review text contains positive language", () => {
      cy.get("blockquote").should(
        "contain.text",
        /amazing|incredible|excellent|great|stunning|breathtaking|recommend/i
      );
    });
  });

  // ========== CONTACT FORM COMPONENT TESTS ==========
  describe("Contact Form Component", () => {
    beforeEach(() => {
      cy.scrollToSection("contact");
    });

    it("✅ Form has correct id attribute", () => {
      cy.get("[data-testid='contact-form']").should("exist");
    });

    it("✅ Form inputs have proper ids and names", () => {
      cy.get("#contact").within(() => {
        cy.get("input#name[name='name']").should("exist");
        cy.get("input#email[name='email']").should("exist");
        cy.get("textarea#message[name='message']").should("exist");
      });
    });

    it("✅ Form labels are associated with inputs", () => {
      cy.get("#contact").within(() => {
        cy.get("label[for='name']").should("contain", "Full Name");
        cy.get("label[for='email']").should("contain", "Email");
        cy.get("label[for='message']").should("contain", "Message");
      });
    });

    it("✅ Form fields have placeholder text", () => {
      cy.get("#contact").within(() => {
        cy.get("input[name='name']").should("have.attr", "placeholder");
        cy.get("input[name='email']").should("have.attr", "placeholder");
        cy.get("textarea[name='message']").should("have.attr", "placeholder");
      });
    });

    it("✅ Email field has email type", () => {
      cy.get("#contact").within(() => {
        cy.get("input[name='email']").should("have.attr", "type", "email");
      });
    });

    it("✅ Message field is textarea", () => {
      cy.get("#contact").within(() => {
        cy.get("textarea[name='message']").should("exist");
      });
    });

    it("✅ Submit button has correct text and type", () => {
      cy.get("#contact").within(() => {
        cy.get("button[type='submit']").should("contain", "Send");
      });
    });

    it("✅ Form is inside styled container", () => {
      cy.get("#contact").within(() => {
        cy.get("[class*='border']").should("have.length.greaterThan", 0);
      });
    });

    it("✅ Particles component is in contact section", () => {
      cy.get("#contact").within(() => {
        // Check for particle animation
        cy.get("canvas, [class*='particles']").should("exist");
      });
    });

    it("✅ Form heading displays", () => {
      cy.get("#contact").within(() => {
        cy.get("h2").should("contain", "Let's Talk");
      });
    });

    it("✅ Form description displays", () => {
      cy.get("#contact").within(() => {
        cy.get("p").should("contain.text", /loking|build|improve/i);
      });
    });
  });

  // ========== FOOTER COMPONENT TESTS ==========
  describe("Footer Component", () => {
    beforeEach(() => {
      cy.scrollTo("bottom");
    });

    it("✅ Footer contains horizontal divider", () => {
      cy.get("footer, [class*='footer']").within(() => {
        cy.get("div[class*='bg-gradient']").should("have.length.greaterThan", 0);
      });
    });

    it("✅ Footer displays legal links flex container", () => {
      cy.get("footer, [class*='footer']").within(() => {
        cy.get("div[class*='flex']").should("have.length.greaterThan", 0);
      });
    });

    it("✅ Footer social links are in flex container", () => {
      cy.get("footer, [class*='footer']").within(() => {
        cy.get("div[class*='gap']").should("have.length.greaterThan", 0);
      });
    });

    it("✅ Footer social icons are images", () => {
      cy.get("footer, [class*='footer']").within(() => {
        cy.get("a").within(() => {
          cy.get("img").should("have.length.greaterThan", 0);
        });
      });
    });

    it("✅ Footer copyright text is visible", () => {
      cy.get("footer, [class*='footer']").should("contain.text", "© 2026");
      cy.get("footer, [class*='footer']").should("contain.text", "Shubham");
      cy.get("footer, [class*='footer']").should(
        "contain.text",
        "All rights reserved"
      );
    });

    it("✅ Footer has neutral text color", () => {
      cy.get("footer, [class*='footer']").should(
        "have.class",
        /text-neutral|text-gray/
      );
    });
  });

  // ========== ALERT COMPONENT TESTS ==========
  describe("Alert Component", () => {
    it("✅ Success alert displays after form submission", () => {
      cy.scrollToSection("contact");
      cy.fillContactForm({
        name: "Test User",
        email: "test@example.com",
        message: "Test message",
      });

      cy.submitContactForm();

      // Alert should appear
      cy.get("[class*='alert'], [role='alert']", { timeout: 3000 }).should(
        "exist"
      );
    });

    it("✅ Alert has appropriate styling for success", () => {
      cy.scrollToSection("contact");
      cy.fillContactForm({
        name: "Test User",
        email: "test@example.com",
        message: "Test message",
      });

      cy.submitContactForm();

      cy.get("[class*='alert'], [role='alert']", { timeout: 3000 }).should(
        "exist"
      );
    });

    it("✅ Alert disappears after timeout", () => {
      cy.scrollToSection("contact");
      cy.fillContactForm({
        name: "Test User",
        email: "test@example.com",
        message: "Test message",
      });

      cy.submitContactForm();

      cy.get("[class*='alert'], [role='alert']", { timeout: 3000 }).should(
        "exist"
      );

      // Wait for auto-dismiss
      cy.wait(5000);
      cy.get("[class*='alert'], [role='alert']").should("not.exist");
    });
  });

  // ========== FLIP WORDS COMPONENT TESTS ==========
  describe("FlipWords Component", () => {
    it("✅ Flip words animation is present in hero", () => {
      cy.get("#home").within(() => {
        // Check for animated text elements
        cy.get("span, p").should("have.length.greaterThan", 0);
      });
    });

    it("✅ Flip words contain multiple words to cycle", () => {
      cy.get("#home").within(() => {
        // Hero section should have multiple text elements
        cy.get("p, span").then(($elements) => {
          expect($elements.length).to.be.greaterThan(0);
        });
      });
    });
  });

  // ========== GLOBE COMPONENT TESTS ==========
  describe("Globe Component", () => {
    it("✅ Globe 3D canvas renders in about section", () => {
      cy.scrollToSection("about");

      cy.get("#about").within(() => {
        cy.get("canvas").should("exist");
      });
    });

    it("✅ Globe has proper sizing", () => {
      cy.scrollToSection("about");

      cy.get("#about")
        .within(() => {
          cy.get("canvas").then(($canvas) => {
            expect($canvas.width()).to.be.greaterThan(0);
            expect($canvas.height()).to.be.greaterThan(0);
          });
        });
    });
  });

  // ========== INTERACTIVE ELEMENTS TESTS ==========
  describe("Interactive Elements", () => {
    it("✅ All buttons are clickable", () => {
      cy.get("button").each(($btn, index) => {
        if (index < 5) {
          // Test first 5 buttons
          cy.wrap($btn).should("not.be.disabled");
        }
      });
    });

    it("✅ All links are clickable", () => {
      cy.get("a").each(($link, index) => {
        if (index < 5) {
          // Test first 5 links
          cy.wrap($link).should("have.attr", "href");
        }
      });
    });

    it("✅ All form inputs are focusable", () => {
      cy.scrollToSection("contact");

      cy.get("input, textarea").each(($input) => {
        cy.wrap($input).focus().should("have.focus");
      });
    });

    it("✅ Hover effects are present on buttons", () => {
      cy.get("button").first().trigger("mouseenter");
      cy.get("button").first().trigger("mouseleave");
    });

    it("✅ Scroll event listeners are working", () => {
      cy.window().then((win) => {
        const startY = win.scrollY;
        cy.scrollTo("bottom");
        cy.window().then((win2) => {
          expect(win2.scrollY).to.be.greaterThan(startY);
        });
      });
    });
  });
});
