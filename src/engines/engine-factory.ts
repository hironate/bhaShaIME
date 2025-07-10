import { LanguageEngine, SupportedLanguage } from '../types';
import { GujaratiEngine } from './gujarati-engine';
import { HindiEngine } from './hindi-engine';
import { EnglishEngine } from './english-engine';

// Engine factory for managing language-specific transliteration engines
export class EngineFactory {
  private static engines: Map<SupportedLanguage, LanguageEngine> = new Map();

  static {
    // Initialize all engines
    EngineFactory.engines.set('gujarati', new GujaratiEngine());
    EngineFactory.engines.set('hindi', new HindiEngine());
    EngineFactory.engines.set('english', new EnglishEngine());
  }

  /**
   * Get the appropriate engine for a given language
   * @param language The language code
   * @returns The language engine instance
   * @throws Error if language is not supported
   */
  static getEngine(language: SupportedLanguage): LanguageEngine {
    const engine = this.engines.get(language);
    if (!engine) {
      throw new Error(`Language '${language}' is not supported.`);
    }
    return engine;
  }

  /**
   * Check if a language is supported
   * @param language The language code to check
   * @returns True if the language is supported
   */
  static isSupported(language: string): language is SupportedLanguage {
    return this.engines.has(language as SupportedLanguage);
  }

  /**
   * Get all supported languages
   * @returns Array of supported language codes
   */
  static getSupportedLanguages(): SupportedLanguage[] {
    return Array.from(this.engines.keys());
  }

  /**
   * Get all available engines
   * @returns Map of all language engines
   */
  static getAllEngines(): Map<SupportedLanguage, LanguageEngine> {
    return new Map(this.engines);
  }
}
