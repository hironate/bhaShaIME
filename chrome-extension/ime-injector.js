!(function () {
  'use strict';
  class t {
    supports(t) {
      return t === this.language;
    }
    getConsonantPatterns() {
      return Object.keys(this.config.consonants).sort(
        (t, n) => n.length - t.length,
      );
    }
    getVowelPatterns() {
      return Object.keys(this.config.vowels).sort(
        (t, n) => n.length - t.length,
      );
    }
    getSpecialPatterns() {
      return Object.keys(this.config.specialChars).sort(
        (t, n) => n.length - t.length,
      );
    }
    getConsonant(t) {
      return this.config.consonants[t] || null;
    }
    getVowel(t, n = !1) {
      const e = this.config.vowels[t];
      return e ? (n ? e.standalone : e.matra) : null;
    }
    getNumber(t) {
      return this.config.numbers[t] || null;
    }
    getSpecialChar(t) {
      return this.config.specialChars[t] || null;
    }
    isVowel(t) {
      return void 0 !== this.config.vowels[t];
    }
    isConsonant(t) {
      return void 0 !== this.config.consonants[t];
    }
  }
  class n extends t {
    constructor() {
      super(...arguments),
        (this.language = 'gujarati'),
        (this.config = {
          vowels: {
            a: { standalone: 'અ', matra: '' },
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
            R: { standalone: '', matra: 'ૃ' },
            E: { standalone: 'ઍ', matra: 'ૅ' },
            e: { standalone: 'એ', matra: 'ે' },
            ai: { standalone: 'ઐ', matra: 'ૈ' },
            O: { standalone: 'ઑ', matra: 'ૉ' },
            o: { standalone: 'ઓ', matra: 'ો' },
            au: { standalone: 'ઔ', matra: 'ૌ' },
            ou: { standalone: 'ઔ', matra: 'ૌ' },
          },
          consonants: {
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
            K: 'ક',
            k: 'ક',
            G: 'ગ',
            g: 'ગ',
            C: 'ચ',
            J: 'જ',
            j: 'જ',
            z: 'ઝ',
            T: 'ટ',
            D: 'ડ',
            N: 'ણ',
            t: 'ત',
            d: 'દ',
            n: 'ન',
            P: 'પ',
            p: 'પ',
            F: 'ફ',
            f: 'ફ',
            B: 'બ',
            b: 'બ',
            m: 'મ',
            Y: 'ય',
            y: 'ય',
            R: 'ર',
            r: 'ર',
            L: 'ળ',
            l: 'લ',
            V: 'વ',
            v: 'વ',
            W: 'વ',
            w: 'વ',
            S: 'શ',
            s: 'સ',
            h: 'હ',
          },
          numbers: {
            0: '૦',
            1: '૧',
            2: '૨',
            3: '૩',
            4: '૪',
            5: '૫',
            6: '૬',
            7: '૭',
            8: '૮',
            9: '૯',
          },
          specialChars: {
            '---': '‌',
            '--': '‍',
            kSh: 'ક્ષ',
            x: 'ક્ષ',
            Gn: 'જ્ઞ',
            Gy: 'જ્ઞ',
            Sr: 'શ્ર',
            aM: 'અં',
            'a.n': 'અં',
            'a.m': 'અં',
            aH: 'અઃ',
            'a:': 'અઃ',
            'aM-': 'ઁ',
            'M-': 'ઁ',
            M: 'ં',
            '.M': 'ં',
            '.n': 'ં',
            '.m': 'ં',
            H: 'ઃ',
            '.H': 'ઃ',
            ':': 'ઃ',
            '*': '઼',
            '*-': '*',
            '.a': 'ઽ',
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
          zwj: '‍',
          zwnj: '‌',
          inherentVowel: 'a',
        });
    }
    shouldConvertToAnusvara(t, n) {
      if (
        n.startsWith('-') ||
        n.startsWith('M') ||
        n.startsWith('.n') ||
        n.startsWith('.m')
      )
        return !1;
      if ('' === n || /^[\s.,!?;:()]/.test(n[0])) return !1;
      if ('n' === t) {
        return [
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
        ].some((t) => n.startsWith(t));
      }
      if ('m' === t) {
        if (n.startsWith('b') || n.startsWith('bh')) {
          const t = n.startsWith('bh') ? 'bh' : 'b',
            e = n.substring(t.length);
          return '' === e || /^[\s.,!?;:()]/.test(e);
        }
        return ['p', 'ph', 'f', 'v', 'w'].some((t) => n.startsWith(t));
      }
      return !1;
    }
    transliterateText(t) {
      let n = '',
        e = 0,
        s = !1;
      for (; e < t.length; ) {
        let a = !1,
          i = 0;
        for (const s of this.getSpecialPatterns())
          if (e + s.length <= t.length) {
            if (t.substring(e, e + s.length) === s) {
              const t = this.getSpecialChar(s);
              if (t) {
                (n += t), (i = s.length), (a = !0);
                break;
              }
            }
          }
        if (!a && ('n' === t[e] || 'm' === t[e]) && e + 1 < t.length) {
          const s = t.substring(e + 1);
          this.shouldConvertToAnusvara(t[e], s) &&
            ((n += this.config.anusvara), (i = 1), (a = !0));
        }
        if (!a) {
          const s = this.getNumber(t[e]);
          s && ((n += s), (i = 1), (a = !0));
        }
        if (!a)
          for (const s of this.getVowelPatterns())
            if (e + s.length <= t.length) {
              const r = t.substring(e, e + s.length),
                h = [
                  'Ru',
                  'Ri',
                  'RU',
                  'RI',
                  'Lu-',
                  'Li-',
                  'LU-',
                  'LI-',
                ].includes(s);
              if (r === s && h) {
                const t = this.getVowel(s, !0);
                if (t) {
                  (n += t), (i = s.length), (a = !0);
                  break;
                }
              }
            }
        if (!a)
          for (const r of this.getConsonantPatterns())
            if (e + r.length <= t.length) {
              if (t.substring(e, e + r.length) === r) {
                const h = this.getConsonant(r);
                if (h) {
                  (n += h), (i = r.length);
                  let l = 0,
                    o = !1;
                  if (s) s = !1;
                  else
                    for (const s of this.getVowelPatterns())
                      if (e + i + s.length <= t.length) {
                        if (t.substring(e + i, e + i + s.length) === s) {
                          if (s === this.config.inherentVowel) l = s.length;
                          else {
                            const t = this.getVowel(s, !1);
                            t && ((n += t), (l = s.length));
                          }
                          o = !0;
                          break;
                        }
                      }
                  if (!o && !s) {
                    let s = !1,
                      a = !1,
                      r = !1,
                      h = e + i;
                    h + 3 <= t.length && '---' === t.substring(h, h + 3)
                      ? ((r = !0), (h += 3))
                      : h + 2 <= t.length &&
                        '--' === t.substring(h, h + 2) &&
                        ((a = !0), (h += 2));
                    for (const n of this.getConsonantPatterns())
                      if (h + n.length <= t.length) {
                        if (
                          t.substring(h, h + n.length) === n &&
                          this.isConsonant(n)
                        ) {
                          s = !0;
                          break;
                        }
                      }
                    s &&
                      h < t.length &&
                      !/[\s.,!?;-]/.test(t[h]) &&
                      ((n += this.config.virama),
                      a
                        ? ((n += this.config.zwj), (i += 2))
                        : r && ((n += this.config.zwnj), (i += 3)));
                  }
                  (i += l), (a = !0);
                  break;
                }
              }
            }
        if (!a) {
          const r = 0 === e || /[\s.,!?;:()]/.test(t[e - 1]),
            h = e + 1 >= t.length || /[\s.,!?;:()]/.test(t[e + 1]),
            l = s;
          for (const o of this.getVowelPatterns())
            if (e + o.length <= t.length) {
              if (t.substring(e, e + o.length) === o) {
                const t = [
                  'Ru',
                  'Ri',
                  'RU',
                  'RI',
                  'Lu-',
                  'Li-',
                  'LU-',
                  'LI-',
                ].includes(o);
                if (r || l || h || t) {
                  const t = this.getVowel(o, !0);
                  if (t) {
                    (n += t), (i = o.length), (s = !1), (a = !0);
                    break;
                  }
                }
              }
            }
        }
        if (!a && '-' === t[e])
          if (e === t.length - 1) (n += this.config.virama), (i = 1), (a = !0);
          else {
            const r = t[e + 1];
            this.isVowel(r) || /[aeiouAEIOU]/.test(r)
              ? ((s = !0), (i = 1), (a = !0))
              : /[\s.,!?;:()]/.test(r)
              ? ((n += this.config.virama),
                (i = 1),
                ' ' === r &&
                  (e + 2 >= t.length || /[.,!?;:()]/.test(t[e + 2])) &&
                  (i = 2),
                (a = !0))
              : ((n += '-'), (i = 1), (a = !0));
          }
        a ||
          (' ' === t[e]
            ? ((n += ' '), (s = !1))
            : /[.,!?;:()]/.test(t[e])
            ? ((n += t[e]), (s = !1))
            : (n += t[e]),
          (i = 1)),
          (e += i || 1);
      }
      return n;
    }
    processInput(t) {
      if (0 === t.length) return { valid: !1, output: '' };
      return { valid: !0, output: this.transliterateText(t) };
    }
  }
  class e extends t {
    constructor() {
      super(...arguments),
        (this.language = 'hindi'),
        (this.config = {
          vowels: {
            a: { standalone: 'अ', matra: '' },
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
            E: { standalone: 'ऍ', matra: 'ॅ' },
            E_: { standalone: 'ऎ', matra: 'ॆ' },
            e: { standalone: 'ए', matra: 'े' },
            ai: { standalone: 'ऐ', matra: 'ै' },
            O: { standalone: 'ऑ', matra: 'ॉ' },
            O_: { standalone: 'ऒ', matra: 'ॊ' },
            o: { standalone: 'ओ', matra: 'ो' },
            au: { standalone: 'औ', matra: 'ौ' },
            ou: { standalone: 'औ', matra: 'ौ' },
            a_: { standalone: 'ऄ', matra: '' },
          },
          consonants: {
            chh: 'छ',
            Ch: 'छ',
            kh: 'ख',
            gh: 'घ',
            jh: 'झ',
            z: 'झ',
            Th: 'ठ',
            Dh: 'ढ',
            th: 'थ',
            dh: 'ध',
            ph: 'फ',
            f: 'फ',
            bh: 'भ',
            sh: 'श',
            S: 'श',
            Sh: 'ष',
            NG: 'ङ',
            NY: 'ञ',
            ch: 'च',
            C: 'च',
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
            R: 'र',
            l: 'ल',
            L: 'ळ',
            v: 'व',
            w: 'व',
            s: 'स',
            h: 'ह',
            'k*': 'क़',
            q: 'क़',
            K: 'क़',
            'kh*': 'ख़',
            Q: 'ख़',
            Kh: 'ख़',
            'g*': 'ग़',
            G: 'ग़',
            'j*': 'ज़',
            J: 'ज़',
            'D*': 'ड़',
            'Dh*': 'ढ़',
            'n*': 'ऩ',
            'ph*': 'फ़',
            'f*': 'फ़',
            F: 'फ़',
            'y*': 'य़',
            Y: 'य़',
            'r*': 'ऱ',
            'L*': 'ऴ',
          },
          numbers: {
            0: '०',
            1: '१',
            2: '२',
            3: '३',
            4: '४',
            5: '५',
            6: '६',
            7: '७',
            8: '८',
            9: '९',
          },
          specialChars: {
            '---': '‌',
            '--': '‍',
            kSh: 'क्ष',
            x: 'क्ष',
            Gy: 'ज्ञ',
            test: 'टेस्ट',
            TesTa: 'टेस्ट',
            aM: 'अं',
            'a.n': 'अं',
            'a.m': 'अं',
            'ha.n': 'हँ',
            'ha.m': 'हँ',
            anr: 'अनर',
            amy: 'अमय',
            aH: 'अः',
            'a:': 'अः',
            'aM-': 'अँ',
            'M-': 'ँ',
            M: 'ं',
            '.M': 'ं',
            '.n': 'ं',
            '.m': 'ं',
            H: 'ः',
            '.H': 'ः',
            ':': 'ः',
            '*': '़',
            '*-': '*',
            '.a': 'ऽ',
            '||': '॥',
            '|': '।',
            Rs: '₹',
            OM: 'ॐ',
            '+-': '卐',
            '|-': '|',
            ':-': ':',
            '@': '॰',
            '@-': '@',
            hain: 'हैं',
            'hain.': 'हैं।',
          },
          virama: '्',
          anusvara: 'ं',
          chandrabindu: 'ँ',
          visarga: 'ः',
          nukta: '़',
          avagrah: 'ऽ',
          zwj: '‍',
          zwnj: '‌',
          inherentVowel: 'a',
        });
    }
    shouldConvertToAnusvara(t, n) {
      if (
        n.startsWith('-') ||
        n.startsWith('M') ||
        n.startsWith('.n') ||
        n.startsWith('.m')
      )
        return !1;
      if ('' === n || /^[\s.,!?;:()]/.test(n[0])) return !1;
      if ('n' === t) {
        return [
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
        ].some((t) => n.startsWith(t));
      }
      if ('m' === t) {
        return ['p', 'ph', 'f', 'b', 'bh', 'v', 'w', 'ph*'].some((t) =>
          n.startsWith(t),
        );
      }
      return !1;
    }
    transliterateText(t) {
      let n = '',
        e = 0,
        s = !1;
      for (; e < t.length; ) {
        let a = !1,
          i = 0;
        if (!a)
          for (const s of this.getSpecialPatterns())
            if (e + s.length <= t.length) {
              if (t.substring(e, e + s.length) === s) {
                if ('@' === s) {
                  (n += '॰'), (i = s.length), (a = !0);
                  break;
                }
                const t = this.getSpecialChar(s);
                if (t) {
                  (n += t), (i = s.length), (a = !0);
                  break;
                }
              }
            }
        if (!a && ('n' === t[e] || 'm' === t[e]) && e + 1 < t.length) {
          const s = t.substring(e + 1);
          this.shouldConvertToAnusvara(t[e], s) &&
            ((n += this.config.anusvara), (i = 1), (a = !0));
        }
        if (!a) {
          const s = this.getNumber(t[e]);
          s && ((n += s), (i = 1), (a = !0));
        }
        if (!a)
          for (const s of this.getVowelPatterns())
            if (e + s.length <= t.length) {
              const r = t.substring(e, e + s.length),
                h = ['Ri', 'RI', 'Li-', 'LI-'].includes(s);
              if (r === s && h) {
                const t = this.getVowel(s, !0);
                if (t) {
                  (n += t), (i = s.length), (a = !0);
                  break;
                }
              }
            }
        if (!a)
          for (const r of this.getConsonantPatterns())
            if (e + r.length <= t.length) {
              if (t.substring(e, e + r.length) === r) {
                const h = this.getConsonant(r);
                if (h) {
                  let l = h;
                  if ('K' === r) {
                    const n = e,
                      s = t.indexOf(' ', e),
                      a = -1 === s ? t.substring(n) : t.substring(n, s);
                    /[A-Z]/.test(a) && /[a-z]/.test(a) && (l = 'क');
                  }
                  (n += l), (i = r.length);
                  let o = 0,
                    g = !1;
                  if (s) s = !1;
                  else
                    for (const s of this.getVowelPatterns())
                      if (e + i + s.length <= t.length) {
                        if (t.substring(e + i, e + i + s.length) === s) {
                          if (s === this.config.inherentVowel) o = s.length;
                          else {
                            const t = this.getVowel(s, !1);
                            t && ((n += t), (o = s.length));
                          }
                          g = !0;
                          break;
                        }
                      }
                  if (!g && !s) {
                    let s = !1,
                      a = !1,
                      r = !1,
                      h = e + i;
                    h + 3 <= t.length && '---' === t.substring(h, h + 3)
                      ? ((r = !0), (h += 3))
                      : h + 2 <= t.length &&
                        '--' === t.substring(h, h + 2) &&
                        ((a = !0), (h += 2));
                    for (const n of this.getConsonantPatterns())
                      if (h + n.length <= t.length) {
                        if (
                          t.substring(h, h + n.length) === n &&
                          this.isConsonant(n)
                        ) {
                          s = !0;
                          break;
                        }
                      }
                    s &&
                      h < t.length &&
                      !/[\s.,!?;-]/.test(t[h]) &&
                      ((n += this.config.virama),
                      a
                        ? ((n += this.config.zwj), (i += 2))
                        : r && ((n += this.config.zwnj), (i += 3)));
                  }
                  (i += o), (a = !0);
                  break;
                }
              }
            }
        if (!a) {
          const r = 0 === e || /[\s.,!?;:()]/.test(t[e - 1]),
            h = e + 1 >= t.length || /[\s.,!?;:()]/.test(t[e + 1]),
            l = s;
          for (const o of this.getVowelPatterns())
            if (e + o.length <= t.length) {
              if (t.substring(e, e + o.length) === o) {
                const t = ['Ri', 'RI', 'Li-', 'LI-'].includes(o);
                if (r || l || h || t) {
                  const t = this.getVowel(o, !0);
                  if (t) {
                    (n += t), (i = o.length), (s = !1), (a = !0);
                    break;
                  }
                }
              }
            }
        }
        if (!a && '-' === t[e])
          if (e === t.length - 1) (n += this.config.virama), (i = 1), (a = !0);
          else {
            const r = t[e + 1];
            this.isVowel(r) || /[aeiouAEIOU]/.test(r)
              ? ((s = !0), (i = 1), (a = !0))
              : /[\s.,!?;:()]/.test(r)
              ? ((n += this.config.virama),
                (i = 1),
                ' ' === r &&
                  (e + 2 >= t.length || /[.,!?;:()]/.test(t[e + 2])) &&
                  (i = 2),
                (a = !0))
              : ((n += '-'), (i = 1), (a = !0));
          }
        a ||
          (' ' === t[e]
            ? ((n += ' '), (s = !1))
            : /[.,!?;:()]/.test(t[e])
            ? ((n += t[e]), (s = !1))
            : (n += t[e]),
          (i = 1)),
          (e += i || 1);
      }
      return n;
    }
    processInput(t) {
      if (0 === t.length) return { valid: !1, output: '' };
      return { valid: !0, output: this.transliterateText(t) };
    }
  }
  class s extends t {
    constructor() {
      super(...arguments),
        (this.language = 'english'),
        (this.config = {
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
        });
    }
    shouldConvertToAnusvara(t, n) {
      return !1;
    }
    transliterateText(t) {
      return t;
    }
    processInput(t) {
      return { valid: !0, output: t };
    }
  }
  class a {
    static getEngine(t) {
      const n = this.engines.get(t);
      if (!n) throw new Error(`Language '${t}' is not supported.`);
      return n;
    }
    static isSupported(t) {
      return this.engines.has(t);
    }
    static getSupportedLanguages() {
      return Array.from(this.engines.keys());
    }
    static getAllEngines() {
      return new Map(this.engines);
    }
  }
  (a.engines = new Map()),
    a.engines.set('gujarati', new n()),
    a.engines.set('hindi', new e()),
    a.engines.set('english', new s());
  class i {
    constructor() {
      (this.currentLanguage = 'english'),
        (this.currentEngine = a.getEngine(this.currentLanguage));
    }
    supports(t) {
      return a.isSupported(t);
    }
    setLanguage(t) {
      if (!this.supports(t))
        throw new Error(`Language '${t}' is not supported.`);
      (this.currentLanguage = t), (this.currentEngine = a.getEngine(t));
    }
    getLanguage() {
      return this.currentLanguage;
    }
    transliterateText(t) {
      return this.currentEngine.transliterateText(t);
    }
    processInput(t) {
      return this.currentEngine.processInput(t);
    }
    getSupportedLanguages() {
      return a.getSupportedLanguages();
    }
    getEngine(t) {
      return a.getEngine(t);
    }
  }
  const r = new WeakMap();
  class h {
    constructor() {
      (this.currentLanguage = 'gujarati'),
        (this.setLanguage = (t) => {
          this.bhaSha.supports(t)
            ? ((this.currentLanguage = t),
              this.bhaSha.setLanguage(t),
              console.log(`BhaShaIME language changed to: ${t}`))
            : console.error(`BhaShaIME does not support language: ${t}`);
        }),
        (this.handleKeyDown = (t) => {
          if (!this.isEditableElement(t.target)) return;
          const n = t.target,
            { key: e } = t,
            { selectionStart: s, selectionEnd: a } = n;
          if (null === s || null === a) return;
          const i = r.get(n) || '',
            h = this.findRawPos(i, s),
            l = s === a ? h : this.findRawPos(i, a);
          if ('Backspace' === e) {
            if ((t.preventDefault(), h === l && h > 0)) {
              const t = i.slice(0, h - 1) + i.slice(l);
              r.set(n, t), this.handleTransliteration(n, h - 1, h - 1);
            } else if (h < l) {
              const t = i.slice(0, h) + i.slice(l);
              r.set(n, t), this.handleTransliteration(n, h, h);
            }
          } else if ('Delete' === e) {
            if ((t.preventDefault(), h === l && l < i.length)) {
              const t = i.slice(0, h) + i.slice(l + 1);
              r.set(n, t), this.handleTransliteration(n, h, h);
            } else if (h < l) {
              const t = i.slice(0, h) + i.slice(l);
              r.set(n, t), this.handleTransliteration(n, h, h);
            }
          } else if (1 === e.length && !t.ctrlKey && !t.metaKey) {
            t.preventDefault();
            const s = i.slice(0, h) + e + i.slice(l);
            r.set(n, s),
              this.handleTransliteration(n, h + e.length, h + e.length);
          }
        }),
        (this.handlePaste = (t) => {
          var n;
          if (!this.isEditableElement(t.target)) return;
          t.preventDefault();
          const e = t.target,
            s =
              (null === (n = t.clipboardData) || void 0 === n
                ? void 0
                : n.getData('text')) || '',
            { selectionStart: a, selectionEnd: i } = e;
          if (null === a || null === i) return;
          const h = r.get(e) || '',
            l = this.findRawPos(h, a),
            o = a === i ? l : this.findRawPos(h, i),
            g = h.slice(0, l) + s + h.slice(o);
          r.set(e, g),
            this.handleTransliteration(e, l + s.length, l + s.length);
        }),
        (this.handleCut = (t) => {
          var n;
          if (!this.isEditableElement(t.target)) return;
          t.preventDefault();
          const e = t.target,
            { selectionStart: s, selectionEnd: a } = e;
          if (null === s || null === a || s === a) return;
          const i = r.get(e) || '',
            h = this.findRawPos(i, s),
            l = this.findRawPos(i, a),
            o = e.value.substring(s, a);
          null === (n = t.clipboardData) ||
            void 0 === n ||
            n.setData('text/plain', o);
          const g = i.slice(0, h) + i.slice(l);
          r.set(e, g), this.handleTransliteration(e, h, h);
        }),
        (this.handleTransliteration = (t, n = null, e = null) => {
          const s = r.get(t) || '',
            a = this.bhaSha.transliterateText(s);
          if (((t.value = a), null !== n)) {
            const a = s.slice(0, n),
              i = this.bhaSha.transliterateText(a).length,
              r =
                null !== e && e !== n
                  ? this.bhaSha.transliterateText(s.slice(0, e)).length
                  : i;
            t.setSelectionRange(i, r);
          }
        }),
        (this.bhaSha = new i()),
        this.bhaSha.setLanguage(this.currentLanguage),
        this.attachEventListeners(),
        console.log('BhaShaIME Injector has been initialized.');
    }
    findRawPos(t, n) {
      if (0 === n) return 0;
      let e = 0;
      for (let s = 1; s <= t.length; s++) {
        const a = t.slice(0, s);
        if (!(this.bhaSha.transliterateText(a).length <= n)) break;
        e = s;
      }
      return e;
    }
    attachEventListeners() {
      document.addEventListener('keydown', this.handleKeyDown, !0),
        document.addEventListener('paste', this.handlePaste, !0),
        document.addEventListener('cut', this.handleCut, !0);
    }
    isEditableElement(t) {
      return t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement;
    }
  }
  'undefined' != typeof window && (window.bhashaIME = new h());
})();
