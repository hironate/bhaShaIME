// Supported language types
export type SupportedLanguage = 'gujarati' | 'hindi' | 'english';

// Language configuration interface
export interface LanguageConfig {
  name: string;
  nativeName: string;
  code: SupportedLanguage;
  script: string;
  direction: 'ltr' | 'rtl';
}

// Language configurations
export const LANGUAGES: Record<SupportedLanguage, LanguageConfig> = {
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

// Utility functions
export const getLanguageConfig = (code: SupportedLanguage): LanguageConfig => {
  return LANGUAGES[code];
};

export const getSupportedLanguages = (): SupportedLanguage[] => {
  return Object.keys(LANGUAGES) as SupportedLanguage[];
};

export const isSupportedLanguage = (
  code: string,
): code is SupportedLanguage => {
  return code in LANGUAGES;
};

// Default export
export default LANGUAGES;
