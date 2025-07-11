export default function APIReference() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">API Reference</h2>

      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          Complete API reference for all BhaSha IME exports, interfaces, and
          types.
        </p>

        {/* Hook API */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            useBhaShaIME Hook
          </h3>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              Function Signature
            </h4>
            <div className="bg-gray-900 text-white p-4 rounded text-sm font-mono">
              useBhaShaIME(options?: UseBhaShaIMEOptions): UseBhaShaIMEReturn
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h5 className="text-lg font-semibold text-gray-900 mb-2">
                Parameters
              </h5>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left">Parameter</th>
                      <th className="px-4 py-2 text-left">Type</th>
                      <th className="px-4 py-2 text-left">Default</th>
                      <th className="px-4 py-2 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="px-4 py-2 font-mono">options</td>
                      <td className="px-4 py-2">UseBhaShaIMEOptions</td>
                      <td className="px-4 py-2">{}</td>
                      <td className="px-4 py-2">Configuration options</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h5 className="text-lg font-semibold text-gray-900 mb-2">
                Returns
              </h5>
              <p className="text-gray-600 mb-3">
                Returns a{' '}
                <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                  UseBhaShaIMEReturn
                </code>{' '}
                object with the following properties:
              </p>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left">Property</th>
                      <th className="px-4 py-2 text-left">Type</th>
                      <th className="px-4 py-2 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="px-4 py-2 font-mono">input</td>
                      <td className="px-4 py-2">string</td>
                      <td className="px-4 py-2">Current input text</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-2 font-mono">output</td>
                      <td className="px-4 py-2">string</td>
                      <td className="px-4 py-2">Transliterated output</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-2 font-mono">language</td>
                      <td className="px-4 py-2">SupportedLanguage</td>
                      <td className="px-4 py-2">Current language</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-2 font-mono">setInput</td>
                      <td className="px-4 py-2">(text: string) =&gt; void</td>
                      <td className="px-4 py-2">Update input text</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-2 font-mono">setLanguage</td>
                      <td className="px-4 py-2">
                        (lang: SupportedLanguage) =&gt; void
                      </td>
                      <td className="px-4 py-2">Change language</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-2 font-mono">transliterate</td>
                      <td className="px-4 py-2">(text: string) =&gt; string</td>
                      <td className="px-4 py-2">Manual transliteration</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-2 font-mono">clear</td>
                      <td className="px-4 py-2">() =&gt; void</td>
                      <td className="px-4 py-2">Clear input and output</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-2 font-mono">bhaSha</td>
                      <td className="px-4 py-2">BhaSha</td>
                      <td className="px-4 py-2">Direct engine access</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Components API */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Component Props
          </h3>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-blue-800 text-sm">
              📖 <strong>Documentation in progress:</strong> Complete component
              prop tables and TypeScript interfaces will be added in the next
              update.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">BhaShaInput</h4>
              <p className="text-gray-600 text-sm mb-3">
                Extends all standard HTML input attributes plus BhaSha-specific
                props.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• All HTMLInputElement props</li>
                <li>• language, showOutput, onOutputChange</li>
                <li>• Imperative ref methods</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">
                BhaShaTextarea
              </h4>
              <p className="text-gray-600 text-sm mb-3">
                Extends all standard HTML textarea attributes plus
                BhaSha-specific props.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• All HTMLTextAreaElement props</li>
                <li>• language, showOutput, onOutputChange</li>
                <li>• rows, cols configuration</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Types */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            TypeScript Types
          </h3>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                SupportedLanguage
              </h4>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="bg-gray-900 text-white p-3 rounded text-sm font-mono">
                  type SupportedLanguage = 'gujarati' | 'hindi' | 'english'
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                UseBhaShaIMEOptions
              </h4>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="bg-gray-900 text-white p-3 rounded text-sm font-mono">
                  {`interface UseBhaShaIMEOptions {
  language?: SupportedLanguage;
  autoTransliterate?: boolean;
  onTransliterationChange?: (input: string, output: string) => void;
}`}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Class Methods */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            BhaSha Class Methods
          </h3>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-blue-800 text-sm">
              📖 <strong>Documentation in progress:</strong> Complete class
              method documentation with parameters and return types will be
              added in the next update.
            </p>
          </div>

          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h5 className="font-semibold text-gray-900 mb-2">Core Methods</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>
                  •{' '}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    setLanguage(lang: SupportedLanguage)
                  </code>
                </li>
                <li>
                  •{' '}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    transliterateText(text: string): string
                  </code>
                </li>
                <li>
                  •{' '}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    processInput(char: string): ProcessResult
                  </code>
                </li>
                <li>
                  •{' '}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    getSupportedLanguages(): SupportedLanguage[]
                  </code>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Reference */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Quick Import Reference
          </h3>
          <div className="bg-gray-900 text-white p-4 rounded text-sm font-mono">
            {`import {
  // React hooks and components
  useBhaShaIME,
  BhaShaInput,
  BhaShaTextarea,
  
  // Direct class usage
  BhaSha,
  
  // TypeScript types
  SupportedLanguage,
  UseBhaShaIMEOptions,
  UseBhaShaIMEReturn,
} from '@bhashaime/core';`}
          </div>
        </div>
      </div>
    </div>
  );
}
