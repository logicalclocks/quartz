# Quartz Design System - Development Guide

Welcome to the Quartz Design System! This guide will help you create high-quality components with proper Playwright tests.

## Project Overview

Quartz is a React component library built with TypeScript that provides a comprehensive design system for Logical Clocks applications. It uses:

- **React 18** with TypeScript
- **Rebass** for base components and theming
- **Emotion** for CSS-in-JS styling
- **Storybook** for component documentation
- **Playwright** for component testing
- **pnpm** for package management

## Component Architecture

### File Structure

Each component follows this standard structure:

```
src/components/[component-name]/
├── index.tsx              # Main export file
├── [ComponentName].tsx    # Component implementation
├── stories.tsx           # Storybook stories
├── [component].styles.ts # Styled components (optional)
├── types.ts             # TypeScript types (optional)
├── utils.ts             # Helper functions (optional)
└── [ComponentName].spec.tsx # Playwright tests
```

### Component Guidelines

1. **Export Pattern**: Always use named exports and re-export from index.tsx
2. **TypeScript**: Define proper interfaces extending Rebass component props when applicable
3. **Theming**: Use the theme system located in `src/theme/` for consistent styling
4. **Icons**: Use the centralized icon system from `src/components/icon/`

### Example Component Structure

```typescript
// Button.tsx
import { Button as RebassButton, ButtonProps } from 'rebass';
import { Color } from '../../theme/types';

export interface Props extends Omit<ButtonProps, 'css'> {
  children: React.ReactNode;
  intent?: 'primary' | 'secondary' | 'ghost';
  icon?: IconName;
  disabled?: boolean;
}

export const Button = ({ intent = 'primary', ...props }: Props) => {
  // Component implementation
};

export default Button;
```

## Testing with Playwright

### Setup

The project uses Playwright Component Testing (`@playwright/experimental-ct-react`) with this configuration:

- **Config**: `playwright-ct.config.ts`
- **Port**: 3100 (ctPort)
- **Browser**: Chromium (Desktop Chrome)
- **Theme**: Tests run with ThemeProvider wrapper

### Test Structure

Create tests in `[ComponentName].spec.tsx` files:

```typescript
import { test, expect } from '@playwright/experimental-ct-react';
import { Button } from './Button';

test('should render with correct text', async ({ mount }) => {
  const component = await mount(<Button>Click me</Button>);
  await expect(component).toContainText('Click me');
});

test('should handle click events', async ({ mount }) => {
  let clicked = false;
  const component = await mount(
    <Button onClick={() => { clicked = true; }}>
      Click me
    </Button>
  );
  
  await component.click();
  expect(clicked).toBe(true);
});
```

### Test Best Practices

1. **Test User Interactions**: Focus on user-facing behavior
2. **Use Semantic Queries**: Prefer role-based selectors when possible
3. **Test Accessibility**: Verify ARIA attributes and keyboard navigation
4. **Mock External Dependencies**: Use mocks for complex dependencies
5. **Visual Testing**: Use `toHaveScreenshot()` for visual regression testing

### Common Test Patterns

#### Testing Props and Variants
```typescript
test('should apply correct intent styles', async ({ mount }) => {
  const primary = await mount(<Button intent="primary">Primary</Button>);
  const secondary = await mount(<Button intent="secondary">Secondary</Button>);
  
  await expect(primary).toHaveClass(/primary/);
  await expect(secondary).toHaveClass(/secondary/);
});
```

#### Testing Loading States
```typescript
test('should show loading spinner', async ({ mount }) => {
  const component = await mount(
    <Button isLoading>Loading Button</Button>
  );
  
  await expect(component.locator('[data-testid="spinner"]')).toBeVisible();
});
```

#### Testing Accessibility
```typescript
test('should be accessible', async ({ mount }) => {
  const component = await mount(
    <Button disabled>Disabled Button</Button>
  );
  
  await expect(component).toHaveAttribute('disabled');
  await expect(component).toHaveAttribute('aria-disabled', 'true');
});
```

