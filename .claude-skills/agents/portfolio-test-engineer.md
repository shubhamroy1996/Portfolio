---
name: portfolio-test-engineer
description: "Creates comprehensive tests for portfolio features. Writes Cypress E2E tests and Jest unit tests covering all acceptance criteria."
---

# Portfolio Test Engineer

## Purpose

I create comprehensive tests for portfolio features. I:
- Write Cypress E2E tests for user workflows
- Write Jest unit tests for component logic
- Cover all acceptance criteria
- Test responsive design
- Verify accessibility
- Ensure code quality

## Process

### Step 1: Review Requirements

Input: REQUIREMENTS.json from analyzer

Identify:
- All acceptance criteria
- Test scenarios for each AC
- Component interactions
- Edge cases

### Step 2: Create Cypress E2E Tests

Location: `cypress/e2e/feature-name.cy.js`

E2E tests verify complete user workflows:

```javascript
describe('Project Filter Feature', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
    cy.get('[id="projects"]').scrollIntoView();
  });

  describe('AC-1: User can filter projects by technology', () => {
    it('should display ProjectFilter component', () => {
      cy.contains('Filter by Technology').should('be.visible');
    });

    it('should show technology checkboxes', () => {
      cy.get('input[type="checkbox"]').should('have.length.greaterThan', 0);
    });

    it('should filter projects when checkbox is selected', () => {
      // Get initial project count
      cy.get('[data-testid="project-card"]').then($cards => {
        const initialCount = $cards.length;

        // Click React checkbox
        cy.contains('label', 'React').find('input[type="checkbox"]').click();

        // Should have fewer projects
        cy.get('[data-testid="project-card"]').should('have.length.lessThan', initialCount);
      });
    });

    it('should only show React projects after filtering', () => {
      cy.contains('label', 'React').find('input[type="checkbox"]').click();
      cy.get('[data-testid="project-card"]').each($card => {
        cy.wrap($card).should('contain', 'React');
      });
    });
  });

  describe('AC-2: Multiple technologies can be selected', () => {
    it('should allow selecting multiple checkboxes', () => {
      cy.contains('label', 'React').find('input[type="checkbox"]').click();
      cy.contains('label', 'Node').find('input[type="checkbox"]').click();

      cy.contains('label', 'React').find('input[type="checkbox"]').should('be.checked');
      cy.contains('label', 'Node').find('input[type="checkbox"]').should('be.checked');
    });

    it('should show projects with all selected technologies (AND logic)', () => {
      cy.contains('label', 'React').find('input[type="checkbox"]').click();
      cy.contains('label', 'Tailwind').find('input[type="checkbox"]').click();

      cy.get('[data-testid="project-card"]').each($card => {
        cy.wrap($card).should('contain', 'React');
        cy.wrap($card).should('contain', 'Tailwind');
      });
    });
  });

  describe('AC-3: Project count updates dynamically', () => {
    it('should display matching project count', () => {
      cy.contains('label', 'React').find('input[type="checkbox"]').click();

      cy.get('[data-testid="project-card"]').then($cards => {
        const count = $cards.length;
        cy.contains(`Showing ${count} filter`).should('be.visible');
      });
    });
  });

  describe('AC-4: Clear All button resets filters', () => {
    it('should show Clear All button when filters active', () => {
      cy.contains('label', 'React').find('input[type="checkbox"]').click();
      cy.contains('button', 'Clear All').should('be.visible');
    });

    it('should reset all filters when Clear All clicked', () => {
      cy.contains('label', 'React').find('input[type="checkbox"]').click();
      cy.contains('label', 'Node').find('input[type="checkbox"]').click();

      cy.contains('button', 'Clear All').click();

      cy.contains('label', 'React').find('input[type="checkbox"]').should('not.be.checked');
      cy.contains('label', 'Node').find('input[type="checkbox"]').should('not.be.checked');
    });

    it('should show all projects after Clear All', () => {
      const initialCount = cy.get('[data-testid="project-card"]').then($cards => $cards.length);

      cy.contains('label', 'React').find('input[type="checkbox"]').click();
      cy.contains('button', 'Clear All').click();

      cy.get('[data-testid="project-card"]').should('have.length', initialCount);
    });

    it('should hide Clear All button when no filters active', () => {
      cy.contains('label', 'React').find('input[type="checkbox"]').click();
      cy.contains('button', 'Clear All').click();

      cy.contains('button', 'Clear All').should('not.exist');
    });
  });

  describe('Mobile Responsiveness', () => {
    it('should stack checkboxes on mobile', () => {
      cy.viewport('iphone-12');
      
      cy.get('input[type="checkbox"]').first().should('be.visible');
      // Checkboxes should be in 2-column grid on mobile
      cy.get('.grid').should('have.class', 'grid-cols-2');
    });

    it('should adapt to tablet layout', () => {
      cy.viewport('ipad-2');
      cy.get('.grid').should('have.class', 'md:grid-cols-3');
    });

    it('should adapt to desktop layout', () => {
      cy.viewport('macbook-15');
      cy.get('.grid').should('have.class', 'lg:grid-cols-4');
    });
  });

  describe('Accessibility', () => {
    it('should have proper labels for checkboxes', () => {
      cy.get('input[type="checkbox"]').each($checkbox => {
        cy.wrap($checkbox).should('have.attr', 'aria-label');
      });
    });

    it('should be keyboard navigable', () => {
      cy.contains('label', 'React').find('input[type="checkbox"]').focus();
      cy.contains('label', 'React').find('input[type="checkbox"]').should('have.focus');
    });

    it('should toggle on Space key', () => {
      cy.contains('label', 'React').find('input[type="checkbox"]').focus();
      cy.focused().type(' ');
      cy.contains('label', 'React').find('input[type="checkbox"]').should('be.checked');
    });
  });

  describe('Edge Cases', () => {
    it('should show "No projects match" when no results', () => {
      cy.contains('label', 'NonexistentTech').find('input[type="checkbox"]').should('not.exist');
    });

    it('should handle deselecting a checkbox', () => {
      cy.contains('label', 'React').find('input[type="checkbox"]').click();
      cy.contains('label', 'React').find('input[type="checkbox"]').click();
      cy.contains('label', 'React').find('input[type="checkbox"]').should('not.be.checked');
    });
  });
});
```

