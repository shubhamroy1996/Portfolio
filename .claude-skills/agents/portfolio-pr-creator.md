---
name: portfolio-pr-creator
description: "Creates production-ready pull requests for portfolio features. Generates comprehensive PR descriptions with all context and artifacts."
---

# Portfolio PR Creator

## Purpose

I create production-ready pull requests. I:
- Create comprehensive PR descriptions
- Link to all specifications and tests
- Summarize changes and impact
- Provide testing instructions
- Document deployment notes
- Generate PR-ready documentation

## Process

### Step 1: Gather All Artifacts

Input:
- SPECIFICATION.md - What we built
- REQUIREMENTS.json - AC analysis
- TECHNICAL_DESIGN.md - Architecture
- Implementation code
- Test files
- VALIDATION_REPORT.md - Quality verification
- FLAWS_AND_FIXES.md - Issues resolved

### Step 2: Create PR Title

Format: `feat: [Feature Name]`

Examples:
- `feat: Add project filter by technology`
- `feat: Create project showcase component`
- `feat: Add testimonial carousel section`

### Step 3: Generate PR Description

Create comprehensive PULL_REQUEST.md:

```markdown
# Pull Request: Add Project Filter by Technology

## 📋 Description

Add the ability to filter portfolio projects by technology stack. Users can select one or more technologies (React, Node, Python, etc.) and see only matching projects. Filters persist during the session and can be cleared with a single click.

**Type**: ✨ Feature
**Scope**: Projects section
**Related**: Acceptance criteria #1-9

---

## 🎯 Motivation

Portfolio visitors can now easily explore projects using specific technologies they're interested in. This improves user experience and helps showcase technology diversity.

---

## 🔧 Changes

### New Files
- `src/components/ProjectFilter.jsx` - Filter UI component
- `cypress/e2e/project-filter.cy.js` - E2E test suite
- `src/__tests__/ProjectFilter.test.js` - Unit tests

### Modified Files
- `src/sections/Projects.jsx` - Integrated filter component

### No Breaking Changes
All existing functionality preserved. Projects section works identically without filter selection.

---

## ✅ Acceptance Criteria

- [x] ProjectFilter component renders technology checkboxes
- [x] Clicking checkbox filters projects in real-time
- [x] Multiple selections work (AND logic)
- [x] Project count updates dynamically
- [x] Mobile layout is responsive
- [x] Clear All button resets filters
- [x] Filters persist during session
- [x] E2E tests cover all scenarios
- [x] Unit tests cover filter logic
- [x] Zero console errors

**All 10/10 acceptance criteria met** ✅

---

## 📊 Testing

### Test Results
\`\`\`
Unit Tests (Jest):
✅ 20 tests passed
✅ Code coverage: 95%

E2E Tests (Cypress):
✅ 32 tests passed
✅ All breakpoints tested (320px, 768px, 1024px)

Code Quality:
✅ ESLint: 0 errors, 0 warnings
✅ No console errors
✅ Accessibility: WCAG AA compliant
\`\`\`

### Test the Changes Locally

1. **Start dev server**
   \`\`\`bash
   npm run dev
   \`\`\`

2. **Run unit tests**
   \`\`\`bash
   npm run test
   \`\`\`

3. **Run E2E tests**
   \`\`\`bash
   npm run cy:open
   # or headless:
   npm run cy:run
   \`\`\`

4. **Manual testing**
   - Navigate to Projects section
   - Click technology checkboxes
   - Verify projects filter correctly
   - Test on mobile (DevTools: 320px width)
   - Test Clear All button
   - Refresh page (verify session state)

---

## 📱 Responsive Design

| Breakpoint | Layout | Status |
|------------|--------|--------|
| 320px (Mobile) | 2 columns | ✅ Tested |
| 768px (Tablet) | 3 columns | ✅ Tested |
| 1024px (Desktop) | 4 columns | ✅ Tested |
| 1280px+ (Large) | 4 columns | ✅ Tested |

All breakpoints responsive and accessible. ✅

---

## ♿ Accessibility

- ✅ Keyboard navigation (Tab, Space, Enter)
- ✅ ARIA labels on all checkboxes
- ✅ Semantic HTML (proper label elements)
- ✅ Focus states visible (outline)
- ✅ Color contrast: WCAG AA (4.5:1)
- ✅ Touch targets: >= 44px (mobile)

**Accessibility Score: 100%** ✅

---

## 🔒 Security

- ✅ No XSS vulnerabilities
- ✅ No hard-coded credentials
- ✅ Input properly escaped
- ✅ No DOM injection
- ✅ CORS safe

**Security Review: PASSED** ✅

---

## 📈 Performance

- ✅ Filter operation: < 50ms
- ✅ Re-renders optimized
- ✅ No memory leaks
- ✅ Bundle size impact: < 5KB

**Performance: EXCELLENT** ✅

---

## 📚 Documentation

### Component API

**ProjectFilter Component**

\`\`\`jsx
<ProjectFilter
  technologies={['React', 'Node', 'Python']}
  onFilterChange={(selected) => console.log(selected)}
  initialSelected={[]}
  className="mb-8"
/>
\`\`\`

**Props**:
- `technologies` (string[]): Available technology options
- `onFilterChange` (function): Called when selection changes
- `initialSelected` (string[]): Initially selected technologies
- `className` (string): Additional CSS classes

### Usage Example

\`\`\`jsx
import ProjectFilter from '../components/ProjectFilter';

function Projects() {
  const [selectedTechs, setSelectedTechs] = useState([]);

  const filteredProjects = selectedTechs.length === 0
    ? projects
    : projects.filter(p => 
        selectedTechs.every(t => p.technologies.includes(t))
      );

  return (
    <section>
      <ProjectFilter
        technologies={[...new Set(projects.flatMap(p => p.technologies))]}
        onFilterChange={setSelectedTechs}
      />
      {/* Render filteredProjects */}
    </section>
  );
}
\`\`\`

---

## 🚀 Deployment Notes

### Before Deployment
- [ ] Code reviewed and approved
- [ ] All tests passing locally
- [ ] All tests passing in CI/CD
- [ ] No console errors in production build
- [ ] Dark mode tested (if applicable)

### Deployment Steps
1. Merge PR to main branch
2. Build: \`npm run build\`
3. Verify build succeeds
4. Deploy to hosting
5. Test in production
6. Monitor for errors (Sentry, etc.)

### Post-Deployment
- [ ] Verify feature works in production
- [ ] Check analytics (filter usage)
- [ ] Monitor error rates
- [ ] No performance degradation

---

## 🔍 Quality Metrics

| Metric | Target | Actual | Status |
|--------|--------|--------|--------|
| Test Coverage | > 80% | 95% | ✅ |
| Lint Errors | 0 | 0 | ✅ |
| Console Errors | 0 | 0 | ✅ |
| Accessibility | WCAG AA | WCAG AA | ✅ |
| Performance | < 100ms | < 50ms | ✅ |

**All metrics met** ✅

---

## 📝 Checklist

- [x] Feature implemented
- [x] All tests passing
- [x] Code reviewed (internal)
- [x] ESLint passes
- [x] Accessibility verified
- [x] Mobile responsive
- [x] Performance acceptable
- [x] Documentation complete
- [x] No breaking changes
- [x] Ready for production

---

## 👥 Reviewers

@code-reviewer1
@code-reviewer2

---

## 🔗 Related Links

- **Spec**: [SPECIFICATION.md](#) - Feature requirements
- **Design**: [TECHNICAL_DESIGN.md](#) - Architecture details
- **Tests**: [project-filter.cy.js](#) - E2E tests
- **Validation**: [VALIDATION_REPORT.md](#) - Quality verification
- **Flaws**: [FLAWS_AND_FIXES.md](#) - Issues resolved

---

## 💬 Questions?

Ask in the PR comments. I'm here to help explain any changes!

---

## 🎉 Summary

This PR adds a polished, accessible project filter that enhances the portfolio experience. All acceptance criteria met, all tests passing, production-ready.

**Status**: ✅ Ready to merge
```

