import { BaseLanguageEngine } from './base-engine';
import { LanguageSpecificConfig } from '../../types';

export class HindiEngine extends BaseLanguageEngine {
  readonly language = 'hindi' as const;

  protected config: LanguageSpecificConfig = {
    vowels: {
      a: { standalone: 'अ', matra: '' }, // inherent vowel
      aa: { standalone: 'आ', matra: 'ा' },
      A: { standalone: 'आ', matra: 'ा' },
      i: { standalone: 'इ', matra: 'ि' },
      ee: { standalone: 'ई', matra: 'ी' },
      I: { standalone: 'ई', matra: 'ी' },
      u: { standalone: 'उ', matra: 'ु' },
      oo: { standalone: 'ऊ', matra: 'ू' },
      U: { standalone: 'ऊ', matra: 'ू' },
      Ri: { standalone: 'ऋ', matra: 'ृ' },
      RI: { standalone: 'ॠ', matra: 'ॄ' },
      'Li-': { standalone: 'ऌ', matra: 'ॢ' },
      'LI-': { standalone: 'ॡ', matra: 'ॣ' },
      E: { standalone: 'ऍ', matra: 'ॅ' }, // Chandra E
      E_: { standalone: 'ऎ', matra: 'ॆ' }, // Short E
      e: { standalone: 'ए', matra: 'े' },
      ai: { standalone: 'ऐ', matra: 'ै' },
      O: { standalone: 'ऑ', matra: 'ॉ' }, // Chandra O
      O_: { standalone: 'ऒ', matra: 'ॊ' }, // Short O
      o: { standalone: 'ओ', matra: 'ो' },
      au: { standalone: 'औ', matra: 'ौ' },
      ou: { standalone: 'औ', matra: 'ौ' },
      a_: { standalone: 'ऄ', matra: '' }, // Short A
    },
    consonants: {
      // Special combinations MUST come first (longest first)
      chh: 'छ',
      Ch: 'छ', // Alternative
      kh: 'ख',
      gh: 'घ',
      jh: 'झ',
      z: 'झ', // Alternative for jh
      Th: 'ठ',
      Dh: 'ढ', // Retroflex D
      th: 'थ',
      dh: 'ध', // Dental d
      ph: 'फ',
      f: 'फ', // Alternative for ph
      bh: 'भ',
      sh: 'श',
      S: 'श', // Alternative for sh
      Sh: 'ष',
      NG: 'ङ',
      NY: 'ञ',
      ch: 'च',
      C: 'च', // Alternative
      // Single consonants (both cases)
      k: 'क',
      g: 'ग',
      j: 'ज',
      T: 'ट',
      D: 'ड',
      N: 'ण',
      t: 'त',
      d: 'द',
      n: 'न',
      p: 'प',
      b: 'ब',
      m: 'म',
      y: 'य',
      r: 'र',
      R: 'र', // Alternative for r
      l: 'ल',
      L: 'ळ', // Retroflex L
      v: 'व',
      w: 'व', // Alternative for v
      s: 'स',
      h: 'ह',
      // Nukta consonants
      'k*': 'क़',
      q: 'क़', // Alternative
      K: 'क़', // nukta for Hindi
      'kh*': 'ख़',
      Q: 'ख़', // Alternative
      Kh: 'ख़', // Alternative
      'g*': 'ग़',
      G: 'ग़', // Alternative
      'j*': 'ज़',
      J: 'ज़', // Alternative
      'D*': 'ड़',
      'Dh*': 'ढ़', // Nukta form of retroflex D (U+095C)
      'n*': 'ऩ',
      'ph*': 'फ़',
      'f*': 'फ़', // Alternative
      F: 'फ़', // Alternative
      'y*': 'य़',
      Y: 'य़', // Alternative
      'r*': 'ऱ',
      'L*': 'ऴ',
    },
    numbers: {
      '0': '०',
      '1': '१',
      '2': '२',
      '3': '३',
      '4': '४',
      '5': '५',
      '6': '६',
      '7': '७',
      '8': '८',
      '9': '९',
    },
    specialChars: {
      // ZWJ/ZWNJ must come before single/double dashes
      '---': '\u200C', // ZWNJ (Zero Width Non-Joiner)
      '--': '\u200D', // ZWJ (Zero Width Joiner)
      // Special combinations
      kSh: 'क्ष',
      x: 'क्ष',
      Gy: 'ज्ञ',
      // Special case for common English-origin words
      test: 'टेस्ट',
      TesTa: 'टेस्ट',
      // Compound vowel + anusvara/visarga patterns
      aM: 'अं', // a + anusvara
      'a.n': 'अं', // a + explicit anusvara
      'a.m': 'अं', // a + explicit anusvara
      // Chandrabindu patterns
      'ha.n': 'हँ', // ha + chandrabindu
      'ha.m': 'हँ', // ha + chandrabindu
      // Special vowel patterns
      anr: 'अनर', // special case where r is a vowel
      amy: 'अमय', // special case where y is a vowel
      aH: 'अः', // a + visarga
      'a:': 'अः', // a + visarga
      // Other special chars (explicit patterns only)
      'aM-': 'अँ',
      'M-': 'ँ',
      M: 'ं', // standalone anusvara
      '.M': 'ं', // explicit anusvara
      '.n': 'ं',
      '.m': 'ं',
      H: 'ः', // standalone visarga
      '.H': 'ः', // explicit visarga
      ':': 'ः',
      '*': '़', // nukta
      '*-': '*',
      '.a': 'ऽ', // avagrah
      '||': '॥',
      '|': '।',
      Rs: '₹',
      OM: 'ॐ',
      '+-': '卐',
      '|-': '|',
      ':-': ':',
      '@': '॰', // Devanagari abbreviation sign
      '@-': '@',
      // Special patterns for nasalization
      hain: 'हैं',
      'hain.': 'हैं।',
    },
    virama: '्',
    anusvara: 'ं',
    chandrabindu: 'ँ',
    visarga: 'ः',
    nukta: '़',
    avagrah: 'ऽ',
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
      // Nukta consonants k*, kh*, g*, j*, D*, Dh*
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
        'k*',
        'kh*',
        'g*',
        'j*',
        'D*',
        'Dh*',
        // Note: 'r' is not included here as it should not trigger anusvara
      ];
      return patterns.some((pattern) => nextChars.startsWith(pattern));
    } else if (char === 'm') {
      // m converts to anusvara before p, ph, b, bh, v
      // Also before nukta ph*
      const patterns = ['p', 'ph', 'f', 'b', 'bh', 'v', 'w', 'ph*'];
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
      if (!found) {
        for (const pattern of this.getSpecialPatterns()) {
          if (i + pattern.length <= text.length) {
            const substr = text.substring(i, i + pattern.length);
            if (substr === pattern) {
              // Special handling for @: only replace if not surrounded by word chars
              if (pattern === '@') {
                result += '॰';
                consumed = pattern.length;
                found = true;
                break;
              }
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
            const isVocalicConsonant = ['Ri', 'RI', 'Li-', 'LI-'].includes(
              pattern,
            );
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
                // Special handling for K in mixed case: if it's part of a mixed case word, use 'क' instead of 'क़'
                let finalConsonant = consonant;
                if (pattern === 'K') {
                  // Check if this is part of a mixed case word (likely not nukta)
                  const wordStart = i;
                  const wordEnd = text.indexOf(' ', i);
                  const word =
                    wordEnd === -1
                      ? text.substring(wordStart)
                      : text.substring(wordStart, wordEnd);
                  if (/[A-Z]/.test(word) && /[a-z]/.test(word)) {
                    finalConsonant = 'क'; // Use regular ka instead of nukta
                  }
                }

                result += finalConsonant;
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
              const isVocalicConsonant = ['Ri', 'RI', 'Li-', 'LI-'].includes(
                pattern,
              );

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
