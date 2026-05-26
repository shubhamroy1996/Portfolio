# Claude AI Skills for Portfolio Spec-Driven Development

This directory contains AI agent skills for automated development of portfolio features using spec-driven development.

## 🎯 What Is This?

A complete AI-powered system that takes a feature specification and automatically:
1. **Analyzes** requirements and acceptance criteria
2. **Designs** technical architecture
3. **Builds** React components with Tailwind styling
4. **Creates** comprehensive tests (Cypress E2E + Jest unit)
5. **Validates** quality and acceptance criteria
6. **Detects** flaws and security issues
7. **Creates** production-ready pull requests

**Result**: From spec to production PR in ~1 hour (vs 3-4 hours manual)

---

## 📚 Skills Included

### Master Orchestrator
- **`portfolio-spec-driven-orchestrator.md`** - Master controller that orchestrates all sub-agents

### Sub-Agent Skills (7 total)
1. **`agents/portfolio-spec-analyzer.md`** - Requirements analysis
2. **`agents/portfolio-architect.md`** - Technical design
3. **`agents/portfolio-builder.md`** - Code implementation  
4. **`agents/portfolio-test-engineer.md`** - Test creation
5. **`agents/portfolio-validator.md`** - Quality validation
6. **`agents/portfolio-flaw-detector.md`** - Flaw detection & improvement
7. **`agents/portfolio-pr-creator.md`** - PR generation

### Documentation
- **`docs/PORTFOLIO_STYLE_GUIDE.md`** - Code conventions and patterns

---

## 🚀 How to Use

### Step 1: Write a Feature Spec

Create a structured spec with:
- **Title**: Feature name
- **Description**: 1-3 sentence overview
- **Details**: Technical scope and constraints
- **Acceptance Criteria**: Numbered list of "must haves"

### Example Spec

```
Title: Add Project Filter by Technology

Description:
Add ability to filter portfolio projects by technology stack.
Users should be able to select multiple technologies and see only matching projects.

Details:
- Create a new ProjectFilter component
- Display checkboxes for: React, Node, Python, GraphQL, Tailwind
- Filter the Projects section dynamically
- Store selected filters in component state
- Integrate with existing Projects.jsx section
- Use Tailwind for styling

Acceptance Criteria:
1. ProjectFilter component renders all technology options as checkboxes
2. Clicking a checkbox filters projects in real-time
3. Multiple selections work (AND logic)
4. Project count updates dynamically
5. Mobile layout is responsive (stacks vertically)
6. Filters reset when "Clear All" button clicked
7. E2E test covers all filter scenarios
8. Unit tests for filter logic
9. Zero console errors
10. All tests passing
```

### Step 2: Trigger the System

In Claude Code (VS Code):
1. Paste your feature spec
2. Say: **`implement using portfolio-spec-driven-dev`**

### Step 3: System Executes Phases

The orchestrator runs 7 phases automatically:

```
Phase 0: ✅ Validate spec
Phase 1: ✅ Analyze requirements → REQUIREMENTS.json
Phase 2: ✅ Design architecture → TECHNICAL_DESIGN.md
Phase 3: ✅ Build code → React components
Phase 4: ✅ Create tests → Cypress + Jest
Phase 5: ✅ Validate quality → VALIDATION_REPORT.md
Phase 6: ✅ Detect flaws → FLAWS_AND_FIXES.md
Phase 7: ✅ Create PR → PULL_REQUEST.md
```

### Step 4: Review & Merge

You get:
- ✅ Complete implementation
- ✅ Full test suite (95%+ coverage)
- ✅ Quality documentation
- ✅ Production-ready PR
- ✅ Deployment checklist

---

## 📋 Deliverables Per Feature

### Documentation (4 files)
```
SPECIFICATION.md          ← What you're building
REQUIREMENTS.json         ← AC analysis
TECHNICAL_DESIGN.md       ← Architecture and design
VALIDATION_REPORT.md      ← Quality verification
```

### Code (2-5 files)
```
src/components/YourComponent.jsx    ← React component
src/sections/Modified.jsx           ← Integration changes
src/hooks/useCustomHook.js          ← Custom hooks (if needed)
```

### Tests (2+ files)
```
cypress/e2e/feature.cy.js          ← E2E tests
src/__tests__/Component.test.js     ← Unit tests
```

### Quality (2 files)
```
FLAWS_AND_FIXES.md                  ← Issues & solutions
PULL_REQUEST.md                     ← Complete PR description
```

---

## 🛠️ Tech Stack Context

### Frontend
- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Components**: Functional components with hooks

### Testing
- **E2E**: Cypress
- **Unit**: Jest
- **Code Coverage**: > 80%

### Quality
- **Linting**: ESLint
- **Formatting**: Prettier (via ESLint)
- **Accessibility**: WCAG AA

---

## 📖 Portfolio Structure

```
src/
├── components/          ← React components
├── sections/           ← Page sections
├── assets/
│   ├── logos/
│   ├── projects/
│   └── socials/
├── constants/
└── __tests__/          ← Unit tests

cypress/
├── e2e/                ← E2E tests
├── fixtures/
└── support/
```

---

## ✨ Key Features

### Spec-Driven
- Start with requirements, not code
- All ACs tested and passing
- Clear, measurable success criteria

