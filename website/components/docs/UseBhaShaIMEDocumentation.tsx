'use client';

import { useState } from 'react';
import { useBhaShaIME, SupportedLanguage } from '@bhashaime/core';
import CodeSnippet from '../CodeSnippet';

export default function UseBhaShaIMEDocumentation() {
  const [demoOutput, setDemoOutput] = useState('');
  const { input, output, setInput, setLanguage, language, clear } =
    useBhaShaIME({
      language: 'gujarati',
      autoTransliterate: true,
      onTransliterationChange: (input, output) => {
        setDemoOutput(`Input: "${input}" → Output: "${output}"`);
      },
    });

  return (
    <div>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          The `useBhaShaIME` hook provides the most flexible way to integrate
          transliteration into your React components. It gives you complete
          control over the UI while handling all the transliteration logic.
        </p>

        {/* Basic Usage */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Basic Usage
          </h3>

          <CodeSnippet
            language="typescript"
            code={`import { useBhaShaIME } from '@bhashaime/core';

function MyComponent() {
  const { input, output, setInput } = useBhaShaIME({
    language: 'gujarati',
    autoTransliterate: true,
  });

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type in English..."
      />
      <div>Transliterated: {output}</div>
    </div>
  );
}`}
          />

          {/* Live Demo */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-6">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">
              Live Demo:
            </h4>
            <div className="space-y-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type 'namaste' or 'kem chho'..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="p-3 bg-white border border-gray-200 rounded-md">
                <span className="text-sm text-gray-600">Output: </span>
                <span className="font-mono">
                  {output || 'Type something to see transliteration...'}
                </span>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setLanguage('gujarati')}
                  className={`px-3 py-1 rounded text-sm ${
                    language === 'gujarati'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  Gujarati
                </button>
                <button
                  onClick={() => setLanguage('hindi')}
                  className={`px-3 py-1 rounded text-sm ${
                    language === 'hindi'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  Hindi
                </button>
                <button
                  onClick={clear}
                  className="px-3 py-1 bg-red-100 text-red-700 rounded text-sm hover:bg-red-200"
                >
                  Clear
                </button>
              </div>
              {demoOutput && (
                <div className="text-xs text-gray-500 mt-2">
                  Event: {demoOutput}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Advanced Usage */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Advanced Usage
          </h3>
          <p className="text-gray-600 mb-6">
            The hook offers several options to customize its behavior and
            provides a rich set of return values for building complex
            interfaces.
          </p>

          {/* Hook Options */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              Hook Options
            </h4>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2">language</h5>
                <p className="text-sm text-gray-600 mb-2">
                  The initial language for transliteration. Can be changed later
                  using `setLanguage`.
                </p>
                <div className="text-xs text-gray-500">
                  Type: `SupportedLanguage` • Default: `'gujarati'`
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2">
                  autoTransliterate
                </h5>
                <p className="text-sm text-gray-600 mb-2">
                  Whether to automatically transliterate input as the user
                  types. When false, use the `transliterate` method manually.
                </p>
                <div className="text-xs text-gray-500">
                  Type: `boolean` • Default: `true`
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2">
                  onTransliterationChange
                </h5>
                <p className="text-sm text-gray-600 mb-2">
                  Callback function called whenever the input or output changes.
                  Useful for side effects like logging or analytics.
                </p>
                <div className="text-xs text-gray-500">
                  Type: {`'(input: string, output: string) => void'`} • Default:
                  `undefined`
                </div>
              </div>
            </div>
          </div>

          {/* Return Values */}
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              Return Values
            </h4>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h5 className="font-mono text-gray-900 mb-1">input: string</h5>
                <p className="text-sm text-gray-600">The current input text.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h5 className="font-mono text-gray-900 mb-1">output: string</h5>
                <p className="text-sm text-gray-600">
                  The transliterated output.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h5 className="font-mono text-gray-900 mb-1">
                  language: SupportedLanguage
                </h5>
                <p className="text-sm text-gray-600">The current language.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h5 className="font-mono text-gray-900 mb-1">
                  {'setInput: (text: string) => void'}
                </h5>
                <p className="text-sm text-gray-600">
                  Function to programmatically set the input text.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h5 className="font-mono text-gray-900 mb-1">
                  {'setLanguage: (lang: SupportedLanguage) => void'}
                </h5>
                <p className="text-sm text-gray-600">
                  Function to change the transliteration language.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h5 className="font-mono text-gray-900 mb-1">
                  {'transliterate: (text: string) => string'}
                </h5>
                <p className="text-sm text-gray-600">
                  Function to manually trigger transliteration for a given text.
                  Respects the currently set language.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h5 className="font-mono text-gray-900 mb-1">
                  {'clear: () => void'}
                </h5>
                <p className="text-sm text-gray-600">
                  Clears both the input and output fields.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