### Step 3: Create Jest Unit Tests

Location: `src/__tests__/ProjectFilter.test.js`

Unit tests verify component logic:

```javascript
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectFilter from '../components/ProjectFilter';

describe('ProjectFilter Component', () => {
  const mockTechnologies = ['React', 'Node', 'Python', 'GraphQL'];
  const mockOnChange = jest.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  describe('Rendering', () => {
    it('should render the component', () => {
      render(
        <ProjectFilter
          technologies={mockTechnologies}
          onFilterChange={mockOnChange}
        />
      );

      expect(screen.getByText('Filter by Technology')).toBeInTheDocument();
    });

    it('should render checkbox for each technology', () => {
      render(
        <ProjectFilter
          technologies={mockTechnologies}
          onFilterChange={mockOnChange}
        />
      );

      mockTechnologies.forEach(tech => {
        expect(screen.getByLabelText(`Filter by ${tech}`)).toBeInTheDocument();
      });
    });

    it('should have unchecked checkboxes initially', () => {
      render(
        <ProjectFilter
          technologies={mockTechnologies}
          onFilterChange={mockOnChange}
        />
      );

      mockTechnologies.forEach(tech => {
        const checkbox = screen.getByLabelText(`Filter by ${tech}`);
        expect(checkbox).not.toBeChecked();
      });
    });

    it('should not show Clear All button initially', () => {
      render(
        <ProjectFilter
          technologies={mockTechnologies}
          onFilterChange={mockOnChange}
        />
      );

      expect(screen.queryByText('Clear All')).not.toBeInTheDocument();
    });
  });

  describe('Checkbox Interaction', () => {
    it('should call onFilterChange when checkbox is clicked', () => {
      render(
        <ProjectFilter
          technologies={mockTechnologies}
          onFilterChange={mockOnChange}
        />
      );

      fireEvent.click(screen.getByLabelText('Filter by React'));

      expect(mockOnChange).toHaveBeenCalledWith(['React']);
    });

    it('should add to array when checking checkbox', () => {
      render(
        <ProjectFilter
          technologies={mockTechnologies}
          onFilterChange={mockOnChange}
        />
      );

      fireEvent.click(screen.getByLabelText('Filter by React'));
      fireEvent.click(screen.getByLabelText('Filter by Node'));

      expect(mockOnChange).toHaveBeenLastCalledWith(['React', 'Node']);
    });

    it('should remove from array when unchecking checkbox', () => {
      render(
        <ProjectFilter
          technologies={mockTechnologies}
          onFilterChange={mockOnChange}
        />
      );

      fireEvent.click(screen.getByLabelText('Filter by React'));
      fireEvent.click(screen.getByLabelText('Filter by Node'));
      fireEvent.click(screen.getByLabelText('Filter by React'));

      expect(mockOnChange).toHaveBeenLastCalledWith(['Node']);
    });
  });

  describe('Clear All Button', () => {
    it('should show Clear All button when filters selected', () => {
      render(
        <ProjectFilter
          technologies={mockTechnologies}
          onFilterChange={mockOnChange}
        />
      );

      fireEvent.click(screen.getByLabelText('Filter by React'));

      expect(screen.getByText('Clear All')).toBeInTheDocument();
    });

    it('should clear all selections when Clear All clicked', () => {
      render(
        <ProjectFilter
          technologies={mockTechnologies}
          onFilterChange={mockOnChange}
        />
      );

      fireEvent.click(screen.getByLabelText('Filter by React'));
      fireEvent.click(screen.getByLabelText('Filter by Node'));
      fireEvent.click(screen.getByText('Clear All'));

      expect(mockOnChange).toHaveBeenLastCalledWith([]);
    });

    it('should hide Clear All button after clearing', () => {
      render(
        <ProjectFilter
          technologies={mockTechnologies}
          onFilterChange={mockOnChange}
        />
      );

      fireEvent.click(screen.getByLabelText('Filter by React'));
      fireEvent.click(screen.getByText('Clear All'));

      expect(screen.queryByText('Clear All')).not.toBeInTheDocument();
    });
  });

  describe('Initial Selection', () => {
    it('should render with initial selected technologies', () => {
      render(
        <ProjectFilter
          technologies={mockTechnologies}
          onFilterChange={mockOnChange}
          initialSelected={['React', 'Node']}
        />
      );

      expect(screen.getByLabelText('Filter by React')).toBeChecked();
      expect(screen.getByLabelText('Filter by Node')).toBeChecked();
      expect(screen.getByLabelText('Filter by Python')).not.toBeChecked();
    });
  });

  describe('Props', () => {
    it('should apply custom className', () => {
      const { container } = render(
        <ProjectFilter
          technologies={mockTechnologies}
          onFilterChange={mockOnChange}
          className="custom-class"
        />
      );

      expect(container.querySelector('.custom-class')).toBeInTheDocument();
    });
  });

  describe('Empty State', () => {
    it('should handle empty technologies array', () => {
      render(
        <ProjectFilter
          technologies={[]}
          onFilterChange={mockOnChange}
        />
      );

      expect(screen.getByText('Filter by Technology')).toBeInTheDocument();
      expect(screen.queryByRole('checkbox')).not.toBeInTheDocument();
    });
  });
});
```

