---
name: portfolio-flaw-detector
description: "Detects flaws, bugs, security issues, and improvements in portfolio features. Reviews code for quality and edge cases."
---

# Portfolio Flaw Detector

## Purpose

I review portfolio features for flaws and improvements. I:
- Identify bugs and edge cases
- Review security considerations
- Check performance issues
- Spot accessibility gaps
- Suggest improvements
- Document issues and fixes

## Process

### Step 1: Code Review

Review implementation for:

**Common Issues**:
- ❌ Memory leaks (event listeners, subscriptions)
- ❌ Prop drilling too deep
- ❌ Unnecessary re-renders
- ❌ Stale closures
- ❌ Missing error handling
- ❌ Race conditions
- ❌ Hard-coded values

**React Patterns**:
- ❌ Missing dependency arrays
- ❌ SetState in loops
- ❌ Creating functions in render
- ❌ Missing key props in lists
- ❌ Mutation of state

**Security**:
- ❌ XSS vulnerabilities
- ❌ DOM injection
- ❌ CORS issues
- ❌ Sensitive data exposure
- ❌ Input validation missing

### Step 2: Edge Case Analysis

Test scenarios:

```javascript
// Edge Cases to Test

1. Empty arrays
   - No projects in data
   - No technologies to filter
   - Empty filter selection

2. Boundary conditions
   - Single item in array
   - Large number of projects (100+)
   - Long technology names

3. User interactions
   - Rapid clicking
   - Network delay simulation
   - Device rotation (mobile)
   - Dark mode toggle

4. Error states
   - Missing project data
   - Null/undefined values
   - Malformed data

5. Performance
   - 1000+ projects
   - 50+ technology options
   - Slow device
```

### Step 3: Security Review

Check for:

```javascript
// Security Checklist

1. Input Validation
   - ✅ Filter inputs validated
   - ✅ No eval() or dynamic code execution
   - ✅ Data sanitized before display

2. XSS Prevention
   - ✅ No dangerouslySetInnerHTML
   - ✅ User input escaped
   - ✅ Content from data sources safe

3. State Management
   - ✅ No sensitive data in state
   - ✅ State not persisted inappropriately
   - ✅ No credentials in localStorage

4. API Calls (if any)
   - ✅ HTTPS only
   - ✅ CORS headers correct
   - ✅ Authentication tokens secure
```

### Step 4: Performance Review

Check for:

```javascript
// Performance Checklist

1. Rendering
   - ✅ Unnecessary renders minimized
   - ✅ React.memo used appropriately
   - ✅ useMemo/useCallback where beneficial

2. Arrays
   - ✅ Filter/map operations optimized
   - ✅ No O(n²) algorithms
   - ✅ Efficient data structures

3. DOM
   - ✅ Minimal DOM updates
   - ✅ Delegated event listeners
   - ✅ No memory leaks from listeners

4. Assets
   - ✅ Images optimized
   - ✅ CSS minified
   - ✅ JavaScript tree-shaken
```

### Step 5: Accessibility Review

Check for:

```javascript
// Accessibility Checklist

1. Keyboard Navigation
   - ✅ All interactive elements keyboard accessible
   - ✅ Logical tab order
   - ✅ Escape to close modals (if any)

2. Screen Readers
   - ✅ Proper semantic HTML
   - ✅ ARIA labels complete
   - ✅ Hidden content marked
   - ✅ Live regions for updates

3. Visual
   - ✅ Color contrast sufficient
   - ✅ Text size adequate
   - ✅ Touch targets >= 44px
   - ✅ Focus indicators visible

4. Motion
   - ✅ Animations respect prefers-reduced-motion
   - ✅ No auto-playing videos
   - ✅ No flashing content
```

### Step 6: Test Coverage Review

Verify:

```javascript
// Test Coverage Checklist

1. Happy Path
   - ✅ Main feature workflow tested
   - ✅ All user interactions tested
   - ✅ Success states verified

2. Error Handling
   - ✅ Error states tested
   - ✅ Fallback UI verified
   - ✅ Error messages clear

3. Edge Cases
   - ✅ Empty data tested
   - ✅ Large data sets tested
   - ✅ Boundary conditions tested

4. Integration
   - ✅ Component integration tested
   - ✅ Data flow tested
   - ✅ No breaking changes verified
```

### Step 7: Create FLAWS_AND_FIXES.md

Output comprehensive review:

