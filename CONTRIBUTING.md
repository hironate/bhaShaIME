# Contributing to BhaSha IME

Thank you for your interest in contributing to BhaSha IME! This guide will help you get started with contributing to our Indian language transliteration plugin for React.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Making Changes](#making-changes)
- [Testing](#testing)
- [Submitting Changes](#submitting-changes)
- [Coding Standards](#coding-standards)
- [Issue Guidelines](#issue-guidelines)
- [Feature Requests](#feature-requests)
- [Documentation](#documentation)

## Code of Conduct

This project adheres to a code of conduct that ensures a welcoming environment for everyone. By participating, you agree to:

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Respect different viewpoints and experiences
- Accept responsibility for mistakes and learn from them

## Getting Started

### Prerequisites

Before you begin, ensure you have:

- Node.js 16+ installed
- npm or yarn package manager
- Git for version control
- A GitHub account

### Fork and Clone

1. Fork the repository on GitHub
2. Clone your fork locally:

```bash
git clone https://github.com/YOUR_USERNAME/bhaShaIME.git
cd bhaShaIME
```

3. Add the original repository as an upstream remote:

```bash
git remote add upstream https://github.com/hironate/bhaShaIME.git
```

## Development Setup

### Install Dependencies

```bash
npm install
```

### Available Scripts

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Build the library
npm run build

# Start development with watch mode
npm run dev

# Lint the code
npm run lint

# Format code
npm run format
```

### Project Structure

```
bhaShaIME/
├── src/                    # Source code
│   ├── engines/           # Language engines
│   ├── types.ts           # TypeScript types
│   ├── bhasha-engine.ts   # Core transliteration engine
│   ├── useBhaShaIME.ts    # React hook
│   └── index.ts           # Main exports
├── __tests__/             # Test files
├── examples/              # Example implementations
├── website/               # Documentation website
└── dist/                  # Built files
```

## Making Changes

### Creating a Branch

Always create a new branch for your changes:

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

### Branch Naming Convention

- `feature/` - for new features
- `fix/` - for bug fixes
- `docs/` - for documentation changes
- `test/` - for adding or updating tests
- `refactor/` - for code refactoring

### Commit Message Guidelines

Use clear, descriptive commit messages:

```
type(scope): description

# Examples:
feat(gujarati): add support for additional vowel combinations
fix(hindi): resolve issue with nukta character handling
docs(readme): update installation instructions
test(engines): add comprehensive tests for special characters
```

## Testing

### Running Tests

Always run tests before submitting changes:

```bash
# Run all tests
npm test

# Run tests in watch mode during development
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Writing Tests

- Add tests for new features in the `__tests__/` directory
- Follow existing test patterns and naming conventions
- Ensure good test coverage for new code
- Test both success and error cases

Example test structure:

```typescript
describe('Feature Name', () => {
  let bhaSha: BhaSha;

  beforeEach(() => {
    bhaSha = new BhaSha();
  });

  test('should handle basic case', () => {
    expect(bhaSha.transliterateText('input')).toBe('output');
  });
});
```

## Submitting Changes

### Before Submitting

1. **Sync with upstream**:

   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Run the full test suite**:

   ```bash
   npm test
   ```

3. **Build the project**:

   ```bash
   npm run build
   ```

4. **Check code style**:
   ```bash
   npm run lint
   ```

### Creating a Pull Request

1. Push your branch to your fork:

   ```bash
   git push origin your-branch-name
   ```

2. Open a pull request on GitHub with:
   - Clear title describing the change
   - Detailed description of what was changed and why
   - Reference any related issues
   - Screenshots for UI changes (if applicable)

### Pull Request Template

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## Testing

- [ ] Tests pass locally
- [ ] Added tests for new functionality
- [ ] Tested with multiple languages

## Checklist

- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Documentation updated if needed
- [ ] No breaking changes (or properly documented)
```

## Coding Standards

### TypeScript Guidelines

- Use strict TypeScript configurations
- Define proper types for all functions and variables
- Avoid `any` types when possible
- Use meaningful variable and function names

### Code Style

- Use 2 spaces for indentation
- Use semicolons consistently
- Use single quotes for strings
- Keep lines under 80 characters when reasonable
- Use meaningful comments for complex logic

### File Organization

- Keep files focused and single-purpose
- Use consistent naming conventions
- Export from index files for clean imports
- Group related functionality together

## Issue Guidelines

### Reporting Bugs

When reporting bugs, please include:

1. **Clear title** describing the issue
2. **Steps to reproduce** the problem
3. **Expected behavior** vs actual behavior
4. **Environment details** (OS, Node version, browser)
5. **Code examples** that demonstrate the issue
6. **Error messages** or console logs

### Bug Report Template

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:

1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**

- OS: [e.g., macOS, Windows, Linux]
- Node version: [e.g., 16.14.0]
- Package version: [e.g., 1.0.3]

**Additional context**
Any other context about the problem.
```

## Feature Requests

### Suggesting Features

- Check existing issues to avoid duplicates
- Clearly describe the feature and its benefits
- Provide examples of how it would be used
- Consider backward compatibility
- Discuss implementation approaches

### Feature Request Template

```markdown
**Is your feature request related to a problem?**
A clear description of what the problem is.

**Describe the solution you'd like**
A clear description of what you want to happen.

**Describe alternatives you've considered**
Alternative solutions or features you've considered.

**Additional context**
Any other context, screenshots, or examples.
```

## Documentation

### Updating Documentation

- Update README.md for API changes
- Add JSDoc comments for new functions
- Update TypeScript type definitions
- Include examples for new features
- Update the website documentation if needed

### Documentation Standards

- Use clear, concise language
- Provide practical examples
- Keep documentation up-to-date with code changes
- Include TypeScript types in examples

## Language Support

### Adding New Languages

If you want to add support for a new Indian language:

1. Create a new engine in `src/engines/`
2. Add transliteration rules following existing patterns
3. Add comprehensive tests
4. Update type definitions
5. Add documentation and examples

### Language Engine Structure

```typescript
export class NewLanguageEngine extends BaseEngine {
  language = 'newlanguage' as const;

  protected getTransliterationMap(): Record<string, string> {
    return {
      // Add transliteration mappings
    };
  }
}
```

## Release Process

Releases are handled by maintainers, but contributors should:

- Follow semantic versioning in commit messages
- Update CHANGELOG.md for significant changes
- Ensure backward compatibility or document breaking changes

## Getting Help

- **GitHub Discussions**: For questions and community discussions
- **Issues**: For bugs and feature requests
- **Pull Requests**: For code review and feedback

## Recognition

All contributors will be recognized in:

- CONTRIBUTORS.md file
- Release notes for significant contributions
- GitHub contributor statistics

## Thank You

Your contributions help make BhaSha IME better for the entire Indian language community. Whether you're fixing bugs, adding features, improving documentation, or helping others, every contribution matters!

---

For questions about contributing, please open an issue or start a discussion on GitHub.