### Full-Stack Implementation
- Complete React components
- Comprehensive tests
- Documentation
- PR ready to merge

### Quality Built-In
- Accessibility (WCAG AA)
- Mobile responsive
- Performance optimized
- Security reviewed

### Professional Workflow
- Clear separation of concerns
- Each agent specialized role
- Artifact-based communication
- Easy to review and iterate

---

## 🎓 Example Workflow

### Scenario: Add Testimonials Section

**1. You write spec:**
```
Title: Add Testimonial Carousel Section

Description:
Create an interactive testimonials section with carousel navigation.
Display client testimonials with names, roles, and ratings.

Details:
- New Testimonial component (carousel)
- Display 3 testimonials at a time
- Previous/Next arrow navigation
- Auto-advance (optional)
- Testimonial data from assets
- Responsive (mobile: 1, tablet: 2, desktop: 3)

Acceptance Criteria:
1. Testimonial carousel renders without errors
2. Previous/Next buttons navigate through testimonials
3. 3 testimonials display per page on desktop
4. Mobile shows 1, tablet shows 2 (responsive)
5. Auto-advance to next testimonial every 5 seconds
6. Pause auto-advance on hover
7. Mobile touch swipe works
8. E2E tests cover all navigation
9. Unit tests for carousel logic
10. Zero console errors
```

**2. You trigger:**
```
implement using portfolio-spec-driven-dev
```

**3. System delivers:**
- Testimonial.jsx component
- Carousel logic and styling
- REQUIREMENTS.json analyzing all 10 ACs
- TECHNICAL_DESIGN.md with architecture
- Cypress E2E tests (8 test suites)
- Jest unit tests (15+ test cases)
- VALIDATION_REPORT.md (100% AC coverage)
- PULL_REQUEST.md ready to merge
- Fixed any issues in FLAWS_AND_FIXES.md

**4. You review & merge:**
- Review code (should take < 10 minutes)
- Merge PR
- Deploy
- Done!

**Saved time**: ~3 hours of manual development

---

## 📊 Quality Standards

Every feature must meet:

| Metric | Requirement |
|--------|-------------|
| **Acceptance Criteria** | 100% coverage |
| **Test Coverage** | > 80% |
| **Lint Errors** | 0 |
| **Console Errors** | 0 |
| **Accessibility** | WCAG AA minimum |
| **Mobile Responsive** | 320px - 1920px |
| **Performance** | < 50ms filter/update |
| **Documentation** | Complete specs included |

---

## 🔄 Workflow for Teams

### Single Developer
- Use locally in VS Code
- Follow spec-driven-dev workflow
- Get production-ready PRs

### Team Environment
1. Spec written by designer/PM
2. Pasted into Claude Code
3. System generates code + tests
4. Developer reviews (10 min)
5. QA verifies tests
6. Merge to main
7. Deploy

### Benefits
- Faster feature delivery
- Consistent code quality
- Better documentation
- Fewer bugs
- Easier reviews

---

## 🚨 Important Notes

### Before Using
- ✅ Read PORTFOLIO_STYLE_GUIDE.md
- ✅ Understand your project structure
- ✅ Know your project data schemas

### Write Good Specs
- ✅ Be specific about requirements
- ✅ Include edge cases in ACs
- ✅ Mention technical constraints
- ✅ Reference existing components

### Review Outputs
- ✅ Always review generated code
- ✅ Test locally before merging
- ✅ Verify accessibility manually
- ✅ Check mobile on real device

---

## 📞 Troubleshooting

### Spec Not Triggering
- Ensure format includes all 4 parts (Title, Description, Details, Acceptance Criteria)
- Use exact trigger: `implement using portfolio-spec-driven-dev`
- Paste in Claude Code extension

### Tests Failing
- Check project data structure
- Verify Cypress is configured
- Ensure Jest is installed
- Run locally: `npm run cy:open` or `npm run test`

### Component Not Rendering
- Check import paths
- Verify data props are correct
- Look for console errors
- Test in isolation first

### Performance Issues
- Check for unnecessary re-renders
- Verify data structures are reasonable
- Check for memory leaks
- Profile with DevTools

---

## 📚 Further Reading

1. **PORTFOLIO_STYLE_GUIDE.md** - Code conventions and patterns
2. **portfolio-spec-driven-orchestrator.md** - How the system works
3. Each agent skill - Detailed process documentation

---

## ✅ Setup Checklist

- [x] Skills created in `.claude-skills/`
- [x] Master orchestrator ready
- [x] All 7 sub-agents configured
- [x] Documentation complete
- [x] Example specs provided
- [x] Style guide available
- [x] Ready to use!

---

## 🎉 Getting Started

1. Read `PORTFOLIO_STYLE_GUIDE.md` for conventions
2. Write your first feature spec (see example above)
3. Paste into Claude Code
4. Say: `implement using portfolio-spec-driven-dev`
5. Watch the magic happen!
6. Review, test, merge, deploy!

---

## 📬 Questions?

Each skill file has detailed documentation. Check the relevant skill for:
- Analyzer → Requirements questions
- Architect → Design questions
- Builder → Implementation questions
- Test Engineer → Testing questions
- Validator → Quality questions
- Flaw Detector → Issues questions
- PR Creator → PR questions

---

**Happy building! 🚀**
