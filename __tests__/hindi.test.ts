import { BhaSha } from '../src';

describe('Hindi Transliteration Engine', () => {
  let bhaSha: BhaSha;

  beforeEach(() => {
    bhaSha = new BhaSha();
    bhaSha.setLanguage('hindi');
  });

  describe('Basic Vowels', () => {
    test('should transliterate basic vowels', () => {
      expect(bhaSha.transliterateText('a')).toBe('अ');
      expect(bhaSha.transliterateText('aa')).toBe('आ');
      expect(bhaSha.transliterateText('A')).toBe('आ'); // Alternative for aa
      expect(bhaSha.transliterateText('i')).toBe('इ');
      expect(bhaSha.transliterateText('ee')).toBe('ई');
      expect(bhaSha.transliterateText('I')).toBe('ई'); // Alternative for ee
      expect(bhaSha.transliterateText('u')).toBe('उ');
      expect(bhaSha.transliterateText('oo')).toBe('ऊ');
      expect(bhaSha.transliterateText('U')).toBe('ऊ'); // Alternative for oo
      expect(bhaSha.transliterateText('e')).toBe('ए');
      expect(bhaSha.transliterateText('o')).toBe('ओ');
      expect(bhaSha.transliterateText('ai')).toBe('ऐ');
      expect(bhaSha.transliterateText('au')).toBe('औ');
      expect(bhaSha.transliterateText('ou')).toBe('औ'); // Alternative for au
    });

    test('should transliterate vocalic consonants', () => {
      expect(bhaSha.transliterateText('Ri')).toBe('ऋ');
      expect(bhaSha.transliterateText('RI')).toBe('ॠ');
      expect(bhaSha.transliterateText('Li-')).toBe('ऌ');
      expect(bhaSha.transliterateText('LI-')).toBe('ॡ');
    });

    test('should transliterate chandra vowels', () => {
      expect(bhaSha.transliterateText('E')).toBe('ऍ');
      expect(bhaSha.transliterateText('O')).toBe('ऑ');
    });

    test('should transliterate short vowels', () => {
      expect(bhaSha.transliterateText('a_')).toBe('ऄ');
      expect(bhaSha.transliterateText('E_')).toBe('ऎ');
      expect(bhaSha.transliterateText('O_')).toBe('ऒ');
    });

    test('should transliterate anusvara with vowels', () => {
      expect(bhaSha.transliterateText('aM')).toBe('अं');
      expect(bhaSha.transliterateText('a.n')).toBe('अं');
      expect(bhaSha.transliterateText('a.m')).toBe('अं');
    });

    test('should transliterate chandrabindu with vowels', () => {
      expect(bhaSha.transliterateText('aM-')).toBe('अँ');
      expect(bhaSha.transliterateText('a.n')).toBe('अं');
      expect(bhaSha.transliterateText('a.m')).toBe('अं');
    });

    test('should transliterate visarga with vowels', () => {
      expect(bhaSha.transliterateText('aH')).toBe('अः');
      expect(bhaSha.transliterateText('a:')).toBe('अः');
    });
  });

  describe('Basic Consonants', () => {
    test('should transliterate guttural consonants', () => {
      expect(bhaSha.transliterateText('k')).toBe('क');
      expect(bhaSha.transliterateText('kh')).toBe('ख');
      expect(bhaSha.transliterateText('g')).toBe('ग');
      expect(bhaSha.transliterateText('gh')).toBe('घ');
      expect(bhaSha.transliterateText('NG')).toBe('ङ');
    });

    test('should transliterate palatal consonants', () => {
      expect(bhaSha.transliterateText('ch')).toBe('च');
      expect(bhaSha.transliterateText('C')).toBe('च'); // Alternative
      expect(bhaSha.transliterateText('chh')).toBe('छ');
      expect(bhaSha.transliterateText('Ch')).toBe('छ'); // Alternative
      expect(bhaSha.transliterateText('j')).toBe('ज');
      expect(bhaSha.transliterateText('jh')).toBe('झ');
      expect(bhaSha.transliterateText('z')).toBe('झ'); // Alternative for jh
      expect(bhaSha.transliterateText('NY')).toBe('ञ');
    });

    test('should transliterate retroflex consonants', () => {
      expect(bhaSha.transliterateText('T')).toBe('ट');
      expect(bhaSha.transliterateText('Th')).toBe('ठ');
      expect(bhaSha.transliterateText('D')).toBe('ड');
      expect(bhaSha.transliterateText('Dh')).toBe('ढ');
      expect(bhaSha.transliterateText('N')).toBe('ण');
    });

    test('should transliterate dental consonants', () => {
      expect(bhaSha.transliterateText('t')).toBe('त');
      expect(bhaSha.transliterateText('th')).toBe('थ');
      expect(bhaSha.transliterateText('d')).toBe('द');
      expect(bhaSha.transliterateText('dh')).toBe('ध');
      expect(bhaSha.transliterateText('n')).toBe('न');
    });

    test('should transliterate labial consonants', () => {
      expect(bhaSha.transliterateText('p')).toBe('प');
      expect(bhaSha.transliterateText('ph')).toBe('फ');
      expect(bhaSha.transliterateText('f')).toBe('फ'); // Alternative for ph
      expect(bhaSha.transliterateText('b')).toBe('ब');
      expect(bhaSha.transliterateText('bh')).toBe('भ');
      expect(bhaSha.transliterateText('m')).toBe('म');
    });

    test('should transliterate semi-vowels and liquids', () => {
      expect(bhaSha.transliterateText('y')).toBe('य');
      expect(bhaSha.transliterateText('r')).toBe('र');
      expect(bhaSha.transliterateText('R')).toBe('र'); // Alternative for r
      expect(bhaSha.transliterateText('l')).toBe('ल');
      expect(bhaSha.transliterateText('v')).toBe('व');
      expect(bhaSha.transliterateText('w')).toBe('व'); // Alternative for v
    });

    test('should transliterate sibilants and aspirates', () => {
      expect(bhaSha.transliterateText('sh')).toBe('श');
      expect(bhaSha.transliterateText('S')).toBe('श'); // Alternative for sh
      expect(bhaSha.transliterateText('Sh')).toBe('ष');
      expect(bhaSha.transliterateText('s')).toBe('स');
      expect(bhaSha.transliterateText('h')).toBe('ह');
    });

    test('should transliterate retroflex L', () => {
      expect(bhaSha.transliterateText('L')).toBe('ळ');
    });
  });

  describe('Additional Consonants (Nukta)', () => {
    test('should transliterate nukta consonants', () => {
      expect(bhaSha.transliterateText('k*')).toBe('क़');
      expect(bhaSha.transliterateText('q')).toBe('क़'); // Alternative
      expect(bhaSha.transliterateText('K')).toBe('क़'); // Alternative
      expect(bhaSha.transliterateText('kh*')).toBe('ख़');
      expect(bhaSha.transliterateText('Q')).toBe('ख़'); // Alternative
      expect(bhaSha.transliterateText('Kh')).toBe('ख़'); // Alternative
      expect(bhaSha.transliterateText('g*')).toBe('ग़');
      expect(bhaSha.transliterateText('G')).toBe('ग़'); // Alternative
      expect(bhaSha.transliterateText('j*')).toBe('ज़');
      expect(bhaSha.transliterateText('J')).toBe('ज़'); // Alternative
      expect(bhaSha.transliterateText('D*')).toBe('ड़');
      expect(bhaSha.transliterateText('Dh*')).toBe('ढ़');
      expect(bhaSha.transliterateText('n*')).toBe('ऩ');
      expect(bhaSha.transliterateText('ph*')).toBe('फ़');
      expect(bhaSha.transliterateText('f*')).toBe('फ़'); // Alternative
      expect(bhaSha.transliterateText('F')).toBe('फ़'); // Alternative
      expect(bhaSha.transliterateText('y*')).toBe('य़');
      expect(bhaSha.transliterateText('Y')).toBe('य़'); // Alternative
      expect(bhaSha.transliterateText('r*')).toBe('ऱ');
      expect(bhaSha.transliterateText('L*')).toBe('ऴ');
    });
  });

  describe('Consonant + Vowel Combinations (Matras)', () => {
    test('should transliterate consonant with basic vowel matras', () => {
      expect(bhaSha.transliterateText('ka')).toBe('क'); // inherent vowel
      expect(bhaSha.transliterateText('kaa')).toBe('का');
      expect(bhaSha.transliterateText('kA')).toBe('का'); // Alternative
      expect(bhaSha.transliterateText('ki')).toBe('कि');
      expect(bhaSha.transliterateText('kee')).toBe('की');
      expect(bhaSha.transliterateText('kI')).toBe('की'); // Alternative
      expect(bhaSha.transliterateText('ku')).toBe('कु');
      expect(bhaSha.transliterateText('koo')).toBe('कू');
      expect(bhaSha.transliterateText('kU')).toBe('कू'); // Alternative
    });

    test('should transliterate consonant with special vowel matras', () => {
      expect(bhaSha.transliterateText('ke')).toBe('के');
      expect(bhaSha.transliterateText('kai')).toBe('कै');
      expect(bhaSha.transliterateText('ko')).toBe('को');
      expect(bhaSha.transliterateText('kau')).toBe('कौ');
      expect(bhaSha.transliterateText('kou')).toBe('कौ'); // Alternative
    });

    test('should transliterate consonant with vocalic matras', () => {
      expect(bhaSha.transliterateText('kRi')).toBe('कृ');
      expect(bhaSha.transliterateText('kRI')).toBe('कॄ');
      expect(bhaSha.transliterateText('kLi-')).toBe('कॢ');
      expect(bhaSha.transliterateText('kLI-')).toBe('कॣ');
    });

    test('should transliterate consonant with chandra matras', () => {
      expect(bhaSha.transliterateText('kE')).toBe('कॅ');
      expect(bhaSha.transliterateText('kO')).toBe('कॉ');
    });
  });

  describe('Special Characters', () => {
    test('should transliterate special combinations', () => {
      expect(bhaSha.transliterateText('x')).toBe('क्ष');
      expect(bhaSha.transliterateText('kSh')).toBe('क्ष');
      expect(bhaSha.transliterateText('Gy')).toBe('ज्ञ');
    });

    test('should transliterate anusvara and visarga', () => {
      expect(bhaSha.transliterateText('M')).toBe('ं');
      expect(bhaSha.transliterateText('.n')).toBe('ं');
      expect(bhaSha.transliterateText('.m')).toBe('ं');
      expect(bhaSha.transliterateText('H')).toBe('ः');
      expect(bhaSha.transliterateText(':')).toBe('ः');
    });

    test('should transliterate chandrabindu', () => {
      expect(bhaSha.transliterateText('M-')).toBe('ँ');
      expect(bhaSha.transliterateText('.n')).toBe('ं');
      expect(bhaSha.transliterateText('.m')).toBe('ं');
    });

    test('should transliterate punctuation', () => {
      expect(bhaSha.transliterateText('|')).toBe('।');
      expect(bhaSha.transliterateText('||')).toBe('॥');
      expect(bhaSha.transliterateText('OM')).toBe('ॐ');
      expect(bhaSha.transliterateText('Rs')).toBe('₹');
    });

    test('should transliterate special symbols', () => {
      expect(bhaSha.transliterateText('.a')).toBe('ऽ');
      expect(bhaSha.transliterateText('@')).toBe('॰');
      expect(bhaSha.transliterateText('+-')).toBe('卐');
    });
  });

  describe('Halant/Virama', () => {
    test('should add virama with trailing hyphen', () => {
      expect(bhaSha.transliterateText('k-')).toBe('क्');
      expect(bhaSha.transliterateText('t-')).toBe('त्');
      expect(bhaSha.transliterateText('p-')).toBe('प्');
    });

    test('should handle dead consonants with space after hyphen', () => {
      expect(bhaSha.transliterateText('k- ')).toBe('क्');
      expect(bhaSha.transliterateText('k- test')).toBe('क् टेस्ट');
      expect(bhaSha.transliterateText('k-.')).toBe('क्.');
    });
  });

  describe('Automatic Anusvara Conversion (Panchamakshar)', () => {
    test('should convert n to anusvara before gutturals', () => {
      expect(bhaSha.transliterateText('ank')).toBe('अंक');
      expect(bhaSha.transliterateText('ankh')).toBe('अंख');
      expect(bhaSha.transliterateText('ang')).toBe('अंग');
      expect(bhaSha.transliterateText('angh')).toBe('अंघ');
    });

    test('should convert n to anusvara before palatals', () => {
      expect(bhaSha.transliterateText('anj')).toBe('अंज');
      expect(bhaSha.transliterateText('anch')).toBe('अंच');
      expect(bhaSha.transliterateText('anchh')).toBe('अंछ');
      expect(bhaSha.transliterateText('anjh')).toBe('अंझ');
    });

    test('should convert n to anusvara before retroflexes', () => {
      expect(bhaSha.transliterateText('anT')).toBe('अंट');
      expect(bhaSha.transliterateText('anTh')).toBe('अंठ');
      expect(bhaSha.transliterateText('anD')).toBe('अंड');
      expect(bhaSha.transliterateText('anDh')).toBe('अंढ');
    });

    test('should convert n to anusvara before dentals', () => {
      expect(bhaSha.transliterateText('ant')).toBe('अंत');
      expect(bhaSha.transliterateText('and')).toBe('अंद');
      expect(bhaSha.transliterateText('anth')).toBe('अंथ');
      expect(bhaSha.transliterateText('andh')).toBe('अंध');
    });

    test('should convert m to anusvara before labials', () => {
      expect(bhaSha.transliterateText('amp')).toBe('अंप');
      expect(bhaSha.transliterateText('amb')).toBe('अंब');
      expect(bhaSha.transliterateText('amph')).toBe('अंफ');
      expect(bhaSha.transliterateText('ambh')).toBe('अंभ');
      expect(bhaSha.transliterateText('amv')).toBe('अंव');
    });

    test('should convert n to anusvara before sibilants', () => {
      expect(bhaSha.transliterateText('ansh')).toBe('अंश');
      expect(bhaSha.transliterateText('anSh')).toBe('अंष');
      expect(bhaSha.transliterateText('ans')).toBe('अंस');
    });

    test('should convert n to anusvara before nukta consonants', () => {
      expect(bhaSha.transliterateText('ank*')).toBe('अंक़');
      expect(bhaSha.transliterateText('ankh*')).toBe('अंख़');
      expect(bhaSha.transliterateText('ang*')).toBe('अंग़');
      expect(bhaSha.transliterateText('anj*')).toBe('अंज़');
      expect(bhaSha.transliterateText('anD*')).toBe('अंड़');
      expect(bhaSha.transliterateText('anDh*')).toBe('अंढ़');
    });

    test('should convert m to anusvara before nukta ph', () => {
      expect(bhaSha.transliterateText('amph*')).toBe('अंफ़');
    });

    test('should preserve n/m when followed by dash', () => {
      expect(bhaSha.transliterateText('an-')).toBe('अन्');
      expect(bhaSha.transliterateText('am-')).toBe('अम्');
    });

    test('should preserve n/m for other characters', () => {
      expect(bhaSha.transliterateText('anr')).toBe('अनर');
      expect(bhaSha.transliterateText('amy')).toBe('अमय');
    });
  });

  describe('ZWJ/ZWNJ Support', () => {
    test('should handle ZWJ (Zero Width Joiner)', () => {
      expect(bhaSha.transliterateText('prash--n')).toBe('प्रश्‍न');
      expect(bhaSha.transliterateText('an--n')).toBe('अन्‍न');
    });

    test('should handle ZWNJ (Zero Width Non-Joiner)', () => {
      expect(bhaSha.transliterateText('vid---yaa')).toBe('विद्‌या');
      expect(bhaSha.transliterateText('ud---ghoSh')).toBe('उद्‌घोष');
    });
  });

  describe('Vowel Separation with Hyphens', () => {
    test('should separate vowels with hyphen', () => {
      expect(bhaSha.transliterateText('ai')).toBe('ऐ');
      expect(bhaSha.transliterateText('a-i')).toBe('अइ');
      expect(bhaSha.transliterateText('au')).toBe('औ');
      expect(bhaSha.transliterateText('a-u')).toBe('अउ');
    });
  });

  describe('Numbers', () => {
    test('should transliterate individual numbers', () => {
      expect(bhaSha.transliterateText('0')).toBe('०');
      expect(bhaSha.transliterateText('1')).toBe('१');
      expect(bhaSha.transliterateText('2')).toBe('२');
      expect(bhaSha.transliterateText('3')).toBe('३');
      expect(bhaSha.transliterateText('4')).toBe('४');
      expect(bhaSha.transliterateText('5')).toBe('५');
      expect(bhaSha.transliterateText('6')).toBe('६');
      expect(bhaSha.transliterateText('7')).toBe('७');
      expect(bhaSha.transliterateText('8')).toBe('८');
      expect(bhaSha.transliterateText('9')).toBe('९');
    });

    test('should transliterate number sequences', () => {
      expect(bhaSha.transliterateText('0123456789')).toBe('०१२३४५६७८९');
    });
  });

  describe('Complex Words - Real Examples', () => {
    test('should transliterate common greetings', () => {
      expect(bhaSha.transliterateText('namaste')).toBe('नमस्ते');
      expect(bhaSha.transliterateText('suprabhaat')).toBe('सुप्रभात');
    });

    test('should transliterate philosophical terms', () => {
      expect(bhaSha.transliterateText('karm')).toBe('कर्म');
      expect(bhaSha.transliterateText('shree')).toBe('श्री');
      expect(bhaSha.transliterateText('vidyaa')).toBe('विद्या');
      expect(bhaSha.transliterateText('padm')).toBe('पद्म');
      expect(bhaSha.transliterateText('vidvaan')).toBe('विद्वान');
    });

    test('should transliterate question words', () => {
      expect(bhaSha.transliterateText('prashn')).toBe('प्रश्न');
    });

    test('should transliterate words with anusvara', () => {
      expect(bhaSha.transliterateText('saaM')).toBe('सां');
      expect(bhaSha.transliterateText('aMg')).toBe('अंग');
      expect(bhaSha.transliterateText('saanj')).toBe('सांज');
      expect(bhaSha.transliterateText('shaant')).toBe('शांत');
      expect(bhaSha.transliterateText('amb')).toBe('अंब');
    });

    test('should transliterate words with conjunct consonants', () => {
      expect(bhaSha.transliterateText('aambo')).toBe('आंबो');
      expect(bhaSha.transliterateText('prashn')).toBe('प्रश्न');
      expect(bhaSha.transliterateText('vidyaa')).toBe('विद्या');
      expect(bhaSha.transliterateText('vid--yaa')).toBe('विद्‍या'); // With ZWJ
    });

    test('should handle ZWJ/ZWNJ in real words', () => {
      expect(bhaSha.transliterateText('an--n')).toBe('अन्‍न'); // ZWJ
      expect(bhaSha.transliterateText('ud--ghoSh')).toBe('उद्‍घोष'); // ZWJ
    });

    test('should transliterate compound words', () => {
      expect(bhaSha.transliterateText('hindI')).toBe('हिंदी');
      expect(bhaSha.transliterateText('hindi')).toBe('हिंदि');
    });

    test('should handle two-word phrases', () => {
      expect(bhaSha.transliterateText('kaise ho')).toBe('कैसे हो');
    });

    test('should transliterate time and nature words', () => {
      expect(bhaSha.transliterateText('shaanti')).toBe('शांति');
      expect(bhaSha.transliterateText('prashnu')).toBe('प्रश्नु');
    });

    test('should transliterate complex sentences', () => {
      expect(bhaSha.transliterateText('ham safar kar rahe hain.')).toBe(
        'हम सफर कर रहे हैं।',
      );
    });

    test('should handle special examples from rules', () => {
      expect(bhaSha.transliterateText('paig*aam')).toBe('पैग़ाम');
      expect(bhaSha.transliterateText('auchity')).toBe('औचित्य');
      expect(bhaSha.transliterateText('a-uchity')).toBe('अउचित्य');
      expect(bhaSha.transliterateText('u@pra@')).toBe('उ॰प्र॰');
      expect(bhaSha.transliterateText('ha.ns')).toBe('हँस');
      expect(bhaSha.transliterateText('hans')).toBe('हंस');
    });
  });

  describe('Symbol Handling', () => {
    test('should preserve regular symbols', () => {
      expect(bhaSha.transliterateText('[]{}()<>-+/=;.,\'"?!%\\_&$#~^')).toBe(
        '[]{}()<>-+/=;.,\'"?!%\\_&$#~^',
      );
    });

    test('should handle special symbols with dash', () => {
      expect(bhaSha.transliterateText('@-')).toBe('@');
      expect(bhaSha.transliterateText('*-')).toBe('*');
      expect(bhaSha.transliterateText(':-')).toBe(':');
      expect(bhaSha.transliterateText('|-')).toBe('|');
    });
  });

  describe('Edge Cases', () => {
    test('should handle empty string', () => {
      expect(bhaSha.transliterateText('')).toBe('');
    });

    test('should handle single characters', () => {
      expect(bhaSha.transliterateText('k')).toBe('क');
      expect(bhaSha.transliterateText('a')).toBe('अ');
    });

    test('should preserve spaces and punctuation', () => {
      expect(bhaSha.transliterateText('k k')).toBe('क क');
      expect(bhaSha.transliterateText('k, k')).toBe('क, क');
      expect(bhaSha.transliterateText('k. k')).toBe('क. क');
    });

    test('should handle mixed case', () => {
      expect(bhaSha.transliterateText('KaRaNa')).toBe('करण');
    });

    test('should handle unknown characters gracefully', () => {
      expect(bhaSha.transliterateText('k@k')).toBe('क॰क');
    });
  });
});
