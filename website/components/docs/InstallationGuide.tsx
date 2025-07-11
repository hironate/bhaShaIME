'use client';

import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function InstallationGuide() {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const copyToClipboard = async (text: string, commandType: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCommand(commandType);
      setTimeout(() => setCopiedCommand(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Installation</h2>

      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          BhaSha IME is available as an npm package. Install it in your React
          project using your preferred package manager.
        </p>

        {/* Package Manager Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* npm */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">npm</h3>
            <div className="relative">
              <pre className="bg-gray-900 text-white p-4 rounded-md text-sm overflow-x-auto">
                <code>npm install @bhashaime/core</code>
              </pre>
              <button
                onClick={() =>
                  copyToClipboard('npm install @bhashaime/core', 'npm')
                }
                className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
              >
                {copiedCommand === 'npm' ? (
                  <Check size={16} />
                ) : (
                  <Copy size={16} />
                )}
              </button>
            </div>
          </div>

          {/* yarn */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Yarn</h3>
            <div className="relative">
              <pre className="bg-gray-900 text-white p-4 rounded-md text-sm overflow-x-auto">
                <code>yarn add @bhashaime/core</code>
              </pre>
              <button
                onClick={() =>
                  copyToClipboard('yarn add @bhashaime/core', 'yarn')
                }
                className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
              >
                {copiedCommand === 'yarn' ? (
                  <Check size={16} />
                ) : (
                  <Copy size={16} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">
            Requirements
          </h3>
          <ul className="space-y-2 text-blue-800">
            <li>• React 16.8.0 or higher (hooks support required)</li>
            <li>• React DOM 16.8.0 or higher</li>
            <li>• TypeScript 4.0+ (optional, but recommended)</li>
          </ul>
        </div>

        {/* Peer Dependencies */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Peer Dependencies
          </h3>
          <p className="text-gray-600 mb-4">
            BhaSha IME has the following peer dependencies that should already
            be installed in your React project:
          </p>
          <div className="bg-gray-50 rounded-lg p-4">
            <pre className="text-sm">
              <code>{`"peerDependencies": {
  "react": ">=16.8.0",
  "react-dom": ">=16.8.0"
}`}</code>
            </pre>
          </div>
        </div>

        {/* Verification */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Verify Installation
          </h3>
          <p className="text-gray-600 mb-4">
            After installation, verify that everything is working by importing
            the library:
          </p>
          <div className="bg-gray-50 rounded-lg p-4">
            <pre className="text-sm">
              <code>{`import { useBhaShaIME, BhaShaInput, BhaShaTextarea } from '@bhashaime/core';

// If using TypeScript, you can also import types
import type { SupportedLanguage } from '@bhashaime/core';`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
