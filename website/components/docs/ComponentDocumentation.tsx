export default function ComponentDocumentation() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        React Components
      </h2>

      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          BhaSha IME provides ready-to-use React components for quick
          integration. These components handle all the transliteration logic
          internally while providing a clean API for customization.
        </p>

        {/* BhaShaInput */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            BhaShaInput Component
          </h3>
          <p className="text-gray-600 mb-4">
            A drop-in replacement for regular input elements with built-in
            transliteration support.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              Key Features
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li>• All standard HTML input props supported</li>
              <li>• Real-time transliteration display</li>
              <li>• Customizable styling with className and style props</li>
              <li>• Built-in event handlers for input changes</li>
              <li>• Imperative API with ref methods</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800 text-sm">
              📖 <strong>Documentation coming soon:</strong> Complete API
              reference, props table, and advanced examples will be added in the
              next update.
            </p>
          </div>
        </div>

        {/* BhaShaTextarea */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            BhaShaTextarea Component
          </h3>
          <p className="text-gray-600 mb-4">
            Perfect for multi-line text input with transliteration support.
            Ideal for forms, comments, and longer text content.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              Key Features
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Multi-line text transliteration</li>
              <li>• Configurable rows and columns</li>
              <li>• Real-time preview option</li>
              <li>• All textarea HTML attributes supported</li>
              <li>• Responsive design by default</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800 text-sm">
              📖 <strong>Documentation coming soon:</strong> Complete API
              reference, props table, and advanced examples will be added in the
              next update.
            </p>
          </div>
        </div>

        {/* Quick Preview */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            See Components in Action
          </h3>
          <p className="text-gray-600 mb-4">
            Both components are demonstrated in the live demo section on the
            homepage.
          </p>
          <a
            href="/#demo"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Try Live Demo →
          </a>
        </div>
      </div>
    </div>
  );
}
