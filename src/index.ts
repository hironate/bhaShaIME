// Core BhaSha engine
export { BhaSha } from './bhasha-engine';

// Engine architecture
export { EngineFactory } from './engines';
export type { LanguageEngine } from './engines';
export { BaseLanguageEngine } from './engines';
export { GujaratiEngine } from './engines';
export { HindiEngine } from './engines';
export { EnglishEngine } from './engines';

// React Hook
export { useBhaShaIME } from './useBhaShaIME';
export type { UseBhaShaIMEOptions, UseBhaShaIMEReturn } from './useBhaShaIME';

// React Components
export { BhaShaInput } from './BhaShaInput';
export type { BhaShaInputProps, BhaShaInputRef } from './BhaShaInput';

export { BhaShaTextarea } from './BhaShaTextarea';
export type { BhaShaTextareaProps, BhaShaTextareaRef } from './BhaShaTextarea';

// Language types and utilities
export {
  LANGUAGES,
  getLanguageConfig,
  getSupportedLanguages,
  isSupportedLanguage,
} from './types';
export type {
  SupportedLanguage,
  LanguageConfig,
  LanguageSpecificConfig,
} from './types';

// Default export for convenience
import { BhaSha } from './bhasha-engine';
import { useBhaShaIME } from './useBhaShaIME';
import { BhaShaInput } from './BhaShaInput';
import { BhaShaTextarea } from './BhaShaTextarea';

export default {
  BhaSha,
  useBhaShaIME,
  BhaShaInput,
  BhaShaTextarea,
};
