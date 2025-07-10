import {
  BhaSha,
  EngineFactory,
  GujaratiEngine,
  HindiEngine,
  EnglishEngine,
} from '../src';

describe('Engine Architecture', () => {
  let bhasha: BhaSha;

  beforeEach(() => {
    bhasha = new BhaSha();
  });

  describe('Engine Factory', () => {
    test('should return correct engine for each language', () => {
      expect(EngineFactory.getEngine('gujarati')).toBeInstanceOf(
        GujaratiEngine,
      );
      expect(EngineFactory.getEngine('hindi')).toBeInstanceOf(HindiEngine);
      expect(EngineFactory.getEngine('english')).toBeInstanceOf(EnglishEngine);
    });

    test('should throw error for unsupported language', () => {
      expect(() => EngineFactory.getEngine('unsupported' as any)).toThrow();
    });

    test('should check if language is supported', () => {
      expect(EngineFactory.isSupported('gujarati')).toBe(true);
      expect(EngineFactory.isSupported('hindi')).toBe(true);
      expect(EngineFactory.isSupported('english')).toBe(true);
      expect(EngineFactory.isSupported('unsupported')).toBe(false);
    });

    test('should return all supported languages', () => {
      const languages = EngineFactory.getSupportedLanguages();
      expect(languages).toContain('gujarati');
      expect(languages).toContain('hindi');
      expect(languages).toContain('english');
      expect(languages).toHaveLength(3);
    });
  });

  describe('Language-Specific Engines', () => {
    test('Gujarati engine should handle Gujarati transliteration', () => {
      const gujaratiEngine = new GujaratiEngine();
      expect(gujaratiEngine.language).toBe('gujarati');
      expect(gujaratiEngine.transliterateText('namaste')).toBe('નમસ્તે');
      expect(gujaratiEngine.transliterateText('kem chho')).toBe('કેમ છો');
    });

    test('Hindi engine should handle Hindi transliteration', () => {
      const hindiEngine = new HindiEngine();
      expect(hindiEngine.language).toBe('hindi');
      expect(hindiEngine.transliterateText('namaste')).toBe('नमस्ते');
      expect(hindiEngine.transliterateText('kaise ho')).toBe('कैसे हो');
    });

    test('English engine should pass through text unchanged', () => {
      const englishEngine = new EnglishEngine();
      expect(englishEngine.language).toBe('english');
      expect(englishEngine.transliterateText('hello world')).toBe(
        'hello world',
      );
      expect(englishEngine.transliterateText('123')).toBe('123');
    });
  });

  describe('Main BhaSha Class', () => {
    test('should delegate to correct engine based on language', () => {
      // Test Gujarati
      bhasha.setLanguage('gujarati');
      expect(bhasha.getLanguage()).toBe('gujarati');
      expect(bhasha.transliterateText('namaste')).toBe('નમસ્તે');

      // Test Hindi
      bhasha.setLanguage('hindi');
      expect(bhasha.getLanguage()).toBe('hindi');
      expect(bhasha.transliterateText('namaste')).toBe('नमस्ते');

      // Test English
      bhasha.setLanguage('english');
      expect(bhasha.getLanguage()).toBe('english');
      expect(bhasha.transliterateText('hello')).toBe('hello');
    });

    test('should support language switching', () => {
      const text = 'namaste';

      bhasha.setLanguage('gujarati');
      expect(bhasha.transliterateText(text)).toBe('નમસ્તે');

      bhasha.setLanguage('hindi');
      expect(bhasha.transliterateText(text)).toBe('नमस्ते');

      bhasha.setLanguage('english');
      expect(bhasha.transliterateText(text)).toBe('namaste');
    });

    test('should check language support', () => {
      expect(bhasha.supports('gujarati')).toBe(true);
      expect(bhasha.supports('hindi')).toBe(true);
      expect(bhasha.supports('english')).toBe(true);
      expect(bhasha.supports('unsupported')).toBe(false);
    });

    test('should get supported languages', () => {
      const languages = bhasha.getSupportedLanguages();
      expect(languages).toContain('gujarati');
      expect(languages).toContain('hindi');
      expect(languages).toContain('english');
    });

    test('should get specific engine', () => {
      expect(bhasha.getEngine('gujarati')).toBeInstanceOf(GujaratiEngine);
      expect(bhasha.getEngine('hindi')).toBeInstanceOf(HindiEngine);
      expect(bhasha.getEngine('english')).toBeInstanceOf(EnglishEngine);
    });
  });

  describe('Language-Specific Features', () => {
    test('Gujarati should handle special characters correctly', () => {
      bhasha.setLanguage('gujarati');
      expect(bhasha.transliterateText('x')).toBe('ક્ષ');
      expect(bhasha.transliterateText('Gy')).toBe('જ્ઞ');
      expect(bhasha.transliterateText('OM')).toBe('ૐ');
    });

    test('Hindi should handle nukta consonants correctly', () => {
      bhasha.setLanguage('hindi');
      expect(bhasha.transliterateText('q')).toBe('क़');
      expect(bhasha.transliterateText('Q')).toBe('ख़');
      expect(bhasha.transliterateText('F')).toBe('फ़');
    });

    test('Hindi should handle special patterns correctly', () => {
      bhasha.setLanguage('hindi');
      expect(bhasha.transliterateText('x')).toBe('क्ष');
      expect(bhasha.transliterateText('Gy')).toBe('ज्ञ');
      expect(bhasha.transliterateText('OM')).toBe('ॐ');
    });
  });
});
