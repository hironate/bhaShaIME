'use client';

import React from 'react';
import CodeSnippet from '../CodeSnippet';
import { BhaShaInput, SupportedLanguage } from '@bhashaime/core';

export default function BhaShaInputDocumentation() {
  const [lang, setLang] = React.useState<SupportedLanguage>('gujarati');
  return (
    <div className="prose max-w-none">
      <p className="text-lg text-gray-600 mb-8">
        The `BhaShaInput` component is a ready-to-use, enhanced HTML input
        element with built-in transliteration capabilities. It's designed to be
        a drop-in replacement for the standard `<input />` tag.
      </p>

      {/* Basic Usage */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Basic Usage
        </h3>
        <p className="text-gray-600 mb-4">
          To get started, simply import `BhaShaInput` and use it in your
          component.
        </p>
        <CodeSnippet
          language="jsx"
          code={`import { BhaShaInput } from '@bhashaime/core';

function MyComponent() {
  return (
    <BhaShaInput
      language="gujarati"
      placeholder="Type here..."
    />
  );
}`}
        />
        <div className="mt-6">
          <BhaShaInput
            language="gujarati"
            placeholder="Type 'kem chho'..."
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
          The component can be customized with various props and can be
          controlled via a ref.
        </p>
        <CodeSnippet
          language="jsx"
          code={`import React, { useState, useRef } from 'react';
import { BhaShaInput, BhaShaInputRef, SupportedLanguage } from '@bhashaime/core';

function AdvancedInput() {
  const [lang, setLang] = useState<SupportedLanguage>('gujarati');
  const inputRef = useRef<BhaShaInputRef>(null);

  const handleClear = () => {
    inputRef.current?.clear();
  };

  return (
    <div>
      <div className="flex space-x-2 mb-4">
        <button onClick={() => setLang('gujarati')}>Gujarati</button>
        <button onClick={() => setLang('hindi')}>Hindi</button>
      </div>
      <BhaShaInput
        ref={inputRef}
        language={lang}
        className="my-custom-input"
        outputClassName="my-custom-output"
        onOutputChange={(output) => console.log(output)}
      />
      <button onClick={handleClear} className="mt-2">
        Clear
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
          <BhaShaInput
            key={lang}
            language={lang}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            outputClassName="mt-2 p-2 border rounded-md bg-white"
          />
        </div>
      </div>

      {/* Props */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Props</h3>
        <div className="space-y-4">
          {/* Add prop details here */}
          <p className="text-gray-600">
            The `BhaShaInput` component accepts all standard props for an
            `input` element, in addition to the options for the `useBhaShaIME`
            hook and some specific props listed below.
          </p>
        </div>
      </div>
    </div>
  );
}
