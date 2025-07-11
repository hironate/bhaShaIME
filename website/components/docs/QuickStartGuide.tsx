'use client';

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { BhaShaInput } from '@bhashaime/core';

export default function QuickStartGuide() {
  const [output, setOutput] = useState('');

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Quick Start</h2>

      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          Get up and running with BhaSha IME in just a few minutes. Here's the
          fastest way to add Indian language transliteration to your React app.
        </p>

        {/* Step 1: Basic Usage */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Step 1: Basic Usage
          </h3>
          <p className="text-gray-600 mb-4">
            The simplest way to get started is with the{' '}
            <code className="bg-gray-100 px-2 py-1 rounded text-sm">
              BhaShaInput
            </code>{' '}
            component:
          </p>

          <SyntaxHighlighter
            language="typescript"
            style={oneLight}
            customStyle={{ marginBottom: '1.5rem' }}
          >
            {`import { BhaShaInput } from '@bhashaime/core';

function MyComponent() {
  return (
    <BhaShaInput
      language="gujarati"
      placeholder="Type in English..."
      showOutput={true}
    />
  );
}`}
          </SyntaxHighlighter>

          {/* Live Demo */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">
              Try it yourself:
            </h4>
            <BhaShaInput
              language="gujarati"
              placeholder="Type 'namaste' to see the magic..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onOutputChange={setOutput}
            />
            {output && (
              <div className="mt-3 p-3 bg-white border border-gray-200 rounded-md">
                <span className="text-sm text-gray-600">Output: </span>
                <span className="font-mono">{output}</span>
              </div>
            )}
          </div>
        </div>

        {/* Step 2: Using the Hook */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Step 2: Using the Hook
          </h3>
          <p className="text-gray-600 mb-4">
            For more control over the UI, use the{' '}
            <code className="bg-gray-100 px-2 py-1 rounded text-sm">
              useBhaShaIME
            </code>{' '}
            hook:
          </p>

          <SyntaxHighlighter
            language="typescript"
            style={oneLight}
            customStyle={{ marginBottom: '1.5rem' }}
          >
            {`import { useBhaShaIME } from '@bhashaime/core';

function MyComponent() {
  const { input, output, setInput } = useBhaShaIME({
    language: 'hindi',
    autoTransliterate: true,
  });

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type in English..."
      />
      <div>Output: {output}</div>
    </div>
  );
}`}
          </SyntaxHighlighter>
        </div>

        {/* Step 3: Language Switching */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Step 3: Language Switching
          </h3>
          <p className="text-gray-600 mb-4">
            Easily switch between different Indian languages:
          </p>

          <SyntaxHighlighter
            language="typescript"
            style={oneLight}
            customStyle={{ marginBottom: '1.5rem' }}
          >
            {`import { useBhaShaIME, SupportedLanguage } from '@bhashaime/core';

function MyComponent() {
  const { input, output, setInput, setLanguage, language } = useBhaShaIME({
    language: 'gujarati',
    autoTransliterate: true,
  });

  const languages: SupportedLanguage[] = ['gujarati', 'hindi'];

  return (
    <div>
      <select 
        value={language} 
        onChange={(e) => setLanguage(e.target.value as SupportedLanguage)}
      >
        {languages.map(lang => (
          <option key={lang} value={lang}>
            {lang.charAt(0).toUpperCase() + lang.slice(1)}
          </option>
        ))}
      </select>
      
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type in English..."
      />
      
      <div>Output: {output}</div>
    </div>
  );
}`}
          </SyntaxHighlighter>
        </div>

        {/* Common Patterns */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">
            Common Usage Patterns
          </h3>
          <ul className="space-y-2 text-blue-800 text-sm">
            <li>
              • Use <strong>BhaShaInput</strong> for simple single-line inputs
            </li>
            <li>
              • Use <strong>BhaShaTextarea</strong> for multi-line text areas
            </li>
            <li>
              • Use <strong>useBhaShaIME hook</strong> for custom UI
              implementations
            </li>
            <li>
              • Use <strong>BhaSha class</strong> directly for non-React
              applications
            </li>
          </ul>
        </div>

        {/* Next Steps */}
        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Next Steps
          </h3>
          <p className="text-gray-600 mb-4">Ready to dive deeper? Check out:</p>
          <ul className="space-y-2 text-sm">
            <li>
              •{' '}
              <a
                href="#hook-documentation"
                className="text-blue-600 hover:text-blue-800"
              >
                Complete Hook Documentation
              </a>
            </li>
            <li>
              •{' '}
              <a
                href="#component-documentation"
                className="text-blue-600 hover:text-blue-800"
              >
                Component API Reference
              </a>
            </li>
            <li>
              •{' '}
              <a
                href="#transliteration-rules"
                className="text-blue-600 hover:text-blue-800"
              >
                Transliteration Rules
              </a>
            </li>
            <li>
              •{' '}
              <a href="#examples" className="text-blue-600 hover:text-blue-800">
                Advanced Examples
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
