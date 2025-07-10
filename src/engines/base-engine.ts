import {
  LanguageEngine,
  LanguageSpecificConfig,
  SupportedLanguage,
} from '../types';

// Base abstract class for language-specific transliteration engines
export abstract class BaseLanguageEngine implements LanguageEngine {
  abstract readonly language: SupportedLanguage;
  protected abstract config: LanguageSpecificConfig;

  supports(lang: string): boolean {
    return lang === this.language;
  }

  abstract transliterateText(text: string): string;
  abstract processInput(char: string): { valid: boolean; output: string };

  // Common utility methods that can be used by all engines
  protected getConsonantPatterns(): string[] {
    return Object.keys(this.config.consonants).sort(
      (a, b) => b.length - a.length,
    );
  }

  protected getVowelPatterns(): string[] {
    return Object.keys(this.config.vowels).sort((a, b) => b.length - a.length);
  }

  protected getSpecialPatterns(): string[] {
    return Object.keys(this.config.specialChars).sort(
      (a, b) => b.length - a.length,
    );
  }

  protected getConsonant(pattern: string): string | null {
    return this.config.consonants[pattern] || null;
  }

  protected getVowel(
    pattern: string,
    isStandalone: boolean = false,
  ): string | null {
    const vowelData = this.config.vowels[pattern];
    if (!vowelData) return null;
    return isStandalone ? vowelData.standalone : vowelData.matra;
  }

  protected getNumber(pattern: string): string | null {
    return this.config.numbers[pattern] || null;
  }

  protected getSpecialChar(pattern: string): string | null {
    return this.config.specialChars[pattern] || null;
  }

  protected isVowel(pattern: string): boolean {
    return this.config.vowels[pattern] !== undefined;
  }

  protected isConsonant(pattern: string): boolean {
    return this.config.consonants[pattern] !== undefined;
  }

  // Abstract method for language-specific anusvara rules
  protected abstract shouldConvertToAnusvara(
    char: string,
    nextChars: string,
  ): boolean;
}