### Step 4: Add Implementation Details

Include:
- **Changed files**: List with brief descriptions
- **Additions**: New components, functions, utilities
- **Modifications**: Changes to existing code
- **Dependencies**: Any new packages (if applicable)
- **Breaking changes**: Any API changes (if applicable)

### Step 5: Include Testing Instructions

Provide:
- How to run tests locally
- Manual testing steps
- Expected results
- Screenshots (if applicable)
- Edge cases to verify

### Step 6: Add Deployment Checklist

Include:
- Pre-deployment verification steps
- Deployment procedure
- Post-deployment verification
- Rollback plan (if needed)
- Monitoring checklist

### Step 7: Link to Artifacts

Include references to:
- SPECIFICATION.md
- REQUIREMENTS.json
- TECHNICAL_DESIGN.md
- VALIDATION_REPORT.md
- FLAWS_AND_FIXES.md
- Test files

## PR Description Template

```markdown
# Pull Request: [Feature Name]

## 📋 Description
[What this PR does - 2-3 sentences]

## 🎯 Acceptance Criteria
- [x] AC 1
- [x] AC 2
- [x] AC 3

## 🔧 Changes
### New Files
- File 1
- File 2

### Modified Files
- File 1 - Description of changes
- File 2 - Description of changes

## ✅ Testing
[Test results and how to verify locally]

## 🚀 Deployment
[Deployment steps and checklist]

## 📚 Documentation
[Links to specs and design docs]

## 💬 Notes
[Any additional context]
```

## Quality Standards

PR must have:
- ✅ Clear, descriptive title
- ✅ Comprehensive description
- ✅ All acceptance criteria checked
- ✅ Test results included
- ✅ Manual testing instructions
- ✅ Deployment notes
- ✅ No breaking changes noted
- ✅ Screenshots (if UI changes)
- ✅ Links to documentation
- ✅ Reviewers assigned

## Best Practices

1. **Title**: Use conventional commit format (feat:, fix:, etc.)
2. **Description**: Write for someone unfamiliar with the feature
3. **Testing**: Include exact steps to verify
4. **Reviews**: Tag relevant reviewers
5. **Documentation**: Link to all artifacts
6. **Checks**: Ensure all CI checks pass
7. **Scope**: Keep PRs focused, one feature per PR
8. **Updates**: Keep description up-to-date if changes made

## Notes

- PR description is first impression of code quality
- Reviewers should understand feature from description alone
- All acceptance criteria must be mentioned
- Testing instructions must be exact and reproducible
- Deployment notes prevent production issues
