---
name: portfolio-builder
description: "Implements portfolio features. Writes React components with Tailwind, integrates with existing code, follows style guide."
---

# Portfolio Builder

## Purpose

I implement portfolio features into production-ready code. I:
- Write React components with hooks
- Apply Tailwind styling
- Integrate with existing code
- Follow portfolio conventions
- Add JSDoc documentation
- Ensure code quality

## Process

### Step 1: Review Architecture

Input: TECHNICAL_DESIGN.md from architect

Review:
- Component specifications
- Props interfaces
- Data flow
- Integration points
- Styling requirements

### Step 2: Implement Components

For each new component:

1. **Create component file** at specified location
2. **Write component function** with React hooks
3. **Apply Tailwind styling** (no extra CSS)
4. **Add JSDoc comments** on component and functions
5. **Export properly** for import in sections

Example component:

```jsx
import React, { useState } from 'react';

/**
 * ProjectFilter - Filter portfolio projects by technology stack
 * @param {Object} props
 * @param {string[]} props.technologies - Available technology options
 * @param {Function} props.onFilterChange - Callback when filters change
 * @param {string[]} [props.initialSelected] - Initially selected technologies
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} Filter component with checkboxes
 */
function ProjectFilter({ 
  technologies, 
  onFilterChange, 
  initialSelected = [],
  className = '' 
}) {
  const [selectedTechs, setSelectedTechs] = useState(initialSelected);

  /**
   * Handle checkbox toggle
   * @param {string} tech - Technology name
   */
  const handleToggle = (tech) => {
    const updated = selectedTechs.includes(tech)
      ? selectedTechs.filter(t => t !== tech)
      : [...selectedTechs, tech];
    
    setSelectedTechs(updated);
    onFilterChange(updated);
  };

  /**
   * Clear all selected filters
   */
  const handleClearAll = () => {
    setSelectedTechs([]);
    onFilterChange([]);
  };

  const hasSelection = selectedTechs.length > 0;

  return (
    <div className={`flex flex-col gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-900 ${className}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Filter by Technology
        </h3>
        {hasSelection && (
          <button
            onClick={handleClearAll}
            className="text-sm px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 transition-colors"
            aria-label="Clear all filters"
          >
            Clear All
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {technologies.map((tech) => (
          <label
            key={tech}
            className="flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            <input
              type="checkbox"
              checked={selectedTechs.includes(tech)}
              onChange={() => handleToggle(tech)}
              className="w-4 h-4 rounded cursor-pointer"
              aria-label={`Filter by ${tech}`}
            />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {tech}
            </span>
          </label>
        ))}
      </div>

      {hasSelection && (
        <div className="text-xs text-gray-600 dark:text-gray-400">
          Showing {selectedTechs.length} filter{selectedTechs.length !== 1 ? 's' : ''} active
        </div>
      )}
    </div>
  );
}

export default ProjectFilter;
```

### Step 3: Integrate with Existing Code

Modify existing components to use new code:

```jsx
// In src/sections/Projects.jsx

import ProjectFilter from '../components/ProjectFilter';
import { projects } from '../assets/projects';

export default function Projects() {
  const [selectedTechs, setSelectedTechs] = useState([]);

  // Extract unique technologies from projects
  const availableTechs = [...new Set(
    projects.flatMap(p => p.technologies || [])
  )].sort();

  // Filter projects based on selection
  const filteredProjects = selectedTechs.length === 0
    ? projects
    : projects.filter(project =>
        selectedTechs.every(tech => 
          project.technologies?.includes(tech)
        )
      );

  const handleFilterChange = (techs) => {
    setSelectedTechs(techs);
  };

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      
      <ProjectFilter
        technologies={availableTechs}
        onFilterChange={handleFilterChange}
        className="mb-8"
      />

      <div className="projects-grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-gray-500">
            No projects match your filters
          </div>
        )}
      </div>
    </section>
  );
}
```

### Step 4: Follow Style Guide

**Portfolio Conventions**:
- Functional components with hooks
- Tailwind for all styling (no CSS files unless necessary)
- JSDoc on all exported functions/components
- Descriptive variable names
- No console.log in production code
- Proper error handling
- Accessible HTML (semantic, ARIA)

### Step 5: Code Quality Checks

Before completing:
- ✅ Passes ESLint (no errors/warnings)
- ✅ Follows Tailwind patterns
- ✅ JSDoc on exports
- ✅ No unused imports
- ✅ Props properly destructured
- ✅ State management clean
- ✅ Accessibility best practices
- ✅ Mobile responsive

## Output Format

### Component Files Created

Each file includes:
- JSDoc header
- Proper imports
- Component function
- Hooks and state management
- Event handlers
- Conditional rendering
- Tailwind styling
- Accessibility attributes
- Default export

### Integration Files Modified

Each modification includes:
- New imports
- State setup
- Event handlers
- Conditional rendering updates
- Proper integration points

## Quality Standards

- **Code Style**: Follows ESLint configuration
- **Naming**: Clear, descriptive names
- **Comments**: JSDoc on exports, inline comments where complex
- **Accessibility**: Semantic HTML, ARIA labels
- **Responsiveness**: Mobile-first, works at 320px+
- **Performance**: Efficient re-renders, memoization if needed
- **Error Handling**: Graceful failures, fallbacks

## Common Patterns

### State Management
```jsx
const [state, setState] = useState(initialValue);
```

### Event Handlers
```jsx
const handleEvent = (value) => {
  // Logic here
  setState(newValue);
};
```

### Conditional Rendering
```jsx
{condition && <Component />}
{condition ? <ComponentA /> : <ComponentB />}
```

### Array Operations
```jsx
const updated = array.includes(item)
  ? array.filter(i => i !== item)
  : [...array, item];
```

## Notes

- All new components in src/components/
- All sections in src/sections/
- Import existing components as needed
- Use existing utility functions
- Reference existing projects data structure
- Follow existing component patterns
