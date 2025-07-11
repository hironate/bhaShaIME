'use client';

import { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import {
  BhaShaInput,
  BhaShaTextarea,
  useBhaShaIME,
  SupportedLanguage,
  BhaShaInputRef,
  BhaShaTextareaRef,
} from '@bhashaime/core';

export default function LiveDemo() {
  const [selectedLanguage, setSelectedLanguage] =
    useState<SupportedLanguage>('gujarati');
  const [activeTab, setActiveTab] = useState<'input' | 'textarea' | 'hook'>(
    'input',
  );

  // Refs for controlling demo components
  const inputDemoRef = useRef<{ setInput: (text: string) => void }>(null);
  const textareaDemoRef = useRef<{ setInput: (text: string) => void }>(null);
  const hookDemoRef = useRef<{ setInput: (text: string) => void }>(null);

  const languages = [
    { code: 'gujarati' as const, name: 'Gujarati', nativeName: 'ગુજરાતી' },
    { code: 'hindi' as const, name: 'Hindi', nativeName: 'हिन्दी' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Language Selector */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-gray-100 rounded-lg p-1">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setSelectedLanguage(lang.code)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedLanguage === lang.code
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {lang.name} ({lang.nativeName})
            </button>
          ))}
        </div>
      </div>

      {/* Tab Selector */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('input')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'input'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Input Component
          </button>
          <button
            onClick={() => setActiveTab('textarea')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'textarea'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Textarea Component
          </button>
          <button
            onClick={() => setActiveTab('hook')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'hook'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Hook
          </button>
        </div>
      </div>

      {/* Demo Container */}
      <div className="demo-container">
        {activeTab === 'input' && (
          <InputDemo
            key={selectedLanguage}
            language={selectedLanguage}
            ref={inputDemoRef}
          />
        )}
        {activeTab === 'textarea' && (
          <TextareaDemo
            key={selectedLanguage}
            language={selectedLanguage}
            ref={textareaDemoRef}
          />
        )}
        {activeTab === 'hook' && (
          <HookDemo
            key={selectedLanguage}
            language={selectedLanguage}
            ref={hookDemoRef}
          />
        )}
      </div>

      {/* Sample Text Suggestions */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 mb-3">Try typing these examples:</p>
        <div className="flex flex-wrap justify-center gap-2">
          {selectedLanguage === 'gujarati' ? (
            <>
              <button
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200 transition-colors"
                onClick={() => copyToDemo('namaste, kem chho?')}
              >
                namaste, kem chho?
              </button>
              <button
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200 transition-colors"
                onClick={() => copyToDemo('gujaraatano prem')}
              >
                gujaratano prem
              </button>
              <button
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200 transition-colors"
                onClick={() => copyToDemo('bhaaShaa badalavaa maaTe')}
              >
                bhaaShaa badalavaa maaTe
              </button>
            </>
          ) : (
            <>
              <button
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200 transition-colors"
                onClick={() => copyToDemo('namaste, kaise hai aap?')}
              >
                namaste, kaise hai aap?
              </button>
              <button
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200 transition-colors"
                onClick={() => copyToDemo('bhaarat mahaan')}
              >
                bhaarat mahaan
              </button>
              <button
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200 transition-colors"
                onClick={() => copyToDemo('hindI bhaaShaa')}
              >
                hindI bhaSha
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );

  function copyToDemo(text: string) {
    if (activeTab === 'input' && inputDemoRef.current) {
      inputDemoRef.current.setInput(text);
    } else if (activeTab === 'textarea' && textareaDemoRef.current) {
      textareaDemoRef.current.setInput(text);
    } else if (activeTab === 'hook' && hookDemoRef.current) {
      hookDemoRef.current.setInput(text);
    }
  }
}

const InputDemo = forwardRef<
  { setInput: (text: string) => void },
  { language: SupportedLanguage }
>(({ language }, ref) => {
  const [output, setOutput] = useState('');
  const inputRef = useRef<BhaShaInputRef>(null);

  useImperativeHandle(ref, () => ({
    setInput: (text: string) => {
      inputRef.current?.setInput(text);
    },
  }));

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Type in English:
        </label>
        <BhaShaInput
          ref={inputRef}
          key={language}
          language={language}
          placeholder={`Type in English to see ${language} script...`}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onOutputChange={setOutput}
        />
      </div>
      {output && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Transliterated output:
          </label>
          <div className="demo-output">{output}</div>
        </div>
      )}
    </div>
  );
});

InputDemo.displayName = 'InputDemo';

const TextareaDemo = forwardRef<
  { setInput: (text: string) => void },
  { language: SupportedLanguage }
>(({ language }, ref) => {
  const [output, setOutput] = useState('');
  const textareaRef = useRef<BhaShaTextareaRef>(null);

  useImperativeHandle(ref, () => ({
    setInput: (text: string) => {
      textareaRef.current?.setInput(text);
    },
  }));

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Type a paragraph in English:
        </label>
        <BhaShaTextarea
          ref={textareaRef}
          key={language}
          language={language}
          placeholder={`Type a longer text in English to see ${language} script...`}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={4}
          onOutputChange={setOutput}
        />
      </div>
      {output && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Transliterated output:
          </label>
          <div className="demo-output whitespace-pre-wrap">{output}</div>
        </div>
      )}
    </div>
  );
});

TextareaDemo.displayName = 'TextareaDemo';

const HookDemo = forwardRef<
  { setInput: (text: string) => void },
  { language: SupportedLanguage }
>(({ language }, ref) => {
  const { input, output, setInput } = useBhaShaIME({
    language,
    autoTransliterate: true,
  });

  useImperativeHandle(ref, () => ({
    setInput: (text: string) => {
      setInput(text);
    },
  }));

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Custom input using the hook:
        </label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Type in English to see ${language} script...`}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      {output && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Transliterated output:
          </label>
          <div className="demo-output">{output}</div>
        </div>
      )}
    </div>
  );
});

HookDemo.displayName = 'HookDemo';
