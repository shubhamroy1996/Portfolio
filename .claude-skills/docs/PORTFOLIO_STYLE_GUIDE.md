# Portfolio Code Style Guide

This guide defines conventions and patterns for your portfolio project.

---

## 📐 Architecture

### Directory Structure

```
src/
├── components/          ← Reusable components
├── sections/           ← Page sections (Hero, About, Projects, etc.)
├── assets/
│   ├── logos/         ← Logo imports/exports
│   ├── projects/      ← Project data
│   ├── socials/       ← Social links data
│   └── ...
├── constants/         ← App constants
├── hooks/             ← Custom React hooks
├── utils/             ← Utility functions
├── styles/            ← Global styles
├── __tests__/         ← Unit tests
├── App.jsx
├── index.css
└── main.jsx

cypress/
├── e2e/               ← End-to-end tests
├── fixtures/          ← Test data
└── support/           ← Cypress configuration
```

### Naming Conventions

**Components** (PascalCase, descriptive):
- `ProjectFilter.jsx` - Reusable component
- `ProjectCard.jsx` - Reusable component
- `Hero.jsx` - Section component
- `Projects.jsx` - Section component

**Utilities** (camelCase):
- `calculateDays.js`
- `formatDate.js`
- `cn.js` - Utility functions

**Hooks** (camelCase, starts with `use`):
- `useScroll.js`
- `useMediaQuery.js`
- `useFilteredProjects.js`

**Constants** (UPPER_SNAKE_CASE):
- `TECH_STACK.js`
- `SOCIAL_LINKS.js`

**Tests** (same name + .test or .cy):
- `ProjectFilter.test.js` - Jest unit test
- `project-filter.cy.js` - Cypress E2E test

---

## ⚛️ React Patterns

### Functional Components

Always use functional components with hooks:

```jsx
// ✅ CORRECT
function ProjectFilter({ technologies, onFilterChange }) {
  const [selected, setSelected] = useState([]);
  
  return <div>{/* JSX */}</div>;
}

// ❌ AVOID
class ProjectFilter extends React.Component {
  state = { selected: [] };
  render() { return <div>...</div>; }
}
```

### Props & State

**Destructure props:**
```jsx
// ✅ CORRECT
function ProjectCard({ id, title, description, image }) {
  return <div>{title}</div>;
}

// ❌ AVOID
function ProjectCard(props) {
  return <div>{props.title}</div>;
}
```

**Use useState for component state:**
```jsx
// ✅ CORRECT
const [count, setCount] = useState(0);

// ❌ AVOID
this.state = { count: 0 };
this.setState({ count: 1 });
```

### Event Handlers

**Use descriptive names (handle + Event):**
```jsx
// ✅ CORRECT
const handleFilterChange = (techs) => {
  setSelectedTechs(techs);
};

// ❌ AVOID
const onClick = () => { /* ... */ };
const onFilter = () => { /* ... */ };
```

### Conditional Rendering

```jsx
// ✅ Simple condition
{isVisible && <Component />}

// ✅ If-else
{isVisible ? <ComponentA /> : <ComponentB />}

// ❌ AVOID
{isVisible === true ? <Component /> : null}
```

### Lists & Keys

```jsx
// ✅ CORRECT - use unique ID
{projects.map(project => (
  <ProjectCard key={project.id} project={project} />
))}

// ❌ AVOID - don't use index as key
{projects.map((project, index) => (
  <ProjectCard key={index} project={project} />
))}
```

---

## 🎨 Tailwind Styling

### Always Use Tailwind

```jsx
// ✅ CORRECT - Tailwind classes
<div className="flex items-center justify-between p-4 rounded-lg bg-white dark:bg-gray-900">
  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Title</h2>
</div>

// ❌ AVOID - Extra CSS files
<style>
  .my-container { display: flex; ... }
</style>
<div className="my-container">Title</div>

// ❌ AVOID - Inline styles
<div style={{ display: 'flex', padding: '16px' }}>Title</div>
```

### Responsive Classes

Use Tailwind breakpoints:

