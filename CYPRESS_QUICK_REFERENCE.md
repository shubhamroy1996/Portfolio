# Portfolio Test Suite - Quick Reference Guide

## 📋 Test Files Overview

| File | Purpose | Test Count |
|------|---------|-----------|
| `portfolio.cy.js` | Core functionality tests | 96 |
| `portfolio-advanced.cy.js` | Advanced scenarios & user journeys | 58 |
| `portfolio-components.cy.js` | Component-specific tests | 54 |

## 🚀 Quick Start

### View Tests in Interactive Mode
```bash
npm run cy:open
```
Then select a test file to run tests while seeing them execute in real-time.

### Run All Tests (Headless)
```bash
npm run cy:run
```

### Run Specific Test File
```bash
npx cypress run --spec "cypress/e2e/portfolio.cy.js"
npx cypress run --spec "cypress/e2e/portfolio-advanced.cy.js"
npx cypress run --spec "cypress/e2e/portfolio-components.cy.js"
```

### Run With Development Server
```bash
npm run test:e2e        # Interactive with dev server
npm run test:e2e:ci     # Headless with dev server (CI/CD)
```

## 📊 Test Categories & Commands

### Main Test Suite (`portfolio.cy.js`)

**Run Only Navbar Tests**
```bash
npx cypress run --spec "cypress/e2e/portfolio.cy.js" --grep "Navbar"
```

**Run Only Contact Form Tests**
```bash
npx cypress run --spec "cypress/e2e/portfolio.cy.js" --grep "Contact Form"
```

**Run Only Responsive Tests**
```bash
npx cypress run --spec "cypress/e2e/portfolio.cy.js" --grep "Responsive Design"
```

**Run Only Accessibility Tests**
```bash
npx cypress run --spec "cypress/e2e/portfolio.cy.js" --grep "Accessibility"
```

### Advanced Test Suite (`portfolio-advanced.cy.js`)

**Run User Journey Tests**
```bash
npx cypress run --spec "cypress/e2e/portfolio-advanced.cy.js" --grep "User Journeys"
```

**Run Mobile Tests**
```bash
npx cypress run --spec "cypress/e2e/portfolio-advanced.cy.js" --grep "Mobile"
```

**Run Form Validation Tests**
```bash
npx cypress run --spec "cypress/e2e/portfolio-advanced.cy.js" --grep "Form Validation"
```

### Component Tests (`portfolio-components.cy.js`)

**Run Navbar Component Tests**
```bash
npx cypress run --spec "cypress/e2e/portfolio-components.cy.js" --grep "Navbar Component"
```

**Run Contact Form Component Tests**
```bash
npx cypress run --spec "cypress/e2e/portfolio-components.cy.js" --grep "Contact Form Component"
```

**Run All Component Tests**
```bash
npx cypress run --spec "cypress/e2e/portfolio-components.cy.js"
```

## 🔧 Common Test Scenarios

### Test Complete User Journey
```bash
npx cypress run --spec "cypress/e2e/portfolio-advanced.cy.js" --grep "Complete User Journeys"
```

### Test Responsive Behavior
```bash
npx cypress run --spec "cypress/e2e/portfolio.cy.js" --grep "Responsive"
```

### Test Form Submission
```bash
npx cypress run --spec "cypress/e2e/portfolio.cy.js" --grep "Contact Form"
```

### Test Project Interactions
```bash
npx cypress run --spec "cypress/e2e/portfolio-components.cy.js" --grep "Project"
```

### Test Accessibility
```bash
npx cypress run --spec "cypress/e2e/portfolio.cy.js" --grep "Accessibility"
npx cypress run --spec "cypress/e2e/portfolio-advanced.cy.js" --grep "Accessibility"
```

### Test Mobile Experience
```bash
npx cypress run --spec "cypress/e2e/portfolio-advanced.cy.js" --grep "Mobile"
```

## 📱 Viewport Testing

### Desktop (1280x720)
```bash
npx cypress run --spec "cypress/e2e/portfolio.cy.js" --grep "Responsive.*desktop|Desktop"
```

### Tablet (768x1024)
```bash
npx cypress run --spec "cypress/e2e/portfolio.cy.js" --grep "tablet|Tablet"
```

### Mobile (375x667)
```bash
npx cypress run --spec "cypress/e2e/portfolio.cy.js" --grep "mobile|Mobile"
```

## ✨ Custom Commands Usage Examples

### Navigation
```javascript
cy.navigateToSection("About")
cy.scrollToSection("contact")
cy.checkSectionVisible("home")
```

### Form Operations
```javascript
cy.fillContactForm({
  name: "John Doe",
  email: "john@example.com",
  message: "Hello!"
})
cy.submitContactForm()
cy.verifyFormValidation()
```

### Projects
```javascript
cy.openProjectModal(0)
cy.closeProjectModal()
```