## Development Workflow

### Creating a New Component

1. **Create component directory**:
   ```bash
   mkdir src/components/my-component
   ```

2. **Implement the component**:
   - Create `MyComponent.tsx` with proper TypeScript interfaces
   - Follow existing patterns for styling and theming
   - Export from `index.tsx`

3. **Add Storybook stories**:
   ```typescript
   // stories.tsx
   import { Meta, StoryObj } from '@storybook/react';
   import { MyComponent } from './MyComponent';

   const meta: Meta = {
     title: 'Components/MyComponent',
     component: MyComponent,
   };
   export default meta;

   export const Default: StoryObj<typeof MyComponent> = {};
   ```

4. **Write Playwright tests**:
   - Create `MyComponent.spec.tsx`
   - Test core functionality and user interactions
   - Add accessibility tests

5. **Update exports**:
   ```typescript
   // src/index.ts
   export { MyComponent } from './components/my-component';
   ```

### Running Tests

```bash
# Run component tests
pnpm test-ct

# Show test report
pnpm report-test

# Run linting
pnpm run test:lint

# Run formatting check
pnpm run test:prettier
```

### Development Commands

```bash
# Start Storybook
pnpm storybook

# Build library
pnpm build

# Start development mode (watch)
pnpm start

# Run Chromatic visual tests
pnpm chromatic
```

### Committing Changes

This project uses **Commitizen** for standardized commit messages and **semantic-release** for automated versioning and releases.

#### Pre-Commit Requirements

**IMPORTANT**: Before every commit, ensure ALL tests are passing:

```bash
# Run the complete test suite
pnpm test:lint          # ESLint checks
pnpm test:prettier      # Prettier formatting
pnpm test-ct           # All Playwright component tests

# Only commit after all tests pass
```

#### Development Testing Strategy

During active development, test only the component you're working on for faster feedback:

```bash
# Test specific component during development
pnpm test-ct --grep "ComponentName"

# Example: Test only Button component
pnpm test-ct --grep "Button"

# Test specific test file
pnpm test-ct src/components/button/Button.spec.tsx
```

**Development Workflow:**
1. Make changes to your component
2. Run component-specific tests: `pnpm test-ct --grep "YourComponent"`
3. Fix any failing tests and iterate
4. When ready to commit, run full test suite
5. Only commit when ALL tests pass

#### Using Commitizen

Instead of `git commit`, use the Commitizen CLI:

```bash
# Stage your changes
git add .

# Verify all tests pass BEFORE committing
pnpm test:lint && pnpm test:prettier && pnpm test-ct

# Use Commitizen for structured commit messages
pnpm commit
```

