'use client';

import React from 'react';
import CodeSnippet from '../CodeSnippet';
import { BhaShaTextarea, SupportedLanguage } from '@bhashaime/core';

export default function BhaShaTextareaDocumentation() {
  const [lang, setLang] = React.useState<SupportedLanguage>('gujarati');
  return (
    <div className="prose max-w-none">
      <p className="text-lg text-gray-600 mb-8">
        The `BhaShaTextarea` component is a multi-line textarea with built-in
        transliteration support, perfect for forms, comments, or any place you
        need rich text input.
      </p>

      {/* Basic Usage */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Basic Usage
        </h3>
        <p className="text-gray-600 mb-4">
          Use it like a standard textarea, with the addition of the `language`
          prop.
        </p>
        <CodeSnippet
          language="jsx"
          code={`import { BhaShaTextarea } from '@bhashaime/core';

function MyComponent() {
  return (
    <BhaShaTextarea
      language="hindi"
      placeholder="Type your comment here..."
      rows={5}
    />
  );
}`}
        />
        <div className="mt-6">
          <BhaShaTextarea
            language="hindi"
            placeholder="Type 'aapka swagat hai'..."
            rows={5}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            outputClassName="mt-2 p-2 border rounded-md bg-white"
          />
        </div>
      </div>

      {/* Advanced Usage */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Advanced Usage
        </h3>
        <p className="text-gray-600 mb-4">
          Customize and control the `BhaShaTextarea` with various props and a
          ref.
        </p>
        <CodeSnippet
          language="jsx"
          code={`import React, { useState, useRef } from 'react';
import { BhaShaTextarea, BhaShaTextareaRef, SupportedLanguage } from '@bhashaime/core';

function AdvancedTextarea() {
  const [lang, setLang] = useState<SupportedLanguage>('gujarati');
  const textareaRef = useRef<BhaShaTextareaRef>(null);

  const handleFocus = () => {
    textareaRef.current?.focus();
  };

  return (
    <div>
      <div className="flex space-x-2 mb-4">
        <button onClick={() => setLang('gujarati')}>Gujarati</button>
        <button onClick={() => setLang('hindi')}>Hindi</button>
      </div>
      <BhaShaTextarea
        ref={textareaRef}
        language={lang}
        className="my-custom-textarea"
        rows={6}
        onOutputChange={(output) => console.log('Transliterated:', output)}
      />
      <button onClick={handleFocus} className="mt-2">
        Focus Textarea
      </button>
    </div>
  );
}`}
        />
        <div className="mt-6 p-6 border rounded-md bg-gray-50">
          <div className="flex space-x-2 mb-4">
            <button
              onClick={() => setLang('gujarati')}
              className={`px-3 py-1 rounded text-sm ${
                lang === 'gujarati'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Gujarati
            </button>
            <button
              onClick={() => setLang('hindi')}
              className={`px-3 py-1 rounded text-sm ${
                lang === 'hindi'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Hindi
            </button>
          </div>
          <BhaShaTextarea
            key={lang}
            language={lang}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            outputClassName="mt-2 p-2 border rounded-md bg-white"
            rows={5}
          />
        </div>
      </div>

      {/* Props */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Props</h3>
        <p className="text-gray-600">
          The `BhaShaTextarea` component accepts all standard props for a
          `textarea` element, in addition to the options for the `useBhaShaIME`
          hook.
        </p>
      </div>
    </div>
  );
}
