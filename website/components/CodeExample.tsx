'use client';

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check } from 'lucide-react';

export default function CodeExample() {
  const [activeTab, setActiveTab] = useState<
    'hook' | 'input' | 'textarea' | 'class'
  >('hook');
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>(
    {},
  );

  const examples = {
    hook: {
      title: 'Using the Hook',
      code: `import { useBhaShaIME } from '@bhashaime/core';

function MyComponent() {
  const { input, output, setInput, setLanguage } = useBhaShaIME({
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
      <div className="output">{output}</div>
      
      <button onClick={() => setLanguage('hindi')}>
        Switch to Hindi
      </button>
    </div>
  );
}`,
    },
    input: {
      title: 'Input Component',
      code: `import { BhaShaInput } from '@bhashaime/core';

function MyComponent() {
  return (
    <BhaShaInput
      language="gujarati"
      placeholder="Type in English..."
      showOutput={true}
      onInputChange={(input) => console.log('Input:', input)}
      onOutputChange={(output) => console.log('Output:', output)}
      className="my-input"
    />
  );
}`,
    },
    textarea: {
      title: 'Textarea Component',
      code: `import { BhaShaTextarea } from '@bhashaime/core';

function MyComponent() {
  return (
    <BhaShaTextarea
      language="hindi"
      rows={5}
      placeholder="Type a paragraph in English..."
      showOutput={true}
      onOutputChange={(output) => {
        // Handle transliterated output
        console.log('Transliterated:', output);
      }}
    />
  );
}`,
    },
    class: {
      title: 'Direct Class Usage',
      code: `import { BhaSha } from '@bhashaime/core';

// Create an instance
const bhaSha = new BhaSha();

// Set language
bhaSha.setLanguage('gujarati');

// Transliterate text
const result = bhaSha.transliterateText('namaste, kem chho?');
console.log(result); // નમસ્તે, કેમ છો?

// Check supported languages
const languages = bhaSha.getSupportedLanguages();
console.log(languages); // ['gujarati', 'hindi', 'english']

// Process character by character
const { valid, output } = bhaSha.processInput('k');
console.log(output); // ક`,
    },
  };

  const copyToClipboard = async (code: string, key: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedStates({ ...copiedStates, [key]: true });
      setTimeout(() => {
        setCopiedStates({ ...copiedStates, [key]: false });
      }, 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Tab Selector */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-gray-100 rounded-lg p-1">
          {Object.entries(examples).map(([key, example]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as any)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === key
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {example.title}
            </button>
          ))}
        </div>
      </div>

      {/* Code Display */}
      <div className="relative">
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={() => copyToClipboard(examples[activeTab].code, activeTab)}
            className="flex items-center space-x-1 px-3 py-1 bg-gray-800 text-white rounded-md text-sm hover:bg-gray-700 transition-colors"
          >
            {copiedStates[activeTab] ? (
              <>
                <Check size={14} />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        <SyntaxHighlighter
          language="typescript"
          style={oneLight}
          customStyle={{
            margin: 0,
            borderRadius: '8px',
            fontSize: '14px',
            lineHeight: '1.5',
          }}
        >
          {examples[activeTab].code}
        </SyntaxHighlighter>
      </div>

      {/* Additional Info */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h4 className="text-sm font-semibold text-blue-900 mb-2">
          {activeTab === 'hook' && 'Hook Benefits'}
          {activeTab === 'input' && 'Input Component Features'}
          {activeTab === 'textarea' && 'Textarea Component Features'}
          {activeTab === 'class' && 'Direct Class Benefits'}
        </h4>
        <ul className="text-sm text-blue-800 space-y-1">
          {activeTab === 'hook' && (
            <>
              <li>• Full control over UI implementation</li>
              <li>• Real-time transliteration with auto-update</li>
              <li>• Easy language switching</li>
              <li>• Custom event handling</li>
            </>
          )}
          {activeTab === 'input' && (
            <>
              <li>• Ready-to-use input component</li>
              <li>• Built-in output display option</li>
              <li>• All standard input props supported</li>
              <li>• Customizable styling</li>
            </>
          )}
          {activeTab === 'textarea' && (
            <>
              <li>• Perfect for longer text content</li>
              <li>• Multi-line transliteration</li>
              <li>• Configurable rows and columns</li>
              <li>• Real-time preview</li>
            </>
          )}
          {activeTab === 'class' && (
            <>
              <li>• Direct engine access</li>
              <li>• No React dependencies</li>
              <li>• Character-by-character processing</li>
              <li>• Perfect for custom implementations</li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
