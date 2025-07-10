import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useEffect,
} from 'react';
import { useBhaShaIME, UseBhaShaIMEOptions } from './useBhaShaIME';

export interface BhaShaDirectInputProps extends UseBhaShaIMEOptions {
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  readOnly?: boolean;
  rows?: number;
  cols?: number;
  multiline?: boolean;
  onInputChange?: (value: string) => void;
  onTransliterationChange?: (input: string, output: string) => void;
  onKeyDown?: (
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onKeyUp?: (
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onFocus?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onBlur?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

export interface BhaShaDirectInputRef {
  focus: () => void;
  blur: () => void;
  select: () => void;
  setInput: (value: string) => void;
  clear: () => void;
  getInput: () => string;
  getOutput: () => string;
}

export const BhaShaDirectInput = forwardRef<
  BhaShaDirectInputRef,
  BhaShaDirectInputProps
>(
  (
    {
      placeholder = 'Type in English...',
      className = '',
      style,
      disabled = false,
      readOnly = false,
      rows = 4,
      cols,
      multiline = false,
      onInputChange,
      onTransliterationChange,
      onKeyDown,
      onKeyUp,
      onFocus,
      onBlur,
      ...hookOptions
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [isComposing, setIsComposing] = useState(false);
    const [displayValue, setDisplayValue] = useState('');
    const [rawInput, setRawInput] = useState('');

    const {
      output,
      setInput,
      clear: clearHook,
      bhaSha,
    } = useBhaShaIME({
      ...hookOptions,
      autoTransliterate: false, // We'll handle transliteration manually
    });

    // Update display value when output changes
    useEffect(() => {
      if (!isComposing && output) {
        setDisplayValue(output);
      }
    }, [output, isComposing]);

    // Handle transliteration manually
    useEffect(() => {
      if (rawInput && !isComposing) {
        const transliterated = bhaSha.transliterateText(rawInput);
        setDisplayValue(transliterated);
        onTransliterationChange?.(rawInput, transliterated);
      }
    }, [rawInput, isComposing, bhaSha, onTransliterationChange]);

    useImperativeHandle(ref, () => ({
      focus: () =>
        multiline ? textareaRef.current?.focus() : inputRef.current?.focus(),
      blur: () =>
        multiline ? textareaRef.current?.blur() : inputRef.current?.blur(),
      select: () =>
        multiline ? textareaRef.current?.select() : inputRef.current?.select(),
      setInput: (value: string) => {
        setRawInput(value);
        setDisplayValue(value);
        setInput(value);
      },
      clear: () => {
        clearHook();
        setRawInput('');
        setDisplayValue('');
      },
      getInput: () => rawInput,
      getOutput: () => displayValue,
    }));

    const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      const value = e.target.value;
      setRawInput(value);
      setInput(value);
      onInputChange?.(value);
    };

    const handleCompositionStart = () => {
      setIsComposing(true);
    };

    const handleCompositionEnd = () => {
      setIsComposing(false);
      // Trigger transliteration after composition ends
      if (rawInput) {
        const transliterated = bhaSha.transliterateText(rawInput);
        setDisplayValue(transliterated);
        onTransliterationChange?.(rawInput, transliterated);
      }
    };

    const handleKeyDown = (
      e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      // Handle backspace and delete to remove characters properly
      if (e.key === 'Backspace' || e.key === 'Delete') {
        const newRawInput = rawInput.slice(0, -1);
        setRawInput(newRawInput);
        setInput(newRawInput);
        onInputChange?.(newRawInput);
      }
      onKeyDown?.(e);
    };

    const commonProps = {
      value: displayValue,
      onChange: handleInputChange,
      onCompositionStart: handleCompositionStart,
      onCompositionEnd: handleCompositionEnd,
      onKeyDown: handleKeyDown,
      onKeyUp,
      onFocus,
      onBlur,
      placeholder,
      className,
      style,
      disabled,
      readOnly,
    };

    return multiline ? (
      <textarea {...commonProps} ref={textareaRef} rows={rows} cols={cols} />
    ) : (
      <input {...commonProps} ref={inputRef} type="text" />
    );
  },
);

BhaShaDirectInput.displayName = 'BhaShaDirectInput';
