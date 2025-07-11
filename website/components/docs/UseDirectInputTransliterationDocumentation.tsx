'use client';

import { useState, useRef } from 'react';
import {
  useDirectInputTransliteration,
  SupportedLanguage,
} from '@bhashaime/core';
import CodeSnippet from '../CodeSnippet';

const DirectInputDemo = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [lang, setLang] = useState<SupportedLanguage>('gujarati');

  useDirectInputTransliteration({
    ref: inputRef,
    language: lang,
    initialRawValue: 'type here',
  });

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
      <h4 className="text-sm font-semibold text-gray-700 mb-3">Live Demo:</h4>
      <div className="space-y-3">
        <input
          ref={inputRef}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <div className="flex space-x-2">
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
      </div>
    </div>
  );
};

export default function UseDirectInputTransliterationDocumentation() {
  return (
    <div>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          The `useDirectInputTransliteration` hook is designed for simplicity.
          It directly hooks into an existing input or textarea element using a
          ref, automatically handling user input and transliteration without
          requiring you to manage state.
        </p>

        {/* Basic Usage */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Basic Usage
          </h3>

          <CodeSnippet
            language="typescript"
            code={`import { useRef } from 'react';
import { useDirectInputTransliteration } from '@bhashaime/core';

function MyComponent() {
  const inputRef = useRef<HTMLInputElement>(null);

  useDirectInputTransliteration({
    ref: inputRef,
    language: 'gujarati',
  });

  return <input ref={inputRef} />;
}`}
          />
        </div>

        {/* Live Demo */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Live Demo
          </h3>
          <DirectInputDemo />
        </div>

        {/* Advanced Usage */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Advanced Usage
          </h3>
          <p className="text-gray-600 mb-6">
            Customize the hook's behavior with the following options.
          </p>

          {/* Hook Options */}
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h5 className="font-semibold text-gray-900 mb-2">ref</h5>
              <p className="text-sm text-gray-600 mb-2">
                A React ref pointing to the `HTMLInputElement` or
                `HTMLTextAreaElement` you want to attach the transliteration to.
              </p>
              <div className="text-xs text-gray-500">
                Type:{' '}
                {`React.RefObject<HTMLInputElement | HTMLTextAreaElement>`}
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h5 className="font-semibold text-gray-900 mb-2">language</h5>
              <p className="text-sm text-gray-600 mb-2">
                The language for transliteration. This can be dynamically
                changed.
              </p>
              <div className="text-xs text-gray-500">
                Type: `SupportedLanguage`
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h5 className="font-semibold text-gray-900 mb-2">
                initialRawValue
              </h5>
              <p className="text-sm text-gray-600 mb-2">
                An initial English value for the input field. This will be
                transliterated on the initial render.
              </p>
              <div className="text-xs text-gray-500">
                Type: `string` • Default: `''`
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h5 className="font-semibold text-gray-900 mb-2">
                onTransliteration
              </h5>
              <p className="text-sm text-gray-600 mb-2">
                Callback function that fires whenever a transliteration occurs.
                It receives both the original English input and the
                transliterated output.
              </p>
              <div className="text-xs text-gray-500">
                Type: {`(e: { raw: string; converted: string }) => void`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
