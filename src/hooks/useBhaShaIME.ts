import { useState, useCallback, useEffect } from 'react';
import { BhaSha } from '../native/bhasha-engine';
import { SupportedLanguage } from '../types';

export interface UseBhaShaIMEOptions {
  language?: SupportedLanguage;
  autoTransliterate?: boolean;
  onTransliterationChange?: (input: string, output: string) => void;
}

export interface UseBhaShaIMEReturn {
  input: string;
  output: string;
  language: SupportedLanguage;
  setInput: (text: string) => void;
  setLanguage: (lang: SupportedLanguage) => void;
  transliterate: (text: string) => string;
  clear: () => void;
  bhaSha: BhaSha;
}

export function useBhaShaIME(
  options: UseBhaShaIMEOptions = {},
): UseBhaShaIMEReturn {
  const {
    language = 'gujarati',
    autoTransliterate = true,
    onTransliterationChange,
  } = options;

  const [bhaSha] = useState(() => new BhaSha());
  const [input, setInputState] = useState('');
  const [output, setOutput] = useState('');
  const [currentLanguage, setCurrentLanguage] = useState(language);

  // Initialize language
  useEffect(() => {
    bhaSha.setLanguage(currentLanguage);
  }, [bhaSha, currentLanguage]);

  // Auto-transliterate when input changes
  useEffect(() => {
    if (autoTransliterate && input !== '') {
      const transliterated = bhaSha.transliterateText(input);
      setOutput(transliterated);
      onTransliterationChange?.(input, transliterated);
    } else if (input === '') {
      setOutput('');
      onTransliterationChange?.('', '');
    }
  }, [input, autoTransliterate, bhaSha, onTransliterationChange]);

  const setInput = useCallback((text: string) => {
    setInputState(text);
  }, []);

  const setLanguage = useCallback(
    (lang: SupportedLanguage) => {
      setCurrentLanguage(lang);
      bhaSha.setLanguage(lang);
    },
    [bhaSha],
  );

  const transliterate = useCallback(
    (text: string) => {
      return bhaSha.transliterateText(text);
    },
    [bhaSha],
  );

  const clear = useCallback(() => {
    setInputState('');
    setOutput('');
  }, []);

  return {
    input,
    output,
    language: currentLanguage,
    setInput,
    setLanguage,
    transliterate,
    clear,
    bhaSha,
  };
}
