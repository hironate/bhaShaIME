# @bhashaIME/core - React Indian Language Transliteration Plugin

A powerful React plugin for real-time Indian language transliteration with support for Gujarati, Hindi, and more. Built from scratch in TypeScript with comprehensive test coverage.

## Packages

- **@bhashaIME/core** - Main React components and hooks for transliteration
- **@bhashaIME/languages** - Language types and configurations

## Features

- 🚀 **Real-time transliteration** from English to Indian languages
- 🇮🇳 **Multi-language support**: Gujarati, Hindi, and more
- ⚡ **React Hooks & Components** for easy integration
- 🎯 **TypeScript support** with full type definitions
- 🧪 **Comprehensive test coverage** (58+ tests)
- 📱 **Responsive design** with customizable styling
- 🔧 **Flexible configuration** options

## Installation

### Core Package

```bash
npm install @bhashaIME/core
# or
yarn add @bhashaIME/core
```

### Language Types (Optional)

```bash
npm install @bhashaIME/languages
# or
yarn add @bhashaIME/languages
```

## Quick Start

### Using the Hook

```tsx
import { useBhaShaIME } from '@bhashaIME/core';
import { SupportedLanguage } from '@bhashaIME/languages';

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

### @bhashaIME/languages

The languages package provides type definitions and utilities for supported languages:

```typescript
import {
  SupportedLanguage,
  LanguageConfig,
  LANGUAGES,
  getLanguageConfig,
  getSupportedLanguages,
  isSupportedLanguage,
} from '@bhashaIME/languages';

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

## Transliteration Rules

### Gujarati

#### Basic Vowels

- `a aa i ee u oo e o` → અ આ ઇ ઈ ઉ ઊ એ ઓ
- `ai au E O` → ઐ ઔ ઍ ઑ

#### Consonants

- `k kh g gh` → ક ખ ગ ઘ
- `ch chh j jh` → ચ છ જ ઝ
- `T Th D Dh N` → ટ ઠ ડ ઢ ણ

#### Special Characters

- `x` → ક્ષ, `Gn/Gy` → જ્ઞ
- `M/.n/.m` → ં (anusvara)
- `H/:` → ઃ (visarga)

#### Advanced Features

- **ZWJ/ZWNJ**: `--` → ZWJ, `---` → ZWNJ
- **Vowel Separation**: `thai` → થૈ, `tha-i` → થઇ
- **Dead Consonants**: `daMDavat-` → દંડવત્

### Hindi

#### Basic Vowels

- `a aa i ee u oo e o` → अ आ इ ई उ ऊ ए ओ
- `ai au` → ऐ औ

#### Consonants

- `k kh g gh` → क ख ग घ
- `ch chh j jh` → च छ ज झ
- `T Th D Dh N` → ट ठ ड ढ ण

#### Special Characters

- `x` → क्ष, `Gy` → ज्ञ
- `M` → ं (anusvara)
- `H` → ः (visarga)

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
import { BhaShaInput, BhaShaInputRef } from 'bhashaime';

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
