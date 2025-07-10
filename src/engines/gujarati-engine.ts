import { BaseLanguageEngine } from './base-engine';
import { LanguageSpecificConfig } from '../types';

export class GujaratiEngine extends BaseLanguageEngine {
  readonly language = 'gujarati' as const;

  protected config: LanguageSpecificConfig = {
    vowels: {
      a: { standalone: 'અ', matra: '' }, // inherent vowel
      aa: { standalone: 'આ', matra: 'ા' },
      A: { standalone: 'આ', matra: 'ા' },
      i: { standalone: 'ઇ', matra: 'િ' },
      ee: { standalone: 'ઈ', matra: 'ી' },
      I: { standalone: 'ઈ', matra: 'ી' },
      u: { standalone: 'ઉ', matra: 'ુ' },
      oo: { standalone: 'ઊ', matra: 'ૂ' },
      U: { standalone: 'ઊ', matra: 'ૂ' },
      Ru: { standalone: 'ઋ', matra: 'ૃ' },
      Ri: { standalone: 'ઋ', matra: 'ૃ' },
      RU: { standalone: 'ૠ', matra: 'ૄ' },
      RI: { standalone: 'ૠ', matra: 'ૄ' },
      'Lu-': { standalone: 'ઌ', matra: 'ૢ' },
      'Li-': { standalone: 'ઌ', matra: 'ૢ' },
      'LU-': { standalone: 'ૡ', matra: 'ૣ' },
      'LI-': { standalone: 'ૡ', matra: 'ૣ' },
      // R should only be used as matra, not standalone
      R: { standalone: '', matra: 'ૃ' }, // For kR → કૃ (matra only)
      E: { standalone: 'ઍ', matra: 'ૅ' }, // Chandra E
      e: { standalone: 'એ', matra: 'ે' },
      ai: { standalone: 'ઐ', matra: 'ૈ' },
      O: { standalone: 'ઑ', matra: 'ૉ' }, // Chandra O
      o: { standalone: 'ઓ', matra: 'ો' },
      au: { standalone: 'ઔ', matra: 'ૌ' },
      ou: { standalone: 'ઔ', matra: 'ૌ' },
    },
    consonants: {
      // Special combinations MUST come first (longest first)
      chh: 'છ',
      Ch: 'છ',
      kh: 'ખ',
      gh: 'ઘ',
      jh: 'ઝ',
      Th: 'ઠ',
      Dh: 'ઢ',
      th: 'થ',
      dh: 'ધ',
      ph: 'ફ',
      bh: 'ભ',
      sh: 'શ',
      Sh: 'ષ',
      NG: 'ઙ',
      NY: 'ઞ',
      ch: 'ચ',
      // Single consonants (both cases)
      K: 'ક', // uppercase K
      k: 'ક',
      G: 'ગ', // uppercase G
      g: 'ગ',
      C: 'ચ',
      J: 'જ', // uppercase J
      j: 'જ',
      z: 'ઝ', // alternate for jh
      T: 'ટ',
      D: 'ડ',
      N: 'ણ',
      t: 'ત',
      d: 'દ',
      n: 'ન',
      P: 'પ', // uppercase P
      p: 'પ',
      F: 'ફ', // uppercase F
      f: 'ફ',
      B: 'બ', // uppercase B
      b: 'બ',
      m: 'મ', // lowercase m for consonant (not anusvara)
      Y: 'ય', // uppercase Y
      y: 'ય',
      R: 'ર',
      r: 'ર',
      L: 'ળ', // retroflex L
      l: 'લ',
      V: 'વ', // uppercase V
      v: 'વ',
      W: 'વ', // uppercase W
      w: 'વ',
      S: 'શ',
      s: 'સ',
      h: 'હ', // h for consonant (H is handled as visarga)
    },
    numbers: {
      '0': '૦',
      '1': '૧',
      '2': '૨',
      '3': '૩',
      '4': '૪',
      '5': '૫',
      '6': '૬',
      '7': '૭',
      '8': '૮',
      '9': '૯',
    },
    specialChars: {
      // ZWJ/ZWNJ must come before single/double dashes
      '---': '\u200C', // ZWNJ (Zero Width Non-Joiner)
      '--': '\u200D', // ZWJ (Zero Width Joiner)
      // Special combinations
      kSh: 'ક્ષ',
      x: 'ક્ષ',
      Gn: 'જ્ઞ',
      Gy: 'જ્ઞ',
      Sr: 'શ્ર', // શ્ર combination
      // Compound vowel + anusvara/visarga patterns
      aM: 'અં', // a + anusvara
      'a.n': 'અં', // a + explicit anusvara
      'a.m': 'અં', // a + explicit anusvara
      aH: 'અઃ', // a + visarga
      'a:': 'અઃ', // a + visarga
      // Other special chars (explicit patterns only)
      'aM-': 'ઁ',
      'M-': 'ઁ',
      M: 'ં', // standalone anusvara
      '.M': 'ં', // explicit anusvara
      '.n': 'ં',
      '.m': 'ં',
      H: 'ઃ', // standalone visarga
      '.H': 'ઃ', // explicit visarga
      ':': 'ઃ',
      '*': '઼', // nukta
      '*-': '*',
      '.a': 'ઽ', // avagrah
      '||': '॥',
      '|': '।',
      'Rs-': '૱',
      Rs: '₹',
      OM: 'ૐ',
      '+-': '卐',
      '|-': '|',
      ':-': ':',
    },
    virama: '્',
    anusvara: 'ં',
    chandrabindu: 'ઁ',
    visarga: 'ઃ',
    nukta: '઼',
    avagrah: 'ઽ',
    zwj: '\u200D',
    zwnj: '\u200C',
    inherentVowel: 'a',
  };

