import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { useBhaShaIME, UseBhaShaIMEOptions } from './useBhaShaIME';

export interface BhaShaTextareaProps extends UseBhaShaIMEOptions {
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  readOnly?: boolean;
  showOutput?: boolean;
  outputClassName?: string;
  outputStyle?: React.CSSProperties;
  rows?: number;
  cols?: number;
  onInputChange?: (value: string) => void;
  onOutputChange?: (value: string) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
}

export interface BhaShaTextareaRef {
  focus: () => void;
  blur: () => void;
  select: () => void;
  setInput: (value: string) => void;
  clear: () => void;
  getInput: () => string;
  getOutput: () => string;
}

export const BhaShaTextarea = forwardRef<
  BhaShaTextareaRef,
  BhaShaTextareaProps
>(
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
      rows = 4,
      cols,
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
    const textareaRef = useRef<HTMLTextAreaElement>(null);
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
      focus: () => textareaRef.current?.focus(),
      blur: () => textareaRef.current?.blur(),
      select: () => textareaRef.current?.select(),
      setInput,
      clear: clearHook,
      getInput: () => input,
      getOutput: () => output,
    }));

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value;
      setInput(value);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <textarea
          ref={textareaRef}
          value={input}
          onChange={handleInputChange}
          placeholder={placeholder}
          className={className}
          style={style}
          disabled={disabled}
          readOnly={readOnly}
          rows={rows}
          cols={cols}
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
              whiteSpace: 'pre-wrap',
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

BhaShaTextarea.displayName = 'BhaShaTextarea';
