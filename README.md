# BhaSha IME - React Plugin for Indian Language Transliteration

[![npm version](https://badge.fury.io/js/@bhashaime%2Fcore.svg)](https://badge.fury.io/js/@bhashaime%2Fcore)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

🌐 **[Website & Live Demo](https://bhashaime.vercel.app)** | 📚 **[Documentation](https://bhashaime.vercel.app/docs)** | 🚀 **[Examples](https://bhashaime.vercel.app/docs#examples)**

A powerful React plugin for real-time Indian language transliteration with support for Gujarati, Hindi, and more. Built from scratch in TypeScript with comprehensive test coverage.

## Features

- 🚀 **Real-time transliteration** from English to Indian languages
- 🇮🇳 **Multi-language support**: Gujarati, Hindi, and more
- ⚡ **React Hooks & Components** for easy integration
- 🎯 **TypeScript support** with full type definitions
- 🧪 **Comprehensive test coverage**
- 📱 **Responsive design** with customizable styling
- 🔧 **Flexible configuration** options

## Installation

```bash
npm install @bhashaIME/core
# or
yarn add @bhashaIME/core
```

## Quick Start

### Using the Hook

```tsx
import { useBhaShaIME, SupportedLanguage } from '@bhashaIME/core';

function MyComponent() {
  const { input, output, setInput, setLanguage } = useBhaShaIME({
    language: 'gujarati',
    autoTransliterate: true,
  });

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type in English..."
      />
      <div>{output}</div>
    </div>
  );
}
```

### Using the Input Component

```tsx
import { BhaShaInput } from '@bhashaIME/core';

function MyComponent() {
  return (
    <BhaShaInput
      language="gujarati"
      placeholder="Type in English..."
      showOutput={true}
      onInputChange={(input) => console.log('Input:', input)}
      onOutputChange={(output) => console.log('Output:', output)}
    />
  );
}
```

### Using the Textarea Component

```tsx
import { BhaShaTextarea } from '@bhashaIME/core';

function MyComponent() {
  return (
    <BhaShaTextarea
      language="hindi"
      rows={5}
      placeholder="Type a paragraph in English..."
      showOutput={true}
    />
  );
}
```

## API Reference

### Language Types and Utilities

All language types and utilities are now included in the main package:

```typescript
import {
  SupportedLanguage,
  LanguageConfig,
  LANGUAGES,
  getLanguageConfig,
  getSupportedLanguages,
  isSupportedLanguage,
} from '@bhashaIME/core';

// Type for supported languages
type SupportedLanguage = 'gujarati' | 'hindi' | 'english';

// Get language configuration
const gujaratiConfig = getLanguageConfig('gujarati');
// Returns: { name: 'Gujarati', nativeName: 'ગુજરાતી', code: 'gujarati', script: 'Gujarati', direction: 'ltr' }

// Get all supported languages
const languages = getSupportedLanguages();
// Returns: ['gujarati', 'hindi', 'english']

// Check if a language is supported
const isSupported = isSupportedLanguage('gujarati'); // true
```

### useBhaShaIME Hook

#### Options

```typescript
interface UseBhaShaIMEOptions {
  language?: SupportedLanguage;
  autoTransliterate?: boolean;
  onTransliterationChange?: (input: string, output: string) => void;
}
```

#### Return Value

```typescript
interface UseBhaShaIMEReturn {
  input: string;
  output: string;
  language: SupportedLanguage;
  setInput: (text: string) => void;
  setLanguage: (lang: SupportedLanguage) => void;
  transliterate: (text: string) => string;
  clear: () => void;
  bhaSha: BhaSha;
}
```

### BhaShaInput Component

```typescript
interface BhaShaInputProps extends UseBhaShaIMEOptions {
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  readOnly?: boolean;
  showOutput?: boolean;
  outputClassName?: string;
  outputStyle?: React.CSSProperties;
  onInputChange?: (value: string) => void;
  onOutputChange?: (value: string) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
```

### BhaShaTextarea Component

```typescript
interface BhaShaTextareaProps extends UseBhaShaIMEOptions {
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  readOnly?: boolean;
  showOutput?: boolean;
  outputClassName?: string;
  outputStyle?: React.CSSProperties;
  rows?: number;
  cols?: number;
  onInputChange?: (value: string) => void;
  onOutputChange?: (value: string) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
}
```

### BhaSha Class

For direct usage without React components or hooks, you can use the BhaSha class directly:

```typescript
import { BhaSha } from '@bhashaIME/core';

// Create a new instance
const bhaSha = new BhaSha();

// Set language
bhaSha.setLanguage('gujarati');

// Transliterate text
const gujaratiText = bhaSha.transliterateText('namaste');
console.log(gujaratiText); // નમસ્તે

// Switch language
bhaSha.setLanguage('hindi');
const hindiText = bhaSha.transliterateText('namaste');
console.log(hindiText); // नमस्ते

// Check supported languages
console.log(bhaSha.supports('gujarati')); // true
console.log(bhaSha.getSupportedLanguages()); // ['gujarati', 'hindi', 'english']

// Get current language
console.log(bhaSha.getLanguage()); // 'hindi'

// Get specific engine
const gujaratiEngine = bhaSha.getEngine('gujarati');
console.log(gujaratiEngine.transliterateText('hello')); // હેલ્લો
```

#### BhaSha Class Methods

```typescript
class BhaSha {
  // Set the active language
  setLanguage(language: SupportedLanguage): void;

  // Get the current language
  getLanguage(): SupportedLanguage;

  // Transliterate text using current language
  transliterateText(text: string): string;

  // Check if a language is supported
  supports(language: string): boolean;

  // Get all supported languages
  getSupportedLanguages(): SupportedLanguage[];

  // Get engine for specific language
  getEngine(language: SupportedLanguage): TransliterationEngine;
}
```

## Examples

### Basic Usage

```tsx
// Simple input with output display
<BhaShaInput language="gujarati" placeholder="namaste, kem chho?" />

// Output: નમસ્તે, કેમ છો?
```

### Advanced Usage

```tsx
// Custom styling and callbacks
<BhaShaInput
  language="hindi"
  className="custom-input"
  outputClassName="custom-output"
  showOutput={true}
  onInputChange={(input) => console.log('Typing:', input)}
  onOutputChange={(output) => console.log('Transliterated:', output)}
  style={{ fontSize: '18px' }}
  outputStyle={{
    backgroundColor: '#f0f8ff',
    borderColor: '#0066cc',
  }}
/>
```

### Programmatic Control

```tsx
import { useRef } from 'react';
import { BhaShaInput, BhaShaInputRef } from '@bhashaIME/core';

function MyComponent() {
  const inputRef = useRef<BhaShaInputRef>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const handleClear = () => {
    inputRef.current?.clear();
  };

  const setCustomText = () => {
    inputRef.current?.setInput('namaste');
  };

  return (
    <div>
      <BhaShaInput ref={inputRef} language="gujarati" />
      <button onClick={handleFocus}>Focus</button>
      <button onClick={handleClear}>Clear</button>
      <button onClick={setCustomText}>Set Text</button>
    </div>
  );
}
```

## Testing

The plugin includes comprehensive tests covering:

- ✅ All Gujarati vowels and consonants
- ✅ Hindi transliteration
- ✅ Special characters and symbols
- ✅ ZWJ/ZWNJ handling
- ✅ Vowel separation
- ✅ Dead consonants
- ✅ Mixed case handling
- ✅ Punctuation and numbers
- ✅ Real-world examples

Run tests:

```bash
npm test
npm run test:coverage
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

For issues and questions, please open an issue on GitHub.