  protected shouldConvertToAnusvara(char: string, nextChars: string): boolean {
    // Check for explicit anusvara patterns or hyphens
    if (
      nextChars.startsWith('-') ||
      nextChars.startsWith('M') ||
      nextChars.startsWith('.n') ||
      nextChars.startsWith('.m')
    ) {
      return false; // explicit patterns take precedence
    }

    // Don't convert to anusvara if next character is a word boundary
    if (nextChars === '' || /^[\s.,!?;:()]/.test(nextChars[0])) {
      return false;
    }

    if (char === 'n') {
      // n converts to anusvara before:
      // k, kh, g, gh (gutturals)
      // ch, chh, j, jh (palatals)
      // T, Th, D, Dh (retroflexes)
      // t, th, d, dh (dentals)
      // l, sh, Sh, s (others)
      const patterns = [
        'k',
        'kh',
        'g',
        'gh',
        'ch',
        'chh',
        'Ch',
        'j',
        'jh',
        'z',
        'T',
        'Th',
        'D',
        'Dh',
        't',
        'th',
        'd',
        'dh',
        'l',
        'sh',
        'Sh',
        'S',
        's',
      ];
      return patterns.some((pattern) => nextChars.startsWith(pattern));
    } else if (char === 'm') {
      // m converts to anusvara before p, ph, v, w
      // For b, bh: convert to anusvara only at word end, otherwise conjunct
      if (nextChars.startsWith('b') || nextChars.startsWith('bh')) {
        // Check if this mb/mbh is at word end
        const bPattern = nextChars.startsWith('bh') ? 'bh' : 'b';
        const afterB = nextChars.substring(bPattern.length);
        const isAtWordEnd = afterB === '' || /^[\s.,!?;:()]/.test(afterB);
        return isAtWordEnd;
      }
      const patterns = ['p', 'ph', 'f', 'v', 'w'];
      return patterns.some((pattern) => nextChars.startsWith(pattern));
    }

    return false;
  }