This will prompt you through creating a properly formatted commit message following the [Conventional Commits](https://www.conventionalcommits.org/) specification.

#### Commit Message Format

The project follows conventional commit format:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Common types:**
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

**Examples:**
```bash
feat(button): add loading state animation
fix(dropdown): resolve keyboard navigation issue
docs: update component usage examples
test(modal): add accessibility tests
```

#### Automated Releases

The project uses semantic-release for automated:
- Version bumping based on commit messages
- Changelog generation
- NPM package publishing
- Git tag creation

**Version Impact:**
- `fix:` → Patch release (1.0.1)
- `feat:` → Minor release (1.1.0)  
- `BREAKING CHANGE:` → Major release (2.0.0)

#### Release Process

Releases are automatically triggered when commits are merged to the main branch:

1. **semantic-release** analyzes commit messages
2. Determines next version number
3. Generates changelog
4. Creates git tag
5. Publishes to NPM registry

**Manual release commands** (if needed):
```bash
# Run semantic release locally
pnpm semantic-release
```

## Styling Guidelines

### Theme Usage

Use the centralized theme system:

```typescript
import { useTheme } from '../theme/ThemeProvider';

const theme = useTheme();
const styles = {
  backgroundColor: theme.colors.primary,
  padding: theme.space[3],
};
```

### Color System

Use semantic color tokens from `src/theme/types.ts`:

```typescript
type Color = 
  | 'primary' 
  | 'secondary' 
  | 'labels.red' 
  | 'backgrounds.white'
  // ... other tokens
```

### Responsive Design

Follow mobile-first responsive patterns:

```typescript
const styles = {
  fontSize: [14, 16, 18], // Mobile, tablet, desktop
  padding: ['8px', '12px', '16px'],
};
```

## Component Patterns

### Form Components

- Extend appropriate Rebass form component props
- Include validation states (error, success, warning)
- Support controlled and uncontrolled modes
- Provide proper accessibility attributes

### Layout Components

- Use CSS Grid or Flexbox for layouts
- Support responsive breakpoints
- Provide gap/spacing props consistent with theme

### Data Display

- Handle loading and error states
- Support virtualization for large datasets
- Include proper ARIA labels for screen readers

## Quality Checklist

Before submitting a component:

- [ ] Component follows established file structure
- [ ] TypeScript interfaces are properly defined
- [ ] Storybook stories demonstrate all variants
- [ ] Playwright tests cover core functionality
- [ ] Accessibility requirements are met
- [ ] Visual design matches Figma specifications
- [ ] Component is exported in main index.ts
- [ ] Documentation is updated if needed

## Troubleshooting

### Common Issues

1. **Theme not available**: Ensure ThemeProvider wrapper in tests
2. **Import errors**: Check relative paths and exports
3. **Style conflicts**: Verify emotion CSS injection order
4. **Test timeouts**: Increase timeout in playwright config if needed

### CI/CD

The project uses GitHub Actions for:
- Linting and formatting checks
- Playwright component tests
- Chromatic visual regression tests
- Automatic npm publishing on release

Tests run on every PR and must pass before merging.

## Claude Code Development Planning

### Feature Planning Documentation

When developing new features or major changes with Claude Code, always create a comprehensive plan document in the `.claude/plans/` directory. This ensures:

1. **Structured Approach**: Clear planning before implementation
2. **Documentation**: Permanent record of design decisions and rationale
3. **Collaboration**: Easy reference for team members and future development
4. **Progress Tracking**: Milestone-based development with clear deliverables

#### Planning Directory Structure

```
.claude/
└── plans/
    ├── feature-name-implementation.md
    ├── component-migration-strategy.md
    ├── architecture-refactor.md
    └── ...
```

#### Required Plan Contents

Each feature plan should include:

- **Overview**: Brief description and goals
- **Current State Analysis**: What exists today
- **Implementation Strategy**: Detailed approach and architecture
- **Phase Breakdown**: Step-by-step implementation timeline
- **Testing Strategy**: How to validate the changes
- **Risk Mitigation**: Potential issues and solutions
- **Success Metrics**: How to measure completion

#### Plan Template

```markdown
# [Feature Name]: [Brief Description]

> **Status**: [Planning/In Progress/Complete]  
> **Created**: [Date]  
> **Author**: Claude Code  
> **Branch**: [feature-branch-name]  

## Overview
[Brief description and goals]

## Current State Analysis
[What exists today, pain points, requirements]

## Implementation Strategy
[Detailed approach, architecture decisions]

## Phase Breakdown
**Phase 1: [Name]**
- [ ] Task 1
- [ ] Task 2

**Phase 2: [Name]**
- [ ] Task 3
- [ ] Task 4

## Testing Strategy
[How to validate changes]

## Risk Mitigation
[Potential issues and solutions]

## Success Metrics
[How to measure completion]
```

#### Example Usage

Before implementing major features like:
- Component library migrations
- New component development
- Architecture refactoring
- Testing framework changes
- Build system updates

Always create a plan in `.claude/plans/[feature-name].md` following the template above.

## Resources

- [Storybook Documentation](https://storybook.js.org/docs)
- [Playwright Component Testing](https://playwright.dev/docs/test-components)
- [Rebass Components](https://rebassjs.org/)
- [Emotion Styling](https://emotion.sh/docs/introduction)