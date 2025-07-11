export default function ExamplesSection() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Examples</h2>

      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          Real-world examples and patterns for integrating BhaSha IME into your
          applications.
        </p>

        {/* Form Integration */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Form Integration
          </h3>
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              Contact Form with Multiple Languages
            </h4>
            <p className="text-gray-600 mb-4">
              Perfect for multilingual websites where users might want to submit
              feedback or comments in their preferred Indian language.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 text-sm">
                📝 <strong>Example coming soon:</strong> Complete form
                integration example with validation and submission handling.
              </p>
            </div>
          </div>
        </div>

        {/* Chat Application */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Chat Application
          </h3>
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              Real-time Chat with Transliteration
            </h4>
            <p className="text-gray-600 mb-4">
              Enable users to chat in Indian languages with real-time
              transliteration for better communication.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 text-sm">
                💬 <strong>Example coming soon:</strong> Chat interface with
                message history and language switching capabilities.
              </p>
            </div>
          </div>
        </div>

        {/* Content Management */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Content Management
          </h3>
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              Blog Editor with Transliteration
            </h4>
            <p className="text-gray-600 mb-4">
              Rich text editor integration for creating content in Indian
              languages with preview capabilities.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 text-sm">
                ✍️ <strong>Example coming soon:</strong> Rich text editor
                integration with formatting and preview features.
              </p>
            </div>
          </div>
        </div>

        {/* E-commerce */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            E-commerce Integration
          </h3>
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              Product Search in Indian Languages
            </h4>
            <p className="text-gray-600 mb-4">
              Enable customers to search for products using Indian language
              names with transliteration support.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 text-sm">
                🛒 <strong>Example coming soon:</strong> Search functionality
                with autocomplete and product filtering.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile App */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            React Native Integration
          </h3>
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              Mobile App with Indian Language Support
            </h4>
            <p className="text-gray-600 mb-4">
              Cross-platform mobile applications with native Indian language
              input using React Native.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 text-sm">
                📱 <strong>Example coming soon:</strong> React Native
                implementation with platform-specific optimizations.
              </p>
            </div>
          </div>
        </div>

        {/* Current Examples */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Available Examples
          </h3>
          <p className="text-gray-600 mb-4">
            While we work on comprehensive examples, you can explore the current
            implementations:
          </p>
          <div className="space-y-2">
            <a
              href="/#demo"
              className="block text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              → Interactive Live Demo (Homepage)
            </a>
            <a
              href="#quick-start"
              className="block text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              → Quick Start Guide (Above)
            </a>
            <a
              href="#hook-documentation"
              className="block text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              → Hook Usage Examples (Above)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
