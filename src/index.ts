// Core BhaSha engine
export { BhaSha } from './native/bhasha-engine';

// Engine architecture
export { EngineFactory } from './native/engines';
export type { LanguageEngine } from './native/engines';
export { BaseLanguageEngine } from './native/engines';
export { GujaratiEngine } from './native/engines';
export { HindiEngine } from './native/engines';
export { EnglishEngine } from './native/engines';

// React Hook
export { useBhaShaIME } from './hooks/useBhaShaIME';
export type {
  UseBhaShaIMEOptions,
  UseBhaShaIMEReturn,
} from './hooks/useBhaShaIME';
export { useDirectInputTransliteration } from './hooks/useDirectInputTransliteration';

// React Components
export { BhaShaInput } from './components/BhaShaInput';
export type {
  BhaShaInputProps,
  BhaShaInputRef,
} from './components/BhaShaInput';

export { BhaShaTextarea } from './components/BhaShaTextarea';
export type {
  BhaShaTextareaProps,
  BhaShaTextareaRef,
} from './components/BhaShaTextarea';

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
import { BhaSha } from './native/bhasha-engine';
import { useBhaShaIME } from './hooks/useBhaShaIME';
import { BhaShaInput } from './components/BhaShaInput';
import { BhaShaTextarea } from './components/BhaShaTextarea';

export default {
  BhaSha,
  useBhaShaIME,
  BhaShaInput,
  BhaShaTextarea,
};