### Viewport Management
```javascript
cy.setMobileViewport()
cy.setTabletViewport()
cy.setDesktopViewport()
```

### Verification
```javascript
cy.verifyNavLinks()
cy.verifySocialLinks()
cy.verifyResponsiveMenu()
cy.verifyImageAltText()
```

## 🧪 Test Execution Examples

### Run All Tests
```bash
npm run cy:run
```
⏱️ Expected duration: 5-10 minutes

### Run Specific Category (Fast)
```bash
npx cypress run --spec "cypress/e2e/portfolio.cy.js" --grep "Hero Section"
```
⏱️ Expected duration: 30-45 seconds

### Run All Component Tests
```bash
npx cypress run --spec "cypress/e2e/portfolio-components.cy.js"
```
⏱️ Expected duration: 3-5 minutes

### Run All Advanced Tests
```bash
npx cypress run --spec "cypress/e2e/portfolio-advanced.cy.js"
```
⏱️ Expected duration: 3-5 minutes

## 🔍 Debugging

### Launch with Debug Mode
```bash
npx cypress run --spec "cypress/e2e/portfolio.cy.js" --headed --no-exit
```

### Run Single Test
```bash
npx cypress run --spec "cypress/e2e/portfolio.cy.js" --grep "Page loads"
```

### Open in Browser for Debugging
```bash
npm run cy:open
```
Then select test and use DevTools

## 📈 CI/CD Commands

### GitHub Actions / GitLab CI / Jenkins
```bash
npm run test:e2e:ci
```

### Get Exit Code
```bash
npm run cy:run; echo "Exit code: $?"
```

## 🎯 Most Important Tests to Run

1. **Before Deployment**
   ```bash
   npm run test:e2e:ci
   ```

2. **Quick Smoke Test**
   ```bash
   npx cypress run --spec "cypress/e2e/portfolio.cy.js" --grep "Page loads|Navbar|Contact Form"
   ```

3. **Mobile Compatibility Check**
   ```bash
   npx cypress run --spec "cypress/e2e/portfolio-advanced.cy.js" --grep "Mobile"
   ```

4. **Accessibility Compliance**
   ```bash
   npx cypress run --spec "cypress/e2e/portfolio.cy.js" --grep "Accessibility"
   npx cypress run --spec "cypress/e2e/portfolio-advanced.cy.js" --grep "Accessibility"
   ```

## 📝 Test Organization

### By Feature
- Configuration: Check navbar, hero
- About: Test biography, email copy, globe
- Projects: Verify cards, modals, preview
- Experiences: Check timeline, dates
- Testimonials: Verify reviews, marquee
- Contact: Test form, validation, submission
- Footer: Check links, social buttons

### By Complexity
- **Basic**: Visibility, text content, UI presence
- **Intermediate**: Interactions, form filling, navigation
- **Advanced**: State management, animations, error handling

### By Viewport
- Desktop (1280px)
- Tablet (768px)
- Mobile (375px)

## 🚨 Common Issues & Solutions

### Tests Not Finding Elements
```bash
# Run with longer timeout
npx cypress run --spec "cypress/e2e/portfolio.cy.js" --config timeout=30000
```

### Port Already in Use
```bash
# Change dev server port
npx cypress run --spec "cypress/e2e/portfolio.cy.js" --config baseUrl=http://localhost:5174
```

### Flaky Tests (Random Failures)
- Add `cy.wait()` for animations
- Use `should('be.visible')` for visibility checks
- Increase timeout for async operations

### Screenshot on Failure
```bash
npx cypress run --spec "cypress/e2e/portfolio.cy.js" --screenshot
```

## 📊 Test Metrics

| Metric | Value |
|--------|-------|
| Total Tests | 200+ |
| Total Assertions | 600+ |
| Coverage | Full UI coverage |
| Execution Time | 5-10 minutes (full run) |
| Pass Rate Target | 100% |
| Critical Tests | 50+ |

## 🎓 Learning Resources

- [Cypress Documentation](https://docs.cypress.io)
- [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [Cypress Examples](https://docs.cypress.io/guides/getting-started/opening-the-app)

## 💡 Tips & Tricks

1. **Use `cy.reload()`** to reset between tests if needed
2. **Use `cy.wait()`** for animations/transitions
3. **Use `{ force: true }`** for stubborn elements
4. **Check logs** in test runner for detailed info
5. **Use `cy.debug()`** to pause and inspect state
6. **Screenshot tests** with `cy.screenshot()`
7. **Video recording** in CI/CD for failed tests

## 📞 Support

For issues or questions:
1. Check test documentation: `CYPRESS_TEST_DOCUMENTATION.md`
2. Review test comments in spec files
3. Check Cypress logs and screenshots
4. Refer to [Cypress Docs](https://docs.cypress.io)

---

**Last Updated**: February 2026
**Total Tests**: 200+
**Maintenance**: Regular updates with feature changes