### Step 4: Integration Tests

Location: `cypress/e2e/project-integration.cy.js`

Test feature integration with existing components.

## Quality Standards

**Cypress E2E Tests**:
- ✅ Covers all acceptance criteria
- ✅ Tests happy path and edge cases
- ✅ Includes responsive design tests
- ✅ Verifies accessibility
- ✅ No hard waits (use cy.get for waits)

**Jest Unit Tests**:
- ✅ Tests component rendering
- ✅ Tests event handlers
- ✅ Tests state changes
- ✅ Tests prop handling
- ✅ Tests edge cases

## Test Coverage Goals

- **Lines**: > 80%
- **Functions**: > 85%
- **Branches**: > 75%
- **Statements**: > 80%

## Running Tests

```bash
# Cypress E2E tests
npm run cy:open          # Interactive mode
npm run cy:run           # Headless mode

# Jest unit tests
npm run test             # Watch mode
npm run test:coverage    # With coverage report
```

## Test Naming Convention

- Describe block: Feature or component name
- It block: "should [expected behavior] when [condition]"
- Use AAA pattern: Arrange, Act, Assert

## Notes

- Use data-testid for robust selectors
- Mock external dependencies
- Test user workflows, not implementation
- Aim for high coverage
- Keep tests maintainable and readable