```jsx
// ✅ CORRECT - Mobile-first
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* 1 column on mobile, 2 on tablet, 3 on desktop */}
</div>

// Layout sizes
// sm: 640px
// md: 768px
// lg: 1024px
// xl: 1280px
// 2xl: 1536px
```

### Spacing

```jsx
// ✅ Use Tailwind spacing scale
<div className="p-4">        {/* padding */}
<div className="mb-8">       {/* margin-bottom */}
<div className="gap-4">      {/* gap between items */}

// Scale: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 20, 24, 28, 32, ...
```

### Colors

```jsx
// ✅ Use Tailwind color palette
<div className="bg-blue-500 text-white">      {/* Solid color */}
<div className="bg-blue-500 dark:bg-blue-900"> {/* Dark mode */}
<div className="hover:bg-blue-600">           {/* Hover state */}
<div className="text-gray-700 dark:text-gray-300"> {/* Text color */}
```

### Utilities

```jsx
// ✅ Common patterns
className="flex items-center justify-between"  {/* Flexbox */}
className="grid grid-cols-3 gap-4"              {/* Grid */}
className="rounded-lg shadow-md"                {/* Rounded corners & shadow */}
className="opacity-50 hover:opacity-100"       {/* Opacity & hover */}
className="cursor-pointer transition-colors"   {/* Interactions */}
```

---

## 📝 Documentation

### JSDoc Comments

**On exports:**
```jsx
/**
 * ProjectFilter - Filter projects by technology stack
 * @param {Object} props
 * @param {string[]} props.technologies - Available technologies
 * @param {Function} props.onFilterChange - Callback on filter change
 * @returns {JSX.Element}
 */
function ProjectFilter({ technologies, onFilterChange }) {
  // ...
}
```

**On functions:**
```jsx
/**
 * Calculate days since date
 * @param {string|Date} date - Date to calculate from
 * @returns {number} Days since date
 */
function calculateDaysSince(date) {
  // ...
}
```

**On complex sections:**
```jsx
// Filter projects based on selected technologies
// Uses AND logic: show projects with ALL selected techs
const filteredProjects = selectedTechs.length === 0
  ? projects
  : projects.filter(p => 
      selectedTechs.every(tech => p.technologies?.includes(tech))
    );
```

### No console.log in Production

```jsx
// ✅ CORRECT - Remove debug logs
// Save for local debugging only

// ❌ AVOID - In production code
console.log('projects:', projects);
console.error('Error:', error);
```

---

## ♿ Accessibility

### Semantic HTML

```jsx
// ✅ CORRECT
<section id="projects">
  <h2>Projects</h2>
  <nav>
    <ul>
      <li><a href="#link">Link</a></li>
    </ul>
  </nav>
</section>

// ❌ AVOID
<div className="section">
  <div className="heading">Projects</div>
  <div className="nav">
    <div className="list">
      <div><span>Link</span></div>
    </div>
  </div>
</div>
```

### ARIA Labels

```jsx
// ✅ CORRECT - Proper labels
<label htmlFor="filter-tech" className="text-sm font-semibold">
  Filter by Technology
</label>
<input
  id="filter-tech"
  type="checkbox"
  aria-label="Filter by React"
  onChange={handleChange}
/>

// ❌ AVOID - Missing labels
<input type="checkbox" onChange={handleChange} />
```

### Keyboard Navigation

```jsx
// ✅ CORRECT - All interactive elements keyboard accessible
<button onClick={handleClick} className="px-4 py-2">
  Click Me
</button>

<a href="/page" role="button">
  Link Button
</a>

// Support keyboard: Tab, Enter, Space

// ❌ AVOID - Not keyboard accessible
<div onClick={handleClick} className="cursor-pointer">
  Click Me
</div>
```

---

## 🧪 Testing

### Jest Unit Tests

```jsx
// src/__tests__/ProjectFilter.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import ProjectFilter from '../components/ProjectFilter';

describe('ProjectFilter', () => {
  it('should render technology checkboxes', () => {
    render(
      <ProjectFilter
        technologies={['React', 'Node']}
        onFilterChange={() => {}}
      />
    );

    expect(screen.getByLabelText('Filter by React')).toBeInTheDocument();
  });

  it('should call onFilterChange when checkbox clicked', () => {
    const onChange = jest.fn();
    render(
      <ProjectFilter
        technologies={['React']}
        onFilterChange={onChange}
      />
    );

    fireEvent.click(screen.getByLabelText('Filter by React'));
    expect(onChange).toHaveBeenCalledWith(['React']);
  });
});
```

