export default function ClassDocumentation() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">BhaSha Class</h2>

      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          For advanced use cases or non-React applications, you can use the
          BhaSha class directly. This gives you complete control over the
          transliteration engine.
        </p>

        {/* Basic Usage */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Basic Usage
          </h3>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              Key Methods
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li>
                •{' '}
                <code className="bg-gray-200 px-2 py-1 rounded text-sm">
                  setLanguage(lang)
                </code>{' '}
                - Switch transliteration language
              </li>
              <li>
                •{' '}
                <code className="bg-gray-200 px-2 py-1 rounded text-sm">
                  transliterateText(text)
                </code>{' '}
                - Transliterate entire text
              </li>
              <li>
                •{' '}
                <code className="bg-gray-200 px-2 py-1 rounded text-sm">
                  processInput(char)
                </code>{' '}
                - Process single character
              </li>
              <li>
                •{' '}
                <code className="bg-gray-200 px-2 py-1 rounded text-sm">
                  getSupportedLanguages()
                </code>{' '}
                - Get available languages
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800 text-sm">
              📖 <strong>Documentation coming soon:</strong> Complete class API
              reference, method signatures, and integration examples will be
              added in the next update.
            </p>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            When to Use Direct Class
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900 mb-2">
                Perfect For:
              </h4>
              <ul className="space-y-1 text-green-800 text-sm">
                <li>• Non-React applications</li>
                <li>• Custom UI frameworks</li>
                <li>• Server-side transliteration</li>
                <li>• Advanced engine control</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-900 mb-2">
                Consider Alternatives:
              </h4>
              <ul className="space-y-1 text-yellow-800 text-sm">
                <li>• Use hooks for React apps</li>
                <li>• Use components for quick setup</li>
                <li>• More boilerplate required</li>
                <li>• Manual state management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Preview */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            See Class Usage Example
          </h3>
          <p className="text-gray-600 mb-4">
            The direct class usage is demonstrated in the code examples section
            on the homepage.
          </p>
          <a
            href="/#demo"
            className="inline-flex items-center text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            View Code Examples →
          </a>
        </div>
      </div>
    </div>
  );
}
