import { BaseLanguageEngine } from './base-engine';
import { LanguageSpecificConfig } from '../types';

export class EnglishEngine extends BaseLanguageEngine {
  readonly language = 'english' as const;

  protected config: LanguageSpecificConfig = {
    vowels: {},
    consonants: {},
    numbers: {},
    specialChars: {},
    virama: '',
    anusvara: '',
    chandrabindu: '',
    visarga: '',
    nukta: '',
    avagrah: '',
    zwj: '',
    zwnj: '',
    inherentVowel: '',
  };

  protected shouldConvertToAnusvara(
    _char: string,
    _nextChars: string,
  ): boolean {
    return false; // English doesn't use anusvara
  }

  transliterateText(text: string): string {
    return text; // Pass through unchanged
  }

  processInput(char: string): { valid: boolean; output: string } {
    return { valid: true, output: char };
  }
}
