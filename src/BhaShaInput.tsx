import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { useBhaShaIME, UseBhaShaIMEOptions } from './useBhaShaIME';

export interface BhaShaInputProps extends UseBhaShaIMEOptions {
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  readOnly?: boolean;
  showOutput?: boolean;
  outputClassName?: string;
  outputStyle?: React.CSSProperties;
  onInputChange?: (value: string) => void;
  onOutputChange?: (value: string) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export interface BhaShaInputRef {
  focus: () => void;
  blur: () => void;
  select: () => void;
  setInput: (value: string) => void;
  clear: () => void;
  getInput: () => string;
  getOutput: () => string;
}

export const BhaShaInput = forwardRef<BhaShaInputRef, BhaShaInputProps>(
  (
    {
      placeholder = 'Type in English...',
      className = '',
      style,
      disabled = false,
      readOnly = false,
      showOutput = true,
      outputClassName = '',
      outputStyle,
      onInputChange,
      onOutputChange,
      onKeyDown,
      onKeyUp,
      onFocus,
      onBlur,
      ...hookOptions
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const {
      input,
      output,
      setInput,
      clear: clearHook,
    } = useBhaShaIME({
      ...hookOptions,
      onTransliterationChange: (input, output) => {
        onInputChange?.(input);
        onOutputChange?.(output);
      },
    });

    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus(),
      blur: () => inputRef.current?.blur(),
      select: () => inputRef.current?.select(),
      setInput,
      clear: clearHook,
      getInput: () => input,
      getOutput: () => output,
    }));

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setInput(value);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder={placeholder}
          className={className}
          style={style}
          disabled={disabled}
          readOnly={readOnly}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {showOutput && output && (
          <div
            className={outputClassName}
            style={{
              padding: '8px',
              border: '1px solid #e0e0e0',
              borderRadius: '4px',
              backgroundColor: '#f9f9f9',
              minHeight: '20px',
              ...outputStyle,
            }}
          >
            {output}
          </div>
        )}
      </div>
    );
  },
);

BhaShaInput.displayName = 'BhaShaInput';