  transliterateText(text: string): string {
    let result = '';
    let i = 0;
    let hyphenBreak = false;

    while (i < text.length) {
      let found = false;
      let consumed = 0;

      // Handle special patterns first (longest first)
      for (const pattern of this.getSpecialPatterns()) {
        if (i + pattern.length <= text.length) {
          const substr = text.substring(i, i + pattern.length);
          if (substr === pattern) {
            const specialChar = this.getSpecialChar(pattern);
            if (specialChar) {
              result += specialChar;
              consumed = pattern.length;
              found = true;
              break;
            }
          }
        }
      }

      // Check for anusvara conversion (before consonants)
      if (!found) {
        if ((text[i] === 'n' || text[i] === 'm') && i + 1 < text.length) {
          const remainingText = text.substring(i + 1);
          if (this.shouldConvertToAnusvara(text[i], remainingText)) {
            result += this.config.anusvara;
            consumed = 1;
            found = true;
          }
        }
      }

      // Handle numbers
      if (!found) {
        const number = this.getNumber(text[i]);
        if (number) {
          result += number;
          consumed = 1;
          found = true;
        }
      }

      // Check for vocalic consonants first (Ru, Ri, etc.) before regular consonants
      if (!found) {
        for (const pattern of this.getVowelPatterns()) {
          if (i + pattern.length <= text.length) {
            const substr = text.substring(i, i + pattern.length);
            // Only check vocalic consonants here (patterns that look like consonants but are vowels)
            const isVocalicConsonant = [
              'Ru',
              'Ri',
              'RU',
              'RI',
              'Lu-',
              'Li-',
              'LU-',
              'LI-',
            ].includes(pattern);
            if (substr === pattern && isVocalicConsonant) {
              const standaloneVowel = this.getVowel(pattern, true);
              if (standaloneVowel) {
                result += standaloneVowel;
                consumed = pattern.length;
                found = true;
                break;
              }
            }
          }
        }
      }

      // Handle consonant patterns (longest first)
      if (!found) {
        for (const pattern of this.getConsonantPatterns()) {
          if (i + pattern.length <= text.length) {
            const substr = text.substring(i, i + pattern.length);
            if (substr === pattern) {
              const consonant = this.getConsonant(pattern);
              if (consonant) {
                result += consonant;
                consumed = pattern.length;

                // Look for following vowel
                let vowelConsumed = 0;
                let vowelFound = false;

                if (hyphenBreak) {
                  hyphenBreak = false;
                } else {
                  for (const vowelPattern of this.getVowelPatterns()) {
                    if (i + consumed + vowelPattern.length <= text.length) {
                      const vowelSubstr = text.substring(
                        i + consumed,
                        i + consumed + vowelPattern.length,
                      );
                      if (vowelSubstr === vowelPattern) {
                        if (vowelPattern === this.config.inherentVowel) {
                          // Inherent vowel, skip it
                          vowelConsumed = vowelPattern.length;
                        } else {
                          // Add vowel matra
                          const vowelMatra = this.getVowel(vowelPattern, false);
                          if (vowelMatra) {
                            result += vowelMatra;
                            vowelConsumed = vowelPattern.length;
                          }
                        }
                        vowelFound = true;
                        break;
                      }
                    }
                  }
                }

                // Check for conjunct consonant (if no vowel found)
                if (!vowelFound && !hyphenBreak) {
                  // Check if next character(s) form a consonant or ZWJ/ZWNJ
                  let nextIsConsonant = false;
                  let hasZWJ = false;
                  let hasZWNJ = false;
                  let checkPos = i + consumed;

                  // Check for ZWJ/ZWNJ first
                  if (
                    checkPos + 3 <= text.length &&
                    text.substring(checkPos, checkPos + 3) === '---'
                  ) {
                    hasZWNJ = true;
                    checkPos += 3;
                  } else if (
                    checkPos + 2 <= text.length &&
                    text.substring(checkPos, checkPos + 2) === '--'
                  ) {
                    hasZWJ = true;
                    checkPos += 2;
                  }

                  // Then check for consonant after ZWJ/ZWNJ
                  for (const nextPattern of this.getConsonantPatterns()) {
                    if (checkPos + nextPattern.length <= text.length) {
                      const nextSubstr = text.substring(
                        checkPos,
                        checkPos + nextPattern.length,
                      );
                      if (
                        nextSubstr === nextPattern &&
                        this.isConsonant(nextPattern)
                      ) {
                        nextIsConsonant = true;
                        break;
                      }
                    }
                  }

                  // Add virama for conjunct consonant
                  if (
                    nextIsConsonant &&
                    checkPos < text.length &&
                    !/[\s.,!?;-]/.test(text[checkPos])
                  ) {
                    result += this.config.virama;
                    // Add ZWJ/ZWNJ after virama
                    if (hasZWJ) {
                      result += this.config.zwj;
                      consumed += 2; // consume the '--'
                    } else if (hasZWNJ) {
                      result += this.config.zwnj;
                      consumed += 3; // consume the '---'
                    }
                  }
                }

                consumed += vowelConsumed;
                found = true;
                break;
              }
            }
          }
        }
      }

      if (!found) {
        // Handle standalone vowels (including vocalic consonants like Ru, Ri)
        const isWordStart = i === 0 || /[\s.,!?;:()]/.test(text[i - 1]);
        const isWordEnd =
          i + 1 >= text.length || /[\s.,!?;:()]/.test(text[i + 1]);
        const isAfterHyphen = hyphenBreak;

        // For vocalic consonants like Ru, Ri, we should check them regardless of word position
        for (const pattern of this.getVowelPatterns()) {
          if (i + pattern.length <= text.length) {
            const substr = text.substring(i, i + pattern.length);
            if (substr === pattern) {
              // Special handling for vocalic consonants - they can appear anywhere
              const isVocalicConsonant = [
                'Ru',
                'Ri',
                'RU',
                'RI',
                'Lu-',
                'Li-',
                'LU-',
                'LI-',
              ].includes(pattern);

              if (
                isWordStart ||
                isAfterHyphen ||
                isWordEnd ||
                isVocalicConsonant
              ) {
                const standaloneVowel = this.getVowel(pattern, true);
                if (standaloneVowel) {
                  result += standaloneVowel;
                  consumed = pattern.length;
                  hyphenBreak = false;
                  found = true;
                  break;
                }
              }
            }
          }
        }
      }

      if (!found) {
        // Handle hyphen for vowel separation or virama
        if (text[i] === '-') {
          if (i === text.length - 1) {
            // Hyphen at end - add virama
            result += this.config.virama;
            consumed = 1;
            found = true;
          } else {
            // Hyphen in middle - check context
            const nextChar = text[i + 1];
            if (this.isVowel(nextChar) || /[aeiouAEIOU]/.test(nextChar)) {
              // Vowel separation
              hyphenBreak = true;
              consumed = 1;
              found = true;
            } else if (/[\s.,!?;:()]/.test(nextChar)) {
              // Hyphen followed by word boundary - add virama (dead consonant)
              result += this.config.virama;
              consumed = 1;
              // Only consume the space if it's the last character or followed by punctuation
              if (
                nextChar === ' ' &&
                (i + 2 >= text.length || /[.,!?;:()]/.test(text[i + 2]))
              ) {
                // Consume the space only if it's at the end or followed by punctuation
                consumed = 2;
              }
              found = true;
            } else {
              // Regular hyphen
              result += '-';
              consumed = 1;
              found = true;
            }
          }
        }
      }

      if (!found) {
        // Handle other characters
        if (text[i] === ' ') {
          result += ' ';
          hyphenBreak = false;
        } else if (/[.,!?;:()]/.test(text[i])) {
          result += text[i];
          hyphenBreak = false;
        } else {
          // Unknown character, keep as is
          result += text[i];
        }
        consumed = 1;
      }

      i += consumed || 1;
    }

    return result;
  }

  processInput(char: string): { valid: boolean; output: string } {
    if (char.length === 0) return { valid: false, output: '' };
    const output = this.transliterateText(char);
    return { valid: true, output: output };
  }
}
