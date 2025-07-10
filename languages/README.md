# @bhashaIME/languages

Language types and configurations for the BhaSha transliteration system.

## Installation

```bash
npm install @bhashaIME/languages
# or
yarn add @bhashaIME/languages
```

## Usage

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

// Language configuration interface
interface LanguageConfig {
  name: string; // English name
  nativeName: string; // Native script name
  code: SupportedLanguage; // Language code
  script: string; // Script name
  direction: 'ltr' | 'rtl'; // Text direction
}
```

## API

### `SupportedLanguage`

Type definition for supported languages:

```typescript
type SupportedLanguage = 'gujarati' | 'hindi' | 'english';
```

### `LANGUAGES`

Object containing all language configurations:

```typescript
const LANGUAGES = {
  gujarati: {
    name: 'Gujarati',
    nativeName: 'ગુજરાતી',
    code: 'gujarati',
    script: 'Gujarati',
    direction: 'ltr',
  },
  hindi: {
    name: 'Hindi',
    nativeName: 'हिंदी',
    code: 'hindi',
    script: 'Devanagari',
    direction: 'ltr',
  },
  english: {
    name: 'English',
    nativeName: 'English',
    code: 'english',
    script: 'Latin',
    direction: 'ltr',
  },
};
```

### `getLanguageConfig(code: SupportedLanguage): LanguageConfig`

Get configuration for a specific language:

```typescript
const gujaratiConfig = getLanguageConfig('gujarati');
// Returns: { name: 'Gujarati', nativeName: 'ગુજરાતી', code: 'gujarati', script: 'Gujarati', direction: 'ltr' }
```

### `getSupportedLanguages(): SupportedLanguage[]`

Get array of all supported language codes:

```typescript
const languages = getSupportedLanguages();
// Returns: ['gujarati', 'hindi', 'english']
```

### `isSupportedLanguage(code: string): code is SupportedLanguage`

Type guard to check if a string is a supported language:

```typescript
const isSupported = isSupportedLanguage('gujarati'); // true
const isNotSupported = isSupportedLanguage('french'); // false
```

## Examples

### Type-safe language handling

```typescript
import { SupportedLanguage, isSupportedLanguage } from '@bhashaIME/languages';

function handleLanguage(lang: string) {
  if (isSupportedLanguage(lang)) {
    // TypeScript now knows lang is SupportedLanguage
    const config = getLanguageConfig(lang);
    console.log(`Selected: ${config.nativeName}`);
  } else {
    console.warn(`Unsupported language: ${lang}`);
  }
}
```

### Language selection component

```typescript
import { getSupportedLanguages, getLanguageConfig } from '@bhashaIME/languages';

function LanguageSelector() {
  const languages = getSupportedLanguages();

  return (
    <select onChange={(e) => handleLanguageChange(e.target.value)}>
      {languages.map((code) => {
        const config = getLanguageConfig(code);
        return (
          <option key={code} value={code}>
            {config.name} ({config.nativeName})
          </option>
        );
      })}
    </select>
  );
}
```

## License

MIT
