'use client';

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useBhaShaIME } from '@bhashaime/core';

export default function HookDocumentation() {
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
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        useBhaShaIME Hook
      </h2>

      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          The `useBhaShaIME` hook provides the most flexible way to integrate
          transliteration into your React components. It gives you complete
          control over the UI while handling all the transliteration logic.
        </p>

        {/* Basic Usage */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Basic Usage
          </h3>

          <SyntaxHighlighter
            language="typescript"
            style={oneLight}
            customStyle={{ marginBottom: '1.5rem' }}
          >
            {`import { useBhaShaIME } from '@bhashaime/core';

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
          </SyntaxHighlighter>

          {/* Live Demo */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
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

        {/* Hook Options */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Hook Options
          </h3>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              UseBhaShaIMEOptions
            </h4>
            <SyntaxHighlighter language="typescript" style={oneLight}>
              {`interface UseBhaShaIMEOptions {
  language?: SupportedLanguage;        // Default: 'gujarati'
  autoTransliterate?: boolean;         // Default: true
  onTransliterationChange?: (
    input: string, 
    output: string
  ) => void;
}`}
            </SyntaxHighlighter>
          </div>

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
                Whether to automatically transliterate input as the user types.
                When false, use the `transliterate` method manually.
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
                Type: `(input: string, output: string) =&gt; void` • Default:
                `undefined`
              </div>
            </div>
          </div>
        </div>

        {/* Return Values */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Return Values
          </h3>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              UseBhaShaIMEReturn
            </h4>
            <SyntaxHighlighter language="typescript" style={oneLight}>
              {`interface UseBhaShaIMEReturn {
  input: string;                           // Current input text
  output: string;                          // Transliterated output
  language: SupportedLanguage;             // Current language
  setInput: (text: string) => void;        // Update input
  setLanguage: (lang: SupportedLanguage) => void; // Change language
  transliterate: (text: string) => string; // Manual transliteration
  clear: () => void;                       // Clear input/output
  bhaSha: BhaSha;                         // Direct access to engine
}`}
            </SyntaxHighlighter>
          </div>
        </div>

        {/* Advanced Examples */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Advanced Examples
          </h3>

          {/* Manual Transliteration */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              Manual Transliteration
            </h4>
            <SyntaxHighlighter language="typescript" style={oneLight}>
              {`function ManualTransliterationComponent() {
  const { input, setInput, transliterate, language } = useBhaShaIME({
    autoTransliterate: false, // Disable auto-transliteration
  });

  const [manualOutput, setManualOutput] = useState('');

  const handleManualTransliterate = () => {
    const result = transliterate(input);
    setManualOutput(result);
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type text..."
      />
      <button onClick={handleManualTransliterate}>
        Transliterate to {language}
      </button>
      <div>Output: {manualOutput}</div>
    </div>
  );
}`}
            </SyntaxHighlighter>
          </div>

          {/* Multi-language Support */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              Multi-language Support
            </h4>
            <SyntaxHighlighter language="typescript" style={oneLight}>
              {`function MultiLanguageComponent() {
  const { 
    input, 
    output, 
    setInput, 
    setLanguage, 
    language,
    bhaSha 
  } = useBhaShaIME({
    language: 'gujarati',
    autoTransliterate: true,
  });

  // Get all supported languages
  const supportedLanguages = bhaSha.getSupportedLanguages();

  return (
    <div>
      <div>
        <label>Language:</label>
        <select 
          value={language} 
          onChange={(e) => setLanguage(e.target.value as SupportedLanguage)}
        >
          {supportedLanguages.map(lang => (
            <option key={lang} value={lang}>
              {lang.charAt(0).toUpperCase() + lang.slice(1)}
            </option>
          ))}
        </select>
      </div>
      
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={\`Type in English for \${language} transliteration...\`}
      />
      
      <div>
        <strong>{language} Output:</strong> {output}
      </div>
    </div>
  );
}`}
            </SyntaxHighlighter>
          </div>

          {/* With Validation */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              With Input Validation
            </h4>
            <SyntaxHighlighter language="typescript" style={oneLight}>
              {`function ValidatedInputComponent() {
  const { input, output, setInput } = useBhaShaIME({
    language: 'hindi',
    autoTransliterate: true,
    onTransliterationChange: (input, output) => {
      console.log('Transliteration changed:', { input, output });
    },
  });

  const [errors, setErrors] = useState<string[]>([]);

  const validateInput = (text: string) => {
    const newErrors: string[] = [];
    
    if (text.length > 100) {
      newErrors.push('Input too long (max 100 characters)');
    }
    
    // Check for invalid characters (optional)
    const invalidChars = text.match(/[^a-zA-Z0-9\\s.,!?-]/g);
    if (invalidChars) {
      newErrors.push(\`Invalid characters: \${invalidChars.join(', ')}\`);
    }
    
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleInputChange = (text: string) => {
    setInput(text);
    validateInput(text);
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder="Type in English..."
        className={errors.length > 0 ? 'border-red-500' : 'border-gray-300'}
      />
      
      {errors.length > 0 && (
        <div className="text-red-600 text-sm mt-1">
          {errors.map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </div>
      )}
      
      <div>Transliterated: {output}</div>
    </div>
  );
}`}
            </SyntaxHighlighter>
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-900 mb-4">
            Best Practices
          </h3>
          <ul className="space-y-2 text-green-800 text-sm">
            <li>
              • Use `autoTransliterate: true` for real-time typing experiences
            </li>
            <li>
              • Use `autoTransliterate: false` for form submissions or
              controlled updates
            </li>
            <li>
              • Store the BhaSha instance (`bhaSha`) for advanced engine
              operations
            </li>
            <li>
              • Use `onTransliterationChange` for analytics or side effects
            </li>
            <li>• Implement input validation for better user experience</li>
            <li>
              • Use `clear()` method to reset both input and output
              simultaneously
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