```markdown
# Flaws and Fixes: [Feature Title]

## Executive Summary

✅ **6 flaws identified** - All fixable, mostly minor
✅ **5 improvements suggested** - Optional enhancements
✅ **Overall quality: GOOD**

---

## Critical Issues (Must Fix)

None identified.

---

## Major Issues (Should Fix)

### 1. Missing prop validation

**Location**: `src/components/ProjectFilter.jsx`, line 15

**Issue**: 
Component doesn't validate that `technologies` prop is an array

**Code**:
\`\`\`jsx
function ProjectFilter({ technologies, onFilterChange, ... }) {
  // Assumes technologies is always array
  technologies.map(tech => ...)
}
\`\`\`

**Risk**: If parent passes invalid data, component crashes

**Fix**:
\`\`\`jsx
import PropTypes from 'prop-types';

ProjectFilter.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFilterChange: PropTypes.func.isRequired,
  initialSelected: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
};

ProjectFilter.defaultProps = {
  initialSelected: [],
  className: '',
};
\`\`\`

**Priority**: Medium
**Effort**: Low
**Status**: Recommended

---

### 2. Performance: Unnecessary re-renders

**Location**: `src/sections/Projects.jsx`, line 42

**Issue**: 
ProjectFilter re-renders on every parent render even if props unchanged

**Risk**: Slowdown with large project lists

**Fix**:
\`\`\`jsx
const ProjectFilter = React.memo(ProjectFilter);
export default ProjectFilter;
\`\`\`

**Priority**: Medium
**Effort**: Low
**Status**: Recommended

---

## Minor Issues (Nice to Fix)

### 3. Missing accessibility: Focus visible

**Location**: `src/components/ProjectFilter.jsx`, CSS

**Issue**: 
Clear All button doesn't have clear focus state

**Fix**:
Add to Tailwind: `focus:outline-2 focus:outline-offset-2 focus:outline-blue-500`

**Priority**: Low
**Effort**: Low

---

### 4. Edge case: No technologies to filter

**Location**: `src/sections/Projects.jsx`, line 30

**Issue**:
If projects have no `technologies` property, filter breaks

**Current Code**:
\`\`\`jsx
project.technologies.includes(tech)
\`\`\`

**Fix**:
\`\`\`jsx
(project.technologies || []).includes(tech)
\`\`\`

**Priority**: Low
**Effort**: Low

---

### 5. Error message clarity

**Location**: `src/components/ProjectFilter.jsx`, line 28

**Issue**:
No clear message when no projects match filter

**Current**: Filters silently hide all projects

**Fix**:
\`\`\`jsx
{filteredProjects.length === 0 && (
  <div className=\"text-center py-8 text-gray-500\">
    No projects match your selected filters.
    <button onClick={handleClearAll} className=\"link-blue\">
      Clear filters
    </button>
  </div>
)}
\`\`\`

**Priority**: Low
**Effort**: Low

---

## Suggestions (Optional Improvements)

### 1. Add "Select All" button

**Value**: Quality of life improvement

**Suggestion**:
Add alongside Clear All: "Select All" button that checks all technologies

---

### 2. Show technology count in checkbox label

**Value**: Better UX

**Suggestion**:
\`React (3 projects)\` instead of just \`React\`

---

### 3. Add search to technology filter

**Value**: UX improvement for many technologies

**Suggestion**:
If > 10 technologies, add search box to filter list

---

### 4. Persist filters to URL params

**Value**: Shareable filter states

**Suggestion**:
Save selected techs to URL: \`?techs=React,Node\`

---

### 5. Add filter animation

**Value**: Visual feedback

**Suggestion**:
Fade in/out projects when filter changes

---

## Security Review

✅ **PASSED**

- No XSS vulnerabilities
- No hard-coded credentials
- No sensitive data exposed
- Input properly escaped
- No DOM injection

---

## Performance Review

✅ **GOOD**

- Filter operation: O(n) - acceptable
- Re-render optimization: Needs React.memo
- Memory usage: Normal

**Recommendation**: Add React.memo to ProjectFilter

---

## Accessibility Review

✅ **MOSTLY PASSED**

- ✅ Keyboard navigation works
- ✅ ARIA labels present
- ⚠️ Focus visible could be improved
- ✅ Color contrast adequate
- ✅ Mobile touch targets adequate

**Recommendation**: Improve focus styling

---

## Test Coverage

✅ **EXCELLENT**

- Unit test coverage: 95%
- E2E coverage: All major paths
- Edge cases: Mostly covered

**Recommendation**: Add test for missing \`technologies\` array

---

## Summary

| Category | Status | Issues |
|----------|--------|--------|
| Code Quality | ✅ Good | 2 major, 3 minor |
| Performance | ⚠️ Good | 1 optimization |
| Security | ✅ Excellent | 0 issues |
| Accessibility | ✅ Good | 1 improvement |
| Tests | ✅ Excellent | 0 issues |

**Overall Score**: 8.5/10

---

## Recommended Actions

### Before Merge
1. Add prop validation (PropTypes)
2. Add React.memo optimization
3. Add no-results error message
4. Improve focus styling

### After Merge (Future)
1. Add select-all functionality
2. Show project count per tech
3. Add search if > 10 techs
4. Consider URL params for filters

---

## Issues Fixed

- [x] Prop validation added
- [x] React.memo applied
- [x] Focus styling improved
- [x] Error message added
- [x] Edge case handled

**Status**: ✅ All critical issues resolved

\`\`\`

---

## Review Types

### Critical (🔴 Red)
Must fix before merge. Breaks functionality or security.

### Major (🟡 Yellow)  
Should fix before merge. Significant impact on UX or quality.

### Minor (🟢 Green)
Nice to fix. Polish and edge cases.

### Suggestions (💡)
Optional improvements. Can do later.

## Quality Score Calculation

```
Code Quality: 30%
Performance: 20%
Security: 20%
Accessibility: 15%
Tests: 15%

Score = (Quality × 0.3) + (Perf × 0.2) + (Sec × 0.2) + (A11y × 0.15) + (Tests × 0.15)
```

## Notes

- Review performed before validation
- Identifies issues before PR creation
- Includes suggested fixes
- Prioritizes by impact
- Actionable recommendations
