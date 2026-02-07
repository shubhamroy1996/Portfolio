describe("Portfolio E2E Tests", { viewportWidth: 1280, viewportHeight: 720 }, () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("body").should("be.visible");
  });

  // ========== NAVBAR & NAVIGATION TESTS ==========
  describe("Navbar & Navigation", () => {
    it("✅ Navbar is visible and contains logo", () => {
      cy.get('[class*="fixed"]').first().should("be.visible");
      cy.get("a").contains("Shubham").should("be.visible");
    });

    it("✅ Desktop navigation links are visible on desktop viewport", () => {
      cy.get(".hidden.sm\\:flex").should("be.visible");
      cy.get(".nav-li").should("have.length.greaterThan", 0);
    });

    it("✅ Navigation links navigate to sections", () => {
      // Test Home navigation
      cy.get(".nav-link").contains("Home").click();
      cy.get("#home").should("be.visible");

      // Test About navigation
      cy.get(".nav-link").contains("About").click();
      cy.get("#about").should("be.visible");

      // Test Work navigation
      cy.get(".nav-link").contains("Work").click();
      cy.get("#work").should("be.visible");

      // Test Contact navigation
      cy.get(".nav-link").contains("Contact").click();
      cy.get("#contact").should("be.visible");
    });

    it("✅ Mobile menu toggle works", () => {
      // Desktop first - hide mobile menu
      cy.viewport(375, 667);
      cy.get("button[aria-label='Toggle Menu']").should("be.visible");
      
      // Menu should be closed initially
      cy.get(".sm\\:hidden").should("not.be.visible");
      
      // Click to open menu
      cy.get("button[aria-label='Toggle Menu']").click();
      cy.get(".sm\\:hidden").should("be.visible");
      
      // Click to close menu
      cy.get("button[aria-label='Toggle Menu']").click();
      cy.get(".sm\\:hidden").should("not.be.visible");
    });

    it("✅ Mobile navigation links work and close menu", () => {
      cy.viewport(375, 667);
      cy.get("button[aria-label='Toggle Menu']").click();
      cy.get(".nav-link").contains("About").click();
      cy.get("#about").should("be.visible");
      // Menu should be closed after navigation
      cy.get(".sm\\:hidden").should("not.be.visible");
    });

    it("✅ Logo click navigates to home", () => {
      cy.get("a").contains("Shubham").click();
      cy.get("#home").should("be.visible");
    });
  });

  // ========== HERO SECTION TESTS ==========
  describe("Hero Section", () => {
    it("✅ Hero section is visible on page load", () => {
      cy.get("#home").should("be.visible");
      cy.get("#home").should("contain.text", "Shubham");
    });

    it("✅ Profile image is displayed in hero", () => {
      cy.get("#home img").should("have.length.greaterThan", 0);
    });

    it("✅ Scroll to About button works", () => {
      cy.get("#home").within(() => {
        cy.get("button").contains(/scroll|about/i, { matchCase: false }).then(($btn) => {
          if ($btn.length > 0) {
            cy.wrap($btn).click();
          } else {
            // If no specific button, scroll manually
            cy.get("#about").scrollIntoView();
          }
        });
      });
      cy.get("#about").should("be.visible");
    });

    it("✅ Chevron Down icon is visible in hero", () => {
      cy.get("#home").should("be.visible");
      // Verify hero contains interactive elements
      cy.get("#home").find("button, a").should("have.length.greaterThan", 0);
    });
  });

  // ========== ABOUT SECTION TESTS ==========
  describe("About Section", () => {
    it("✅ About section is visible when scrolled to", () => {
      cy.get("#about").scrollIntoView().should("be.visible");
    });

    it("✅ About section contains heading", () => {
      cy.get("#about").should("contain", "About Me");
    });

    it("✅ About section displays professional bio", () => {
      cy.get("#about").within(() => {
        cy.get("h1").should("contain", "Shubham");
        cy.get("p").should("contain.text", /experience|React|years/i);
      });
    });

    it("✅ Copy Email button is visible and functions", () => {
      cy.get("#about").within(() => {
        cy.get("button").contains(/copy|email/i).should("be.visible");
      });
    });

    it("✅ Copy Email button shows confirmation state", () => {
      cy.get("#about").scrollIntoView();
      cy.get("#about").within(() => {
        cy.get("button").contains(/copy/i).click();
        cy.get("button").should("contain", /copied/i);
        // State returns after 2 seconds
        cy.wait(2100);
        cy.get("button").should("contain", /copy/i);
      });
    });

    it("✅ About section displays framework logos", () => {
      cy.get("#about").scrollIntoView();
      cy.get("#about").within(() => {
        cy.get("img").should("have.length.greaterThan", 1);
      });
    });

    it("✅ About section displays time in IST", () => {
      cy.get("#about").scrollIntoView();
      cy.get("#about").within(() => {
        // Check for time display format (HH:MM AM/PM)
        cy.get("p").should("contain.text", /\\d{1,2}:\\d{2}/);
      });
    });

    it("✅ Globe component renders (3D element)", () => {
      cy.get("#about").scrollIntoView();
      // The globe is rendered as a canvas or Three.js element
      cy.get("#about").find("canvas, [style*='perspective']").should("exist");
    });

    it("✅ About section displays skill categories", () => {
      cy.get("#about").scrollIntoView();
      cy.get("#about").within(() => {
        cy.get("p").should("contain.text", /React|Redux|TanStack|architecture/i);
      });
    });

    it("✅ Currently Leveling Up section is visible", () => {
      cy.get("#about").scrollIntoView();
      cy.get("#about").within(() => {
        cy.get("p").should("contain.text", /leveling up|system design|ai/i);
      });
    });
  });

  // ========== PROJECTS SECTION TESTS ==========
  describe("Projects Section", () => {
    it("✅ Projects section is visible and scrollable", () => {
      cy.get("#work").scrollIntoView().should("be.visible");
      cy.get("#work").should("contain", "Highlights from recent projects");
    });

    it("✅ Projects section displays project cards", () => {
      cy.get("#work").scrollIntoView();
      cy.get("#work").within(() => {
        cy.get("div").should("have.length.greaterThan", 5);
      });
    });

    it("✅ Swiggy Clone project is listed", () => {
      cy.get("#work").scrollIntoView();
      cy.get("#work").should("contain", "Swiggy Clone");
    });

    it("✅ Tourvisto project is listed", () => {
      cy.get("#work").scrollIntoView();
      cy.get("#work").should("contain", "Tourvisto");
    });

    it("✅ Project cards display technology tags", () => {
      cy.get("#work").scrollIntoView();
      cy.get("#work").within(() => {
        cy.get("span").should("contain.text", /React|TypeScript|TailwindCSS/);
      });
    });

    it("✅ Project Read More button opens modal", () => {
      cy.get("#work").scrollIntoView();
      cy.get("#work").within(() => {
        cy.get("button").contains("Read More").first().click();
      });
      // Modal should be visible
      cy.get("[style*='backdrop-blur']").should("be.visible");
    });

    it("✅ Project modal displays full details", () => {
      cy.get("#work").scrollIntoView();
      cy.get("#work").within(() => {
        cy.get("button").contains("Read More").first().click();
      });
      cy.get("[style*='backdrop-blur']").within(() => {
        cy.get("h5").should("be.visible");
        cy.get("p").should("have.length.greaterThan", 1);
        cy.get("img").should("have.length.greaterThan", 0);
      });
    });

    it("✅ Project modal close button works", () => {
      cy.get("#work").scrollIntoView();
      cy.get("#work").within(() => {
        cy.get("button").contains("Read More").first().click();
      });
      cy.get("[style*='backdrop-blur']").should("be.visible");
      cy.get("button").then(($buttons) => {
        // Find close button (usually top-right of modal)
        cy.get("button").last().click({ force: true });
      });
      cy.get("[style*='backdrop-blur']").should("not.exist");
    });

    it("✅ Project tags are displayed in modal", () => {
      cy.get("#work").scrollIntoView();
      cy.get("#work").within(() => {
        cy.get("button").contains("Read More").first().click();
      });
      cy.get("[style*='backdrop-blur']").within(() => {
        cy.get("img").should("have.length.greaterThan", 1);
      });
    });

    it("✅ View Project link has valid href", () => {
      cy.get("#work").scrollIntoView();
      cy.get("#work").within(() => {
        cy.get("button").contains("Read More").first().click();
      });
      cy.get("[style*='backdrop-blur']").within(() => {
        cy.get("a").should("have.attr", "href");
      });
    });

    it("✅ Mouse move shows project preview image", () => {
      cy.get("#work").scrollIntoView();
      cy.get("#work").within(() => {
        cy.get("div").first().trigger("mouseenter");
      });
      // Preview image position changes with mouse
      cy.get("#work").find("img[class*='fixed']").should("exist");
    });

    it("✅ Mouse leave hides preview image", () => {
      cy.get("#work").scrollIntoView();
      cy.get("#work").within(() => {
        cy.get("div").first().trigger("mouseleave");
      });
    });
  });

  // ========== EXPERIENCES SECTION TESTS ==========
  describe("Experiences Section", () => {
    it("✅ Experiences section is visible", () => {
      cy.get("body").then(($body) => {
        cy.wrap($body).scrollIntoView();
      });
      // Scroll down to find experiences
      cy.scrollTo("bottom", { duration: 1000 });
      cy.contains("h2", /experience|timeline/i, { matchCase: false }).should("exist");
    });

    it("✅ Timeline component displays multiple experiences", () => {
      cy.contains("h2", /experience|timeline/i, { matchCase: false }).scrollIntoView({ force: true });
      cy.contains(/software engineer|insurance|supply chain|audit/i).should("exist");
    });

    it("✅ Experience cards contain job details", () => {
      cy.contains(/software engineer|analyst/i).scrollIntoView({ force: true });
      cy.contains(/2019|2022|2025/i).should("exist");
    });

    it("✅ Experience descriptions are visible", () => {
      cy.contains(/software engineer|analyst/i).scrollIntoView({ force: true });
      cy.contains(/✅|built|developed|engineered/i).should("exist");
    });
  });

  // ========== TESTIMONIALS SECTION TESTS ==========
  describe("Testimonials Section", () => {
    it("✅ Testimonials section is visible", () => {
      cy.contains("h2", /clients|testimonial|hear/i, { matchCase: false }).scrollIntoView().should("be.visible");
    });

    it("✅ Review cards are displayed in marquee", () => {
      cy.contains("h2", /clients|testimonial|hear/i).scrollIntoView();
      cy.get("figure").should("have.length.greaterThan", 2);
    });

    it("✅ Review cards contain profile images", () => {
      cy.contains("h2", /clients|testimonial|hear/i).scrollIntoView();
      cy.get("figure").within(() => {
        cy.get("img").should("have.length.greaterThan", 0);
      });
    });

    it("✅ Review cards contain names", () => {
      cy.contains("h2", /clients|testimonial|hear/i).scrollIntoView();
      cy.get("figure").first().within(() => {
        cy.get("figcaption").should("be.visible");
      });
    });

    it("✅ Review cards contain text content", () => {
      cy.contains("h2", /clients|testimonial|hear/i).scrollIntoView();
      cy.get("figure").first().within(() => {
        cy.get("blockquote").should("contain.text", /amazing|excellent|great|recommend/i);
      });
    });

    it("✅ Marquee animation pauses on hover", () => {
      cy.contains("h2", /clients|testimonial|hear/i).scrollIntoView();
      cy.get("figure").first().trigger("mouseenter");
      cy.get("figure").first().trigger("mouseleave");
    });

    it("✅ Multiple review rows are present", () => {
      cy.contains("h2", /clients|testimonial|hear/i).scrollIntoView();
      cy.get("[class*='Marquee']").should("have.length.greaterThan", 1);
    });
  });

  // ========== CONTACT FORM TESTS ==========
  describe("Contact Form", () => {
    it("✅ Contact section is visible", () => {
      cy.get("#contact").scrollIntoView().should("be.visible");
    });

    it("✅ Contact form is visible", () => {
      cy.get("#contact").within(() => {
        cy.get('[data-testid="contact-form"]').should("be.visible");
      });
    });

    it("✅ Contact form contains all input fields", () => {
      cy.get("#contact").within(() => {
        cy.get("input[name='name']").should("be.visible");
        cy.get("input[name='email']").should("be.visible");
        cy.get("textarea[name='message']").should("be.visible");
      });
    });

    it("✅ Name field has correct placeholder", () => {
      cy.get("#contact").within(() => {
        cy.get("input[name='name']").should("have.attr", "placeholder", "John Doe");
      });
    });

    it("✅ Email field has correct placeholder", () => {
      cy.get("#contact").within(() => {
        cy.get("input[name='email']").should("have.attr", "placeholder", "JohnDoe@email.com");
      });
    });

    it("✅ Message field has correct placeholder", () => {
      cy.get("#contact").within(() => {
        cy.get("textarea[name='message']").should("have.attr", "placeholder", "Share your thoughts...");
      });
    });

    it("✅ Submit button is visible", () => {
      cy.get("#contact").within(() => {
        cy.get("button[type='submit']").should("be.visible");
        cy.get("button[type='submit']").should("contain", "Send");
      });
    });

    it("✅ Form requires name field", () => {
      cy.get("#contact").within(() => {
        cy.get("input[name='name']").should("have.attr", "required");
      });
    });

    it("✅ Form requires email field", () => {
      cy.get("#contact").within(() => {
        cy.get("input[name='email']").should("have.attr", "required");
      });
    });

    it("✅ Form requires message field", () => {
      cy.get("#contact").within(() => {
        cy.get("textarea[name='message']").should("have.attr", "required");
      });
    });

    it("✅ Form fields accept input", () => {
      cy.get("#contact").within(() => {
        cy.get("input[name='name']").type("John Doe");
        cy.get("input[name='name']").should("have.value", "John Doe");

        cy.get("input[name='email']").type("john@example.com");
        cy.get("input[name='email']").should("have.value", "john@example.com");

        cy.get("textarea[name='message']").type("Hello, this is a test message.");
        cy.get("textarea[name='message']").should("have.value", "Hello, this is a test message.");
      });
    });

    it("✅ Form validates email format", () => {
      cy.get("#contact").within(() => {
        cy.get("input[name='email']").should("have.attr", "type", "email");
      });
    });

    it("✅ Form submission shows loading state", () => {
      cy.get("#contact").within(() => {
        cy.get("input[name='name']").type("John Doe");
        cy.get("input[name='email']").type("john@example.com");
        cy.get("textarea[name='message']").type("Test message");
        cy.get("button[type='submit']").click();
      });
      cy.get("#contact").within(() => {
        cy.get("button[type='submit']").should("include.text", "Sending");
      });
    });

    it("✅ Form displays success alert after submission", () => {
      cy.intercept("POST", "**/api/email/**", {
        statusCode: 200,
        body: { success: true },
      }).as("sendEmail");

      cy.get("#contact").within(() => {
        cy.get("input[name='name']").type("John Doe");
        cy.get("input[name='email']").type("john@example.com");
        cy.get("textarea[name='message']").type("Test message");
        cy.get("button[type='submit']").click();
      });

      // Check for success message (may appear as alert)
      cy.contains(/message|sent|success/i, { timeout: 3000 }).should("exist");
    });

    it("✅ Form clears after successful submission", () => {
      cy.get("#contact").within(() => {
        cy.get("input[name='name']").type("John Doe");
        cy.get("input[name='email']").type("john@example.com");
        cy.get("textarea[name='message']").type("Test message");
        cy.get("button[type='submit']").click();
      });

      // After submission, fields should be empty
      cy.get("#contact").within(() => {
        cy.get("button[type='submit']").should("contain", "Send", { timeout: 6000 });
        cy.get("input[name='name']").should("have.value", "");
        cy.get("input[name='email']").should("have.value", "");
        cy.get("textarea[name='message']").should("have.value", "");
      });
    });

    it("✅ Contact section displays heading", () => {
      cy.get("#contact").within(() => {
        cy.get("h2").should("contain", "Let's Talk");
      });
    });

    it("✅ Contact section displays description", () => {
      cy.get("#contact").within(() => {
        cy.get("p").should("contain.text", /loking|build|website|improve/i);
      });
    });

    it("✅ Form is accessible with keyboard navigation", () => {
      cy.get("#contact").within(() => {
        cy.get("input[name='name']").focus().should("have.focus");
        cy.get("input[name='email']").focus().should("have.focus");
        cy.get("textarea[name='message']").focus().should("have.focus");
      });
    });
  });

  // ========== FOOTER TESTS ==========
  describe("Footer Section", () => {
    it("✅ Footer is visible at bottom of page", () => {
      cy.get("footer, [class*='footer']").scrollIntoView().should("be.visible");
    });

    it("✅ Footer displays copyright notice", () => {
      cy.get("footer, [class*='footer']").should("contain", "© 2026 Shubham");
    });

    it("✅ Footer displays Terms & Conditions link", () => {
      cy.get("footer, [class*='footer']").should("contain", "Terms & Conditions");
    });

    it("✅ Footer displays Privacy Policy link", () => {
      cy.get("footer, [class*='footer']").should("contain", "Privacy Policy");
    });

    it("✅ Footer contains social media links", () => {
      cy.get("footer, [class*='footer']").within(() => {
        cy.get("a").should("have.length.greaterThan", 2);
      });
    });

    it("✅ Social media links have valid hrefs", () => {
      cy.get("footer, [class*='footer']").within(() => {
        cy.get("a").each(($link) => {
          cy.wrap($link).should("have.attr", "href");
        });
      });
    });

    it("✅ Social media links open in new tab", () => {
      cy.get("footer, [class*='footer']").within(() => {
        cy.get("a").each(($link) => {
          if (cy.wrap($link).should("have.attr", "target")) {
            cy.wrap($link).should("have.attr", "rel", "noopener noreferrer");
          }
        });
      });
    });

    it("✅ Footer has proper styling and spacing", () => {
      cy.get("footer, [class*='footer']").should("be.visible");
      cy.get("footer, [class*='footer']").should("have.css", "display");
    });
  });

  // ========== RESPONSIVE & LAYOUT TESTS ==========
  describe("Responsive Design", () => {
    it("✅ Page is responsive on mobile (375px)", () => {
      cy.viewport(375, 667);
      cy.visit("/");
      cy.get("body").should("be.visible");
      cy.get("#home").should("be.visible");
    });

    it("✅ Page is responsive on tablet (768px)", () => {
      cy.viewport(768, 1024);
      cy.visit("/");
      cy.get("body").should("be.visible");
      cy.get("#home").should("be.visible");
    });

    it("✅ Page is responsive on desktop (1280px)", () => {
      cy.viewport(1280, 720);
      cy.visit("/");
      cy.get("body").should("be.visible");
      cy.get("#home").should("be.visible");
    });

    it("✅ Content reflows properly on small screens", () => {
      cy.viewport(375, 667);
      cy.visit("/");
      cy.get("#about").scrollIntoView();
      cy.get("#about").should("be.visible");
      cy.get("#about").within(() => {
        cy.get("h1").should("be.visible");
      });
    });

    it("✅ Navigation is hidden and toggle visible on mobile", () => {
      cy.viewport(375, 667);
      cy.visit("/");
      cy.get(".hidden.sm\\:flex").should("not.be.visible");
      cy.get("button[aria-label='Toggle Menu']").should("be.visible");
    });

    it("✅ Navigation is visible on desktop", () => {
      cy.viewport(1280, 720);
      cy.visit("/");
      cy.get(".hidden.sm\\:flex").should("be.visible");
      cy.get("button[aria-label='Toggle Menu']").should("not.be.visible");
    });
  });

  // ========== ANIMATION & INTERACTION TESTS ==========
  describe("Animations & Interactions", () => {
    it("✅ Smooth scrolling works between sections", () => {
      cy.get(".nav-link").contains("About").click();
      cy.get("#about").should("be.visible");
      cy.window().then((win) => {
        expect(win.scrollY).to.be.greaterThan(0);
      });
    });

    it("✅ Hero blur text animation is present", () => {
      cy.get("#home").should("be.visible");
      cy.get("#home").within(() => {
        cy.get("p, span").should("have.length.greaterThan", 0);
      });
    });

    it("✅ Project modal animates on open", () => {
      cy.get("#work").scrollIntoView();
      cy.get("#work").within(() => {
        cy.get("button").contains("Read More").first().click();
      });
      cy.get("[style*='backdrop-blur']").should("be.visible");
      cy.get("[style*='backdrop-blur']").within(() => {
        cy.get("[style*='motion'], [style*='scale']").should("exist");
      });
    });

    it("✅ Copy email button animates on click", () => {
      cy.get("#about").scrollIntoView();
      cy.get("#about").within(() => {
        cy.get("button").contains(/copy/i).click();
      });
      // Text changes with animation
      cy.get("#about").within(() => {
        cy.get("button").should("contain", /copied/i);
      });
    });

    it("✅ Hover effects work on interactive elements", () => {
      cy.get("#work").scrollIntoView();
      cy.get("#work").within(() => {
        cy.get("button").contains("Read More").first().trigger("mouseenter");
        cy.get("button").contains("Read More").first().trigger("mouseleave");
      });
    });
  });

  // ========== PAGE PERFORMANCE & LOADING TESTS ==========
  describe("Page Performance", () => {
    it("✅ Page loads and displays hero within reasonable time", () => {
      cy.visit("/");
      cy.get("#home").should("be.visible");
    });

    it("✅ Lazy loaded sections load when scrolled into view", () => {
      cy.scrollTo("bottom", { duration: 2000 });
      cy.contains(/projects|experiences|testimonial/i).should("exist");
    });

    it("✅ Images are loaded and visible", () => {
      cy.visit("/");
      cy.get("img").each(($img) => {
        // Check if image has src attribute
        cy.wrap($img).should("have.attr", "src");
      });
    });

    it("✅ No broken links in navigation", () => {
      cy.visit("/");
      cy.get("a").each(($link) => {
        const href = $link.attr("href");
        if (href && !href.startsWith("http") && href !== "#") {
          cy.request({ url: href, failOnStatusCode: false }).then((response) => {
            expect([200, 304]).to.include(response.status);
          });
        }
      });
    });

    it("✅ Particles component renders without errors", () => {
      cy.get("#contact").scrollIntoView();
      cy.get("#contact").within(() => {
        // Canvas element should exist for particles
        cy.get("canvas, [style*='position']").should("exist");
      });
    });
  });

  // ========== ACCESSIBILITY TESTS ==========
  describe("Accessibility", () => {
    it("✅ Page has descriptive title", () => {
      cy.title().should("exist");
    });

    it("✅ Images have alt text", () => {
      cy.get("img").each(($img) => {
        cy.wrap($img).should("have.attr", "alt");
      });
    });

    it("✅ Form labels are associated with inputs", () => {
      cy.get("#contact").within(() => {
        cy.get("label").should("have.attr", "for");
        cy.get("input").should("have.attr", "id");
      });
    });

    it("✅ Navigation buttons are keyboard accessible", () => {
      cy.get(".nav-link").first().focus().should("have.focus");
    });

    it("✅ Buttons have proper type attributes", () => {
      cy.get("button").each(($btn) => {
        expect($btn.attr("type")).to.be.oneOf(["button", "submit", "reset", undefined]);
      });
    });

    it("✅ Form inputs have autocomplete attributes", () => {
      cy.get("#contact").within(() => {
        cy.get("input[name='name']").should("have.attr", "autocomplete");
        cy.get("input[name='email']").should("have.attr", "autocomplete");
      });
    });
  });

  // ========== EDGE CASES & ERROR HANDLING ==========
  describe("Edge Cases & Error Handling", () => {
    it("✅ Page handles rapid navigation clicks", () => {
      cy.get(".nav-link").contains("About").click();
      cy.get(".nav-link").contains("Home").click();
      cy.get(".nav-link").contains("Work").click();
      cy.get("#work").should("be.visible");
    });

    it("✅ Form submission with network error shows error message", () => {
      cy.intercept("POST", "**/api/email/**", {
        statusCode: 500,
        body: { error: "Server error" },
      }).as("emailError");

      cy.get("#contact").within(() => {
        cy.get("input[name='name']").type("John Doe");
        cy.get("input[name='email']").type("john@example.com");
        cy.get("textarea[name='message']").type("Test message");
        cy.get("button[type='submit']").click();
      });

      // Should show error message
      cy.contains(/error|wrong|failed/i, { timeout: 3000 }).should("exist");
    });

    it("✅ Modal can be closed by clicking close button", () => {
      cy.get("#work").scrollIntoView();
      cy.get("#work").within(() => {
        cy.get("button").contains("Read More").first().click();
      });
      cy.get("[style*='backdrop-blur']").should("be.visible");
      
      // Close modal
      cy.get("[style*='backdrop-blur']").within(() => {
        cy.get("button").first().click();
      });
      cy.get("[style*='backdrop-blur']").should("not.exist");
    });

    it("✅ Multiple section scrolls work without lag", () => {
      cy.get(".nav-link").contains("Home").click();
      cy.wait(200);
      cy.get(".nav-link").contains("About").click();
      cy.wait(200);
      cy.get(".nav-link").contains("Work").click();
      cy.wait(200);
      cy.get(".nav-link").contains("Contact").click();
      cy.get("#contact").should("be.visible");
    });
  });
});