### Cypress E2E Tests

```javascript
// cypress/e2e/projects.cy.js
describe('Projects Section', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
    cy.get('[id="projects"]').scrollIntoView();
  });

  it('should display projects', () => {
    cy.get('[data-testid="project-card"]')
      .should('have.length.greaterThan', 0);
  });

  it('should filter projects when technology selected', () => {
    cy.contains('label', 'React').find('input[type="checkbox"]').click();
    cy.get('[data-testid="project-card"]').each($card => {
      cy.wrap($card).should('contain', 'React');
    });
  });
});
```

### Data Test IDs

Use `data-testid` for reliable selectors:

```jsx
// ✅ CORRECT - Easy to find in tests
<div data-testid="project-card" className="card">
  {project.title}
</div>

// In tests:
cy.get('[data-testid="project-card"]').should('exist');
```

---

## 🚀 Performance

### Memoization

```jsx
// ✅ Use React.memo for expensive components
const ProjectCard = React.memo(function ProjectCard({ project }) {
  return <div>{project.title}</div>;
});

export default ProjectCard;
```

### Callbacks

```jsx
// ✅ useCallback for stable references
const handleFilterChange = useCallback((techs) => {
  setSelectedTechs(techs);
}, []);

// Pass to child components
<ProjectFilter onFilterChange={handleFilterChange} />
```

---

## 🔒 Security

### No Dangerous HTML

```jsx
// ✅ CORRECT - Safe HTML
<div>{user.name}</div>

// ❌ AVOID - XSS vulnerability
<div dangerouslySetInnerHTML={{ __html: userInput }} />
```

### Environment Variables

```jsx
// ✅ Use import.meta.env (Vite)
const apiUrl = import.meta.env.VITE_API_URL;

// ❌ AVOID - Hard-coded secrets
const apiKey = "sk-abc123...";
```

---

## 📋 Checklist Before Commit

- [ ] Component renders without errors
- [ ] JSDoc comments on exports
- [ ] No console.log in code
- [ ] ESLint passes: `npm run lint`
- [ ] Tests passing: `npm run test` + `npm run cy:run`
- [ ] Tailwind classes used (no extra CSS)
- [ ] Responsive design tested
- [ ] Accessibility checked
- [ ] No unused imports/variables
- [ ] Code follows style guide

---

## 🔄 Common Patterns

### Form Input with State

```jsx
const [email, setEmail] = useState('');

<input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="px-4 py-2 border rounded"
/>
```

### Conditional Class

```jsx
// Use classnames utility
className={`
  px-4 py-2 rounded transition-colors
  ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-200'}
`}
```

### Array Filtering & Mapping

```jsx
const filtered = projects
  .filter(p => p.technologies.includes('React'))
  .map(p => <ProjectCard key={p.id} project={p} />);
```

### Ternary Rendering

```jsx
{projects.length > 0 ? (
  <ProjectGrid projects={projects} />
) : (
  <EmptyState message="No projects found" />
)}
```

---

## 📚 Resources

- [React Docs](https://react.dev)
- [Tailwind Docs](https://tailwindcss.com)
- [Cypress Docs](https://docs.cypress.io)
- [Jest Docs](https://jestjs.io)
- [Accessibility](https://www.w3.org/WAI/WCAG21/quickref/)

---

## ✅ Code Review Criteria

Your code will be reviewed for:

1. **Functionality** - Does it work as specified?
2. **Code Quality** - Is it clean and maintainable?
3. **Tests** - Are all scenarios covered?
4. **Accessibility** - Does it follow WCAG AA?
5. **Performance** - Is it optimized?
6. **Security** - Are there any vulnerabilities?
7. **Style** - Does it follow this guide?
8. **Documentation** - Is it well-documented?

---

**Happy coding! 🎉**
