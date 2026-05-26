---
name: portfolio-spec-driven-orchestrator
description: "Master orchestrator for spec-driven portfolio development. Receives a feature spec and orchestrates all sub-agents to create implementation, tests, and PR. Triggers when user provides feature description, details, and acceptance criteria."
---

# Portfolio Spec-Driven Development Orchestrator

## When to Use This Skill

**Triggers:**
- User pastes a portfolio feature spec in Claude Code
- Mentions "implement feature", "add component", "spec-driven", "build portfolio feature"
- Provides structured format: Description | Details | Acceptance Criteria
- For portfolio features (projects, components, sections, experiences)

**Does NOT trigger:**
- Bug fixes without detailed specs
- Simple tweaks or styling without requirements
- Simple refactors without requirements

---

## Core Workflow

### PHASE 0: Parse & Validate Spec

```
INPUT: Raw feature spec text
│
├─ Extract:
│  ├─ Title/Summary
│  ├─ Description (1-3 sentences)
│  ├─ Details (technical scope, component architecture, dependencies)
│  └─ Acceptance Criteria (numbered list)
│
├─ Validate:
│  ├─ Title present? ✓
│  ├─ At least 2 AC items? ✓
│  ├─ Clear acceptance criteria (SMART)? ✓
│  └─ Feasible in scope? ✓
│
└─ Categorize:
   ├─ Complexity: Small (1-2h) | Medium (4-6h) | Large (1-3d)
   ├─ Component Type: New | Refactor | Integration
   └─ Risk: Low | Medium | High
```

### PHASE 1: Create Structured Spec Document

Generate **SPECIFICATION.md** in workspace:

```markdown
# [Feature Title]
## Spec ID: [timestamp-based ID]

### Summary
[2-3 sentence description]

### Scope
[What's included, what's explicitly NOT included]

### Requirements
1. Functional requirements from AC
2. Non-functional (performance, accessibility, responsiveness)
3. Integration points with existing components

### Acceptance Criteria
1. [AC 1]
2. [AC 2]
... [all original ACs]

### Technical Details
- React Hooks/Components needed
- Tailwind classes required
- State management (if applicable)
- External dependencies
- Existing component integrations

### Out of Scope
[What's explicitly not covered]
```

---

## Phase-by-Phase Execution

### PHASE 2A: Spec Analysis
**Agent: portfolio-spec-analyzer**
- Input: Spec + ACs
- Output: REQUIREMENTS.json
- Identifies test scenarios for each AC
- Maps to existing components

### PHASE 2B: Technical Architecture
**Agent: portfolio-architect**
- Input: Requirements + existing codebase
- Output: TECHNICAL_DESIGN.md
- Component structure
- Props interface
- Integration points

### PHASE 3: Code Implementation
**Agent: portfolio-builder**
- Input: Technical design
- Output: React component files, utility functions
- JSX with Tailwind classes
- Proper TypeScript/JSDoc annotations

### PHASE 4: Test Creation
**Agent: portfolio-test-engineer**
- Input: Code + requirements
- Output: Cypress E2E tests + Jest unit tests
- Covers all acceptance criteria
- Tests responsive design

### PHASE 5: Validation
**Agent: portfolio-validator**
- Input: Code + tests
- Output: VALIDATION_REPORT.md
- Verifies all ACs are met
- Checks code quality

### PHASE 6: Flaw Detection
**Agent: portfolio-flaw-detector**
- Input: Complete implementation
- Output: FLAWS_AND_FIXES.md
- Security review
- Performance analysis
- Accessibility check (WCAG)

### PHASE 7: PR Creation
**Agent: portfolio-pr-creator**
- Input: All artifacts
- Output: PULL_REQUEST.md
- Comprehensive PR description
- Links to specs and tests

---

## Expected Deliverables

For each spec:

### Documentation (4 files)
```
SPECIFICATION.md          - What you're building
REQUIREMENTS.json         - AC analysis
TECHNICAL_DESIGN.md       - Component architecture
VALIDATION_REPORT.md      - Quality verification
```

### Code (2-5 files)
```
src/components/
├── NewComponent.jsx       - Main component
├── NewComponent.module.css - Styles (if needed)
└── hooks/
    └── useNewFeature.js   - Custom hooks (if needed)

src/utils/
└── helpers.js             - Utility functions (if needed)
```

### Tests (2+ files)
```
cypress/e2e/
└── new-feature.cy.js      - End-to-end tests

src/__tests__/
└── NewComponent.test.js   - Unit tests
```

### Quality Artifacts (2 files)
```
FLAWS_AND_FIXES.md        - Issues and fixes
PULL_REQUEST.md           - Complete PR description
```

---

## Portfolio-Specific Context

### Tech Stack
- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Testing**: Cypress E2E + Jest
- **Linting**: ESLint
- **Assets**: Located in src/assets/
- **Components**: Located in src/components/
- **Sections**: Located in src/sections/

### Component Structure
- Hero section
- About section
- Projects section
- Experiences section
- Contact section
- Testimonial section
- Footer section

### Key Patterns
- Use Tailwind for styling (no extra CSS)
- Export from asset index files
- Follow existing component patterns
- Make responsive (mobile-first)
- Support dark mode if applicable

---

## Success Criteria

✅ All acceptance criteria tested and passing
✅ Code follows portfolio style guide
✅ Components are responsive
✅ No console errors or warnings
✅ Accessibility standards met
✅ Performance optimized
✅ Cypress tests passing
✅ Ready for production merge

---

## How to Trigger

**In Claude Code, paste your feature spec like:**

```
Title: Add Interactive Project Filter

Description:
Add ability to filter portfolio projects by technology stack.
Users should be able to select multiple technologies and see only matching projects.

Details:
- Create a new ProjectFilter component
- Display checkboxes for: React, Node, Python, GraphQL, Tailwind
- Filter the Projects section dynamically
- Store selected filters in component state
- Display count of matching projects
- Integrate with existing Projects.jsx section
- Use Tailwind for styling to match portfolio theme
- Support mobile responsiveness

Technical Constraints:
- Use existing project data from assets/projects/index.js
- Must work with current Tailwind configuration
- No new dependencies

Acceptance Criteria:
1. ProjectFilter component renders all technology options as checkboxes
2. Clicking a checkbox filters projects in real-time
3. Multiple selections work (AND logic)
4. Project count updates dynamically
5. Mobile layout is responsive (stacks vertically)
6. Filters reset when "Clear All" button clicked
7. Selected filters persist during session
8. E2E test covers all filter scenarios
9. Unit tests for filter logic
10. Zero console errors
```

**Say:** `implement using portfolio-spec-driven-dev`

---

## How It Works

1. **System parses** your spec into structured requirements
2. **Orchestrator routes** to appropriate sub-agents
3. **Each agent executes** its specialized phase
4. **Artifacts are generated** (code, tests, documentation)
5. **Final validation** ensures quality
6. **PR created** ready for review

**Total time**: ~1 hour (vs 3-4 hours manual)

---

## Notes

- All code must pass ESLint configuration
- Tests must pass Cypress validation
- Components must be accessible (WCAG AA)
- Mobile-first responsive design
- Follow existing portfolio conventions
- No external dependencies without approval
