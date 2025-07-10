import { SupportedLanguage } from './types';
import { EngineFactory, LanguageEngine } from './engines';

// Main BhaSha class that delegates to language-specific engines
export class BhaSha {
  private currentLanguage: SupportedLanguage = 'english';
  private currentEngine: LanguageEngine;

  constructor() {
    this.currentEngine = EngineFactory.getEngine(this.currentLanguage);
  }

  supports(lang: string): boolean {
    return EngineFactory.isSupported(lang);
  }

  setLanguage(lang: SupportedLanguage): void {
    if (this.supports(lang)) {
      this.currentLanguage = lang;
      this.currentEngine = EngineFactory.getEngine(lang);
    } else {
      throw new Error(`Language '${lang}' is not supported.`);
    }
  }

  getLanguage(): SupportedLanguage {
    return this.currentLanguage;
  }

  // Main transliteration function - delegates to current engine
  transliterateText(text: string): string {
    return this.currentEngine.transliterateText(text);
  }

  processInput(char: string): { valid: boolean; output: string } {
    return this.currentEngine.processInput(char);
  }

  // Utility methods for getting supported languages
  getSupportedLanguages(): SupportedLanguage[] {
    return EngineFactory.getSupportedLanguages();
  }

  // Method to get engine for a specific language (useful for testing or advanced usage)
  getEngine(language: SupportedLanguage): LanguageEngine {
    return EngineFactory.getEngine(language);
  }
}
