import CodeSnippet from '../CodeSnippet';

export default function ClassDocumentation() {
  return (
    <div>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          For advanced use cases or non-React applications, you can use the
          `BhaSha` class directly. This gives you complete control over the
          transliteration engine.
        </p>

        {/* Basic Usage */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Basic Usage
          </h3>
          <p className="text-gray-600 mb-4">
            Instantiate the class and use its methods to perform
            transliteration.
          </p>
          <CodeSnippet
            language="javascript"
            code={`import { BhaSha } from '@bhashaime/core';

const bhasha = new BhaSha();

// Set the language
bhasha.setLanguage('hindi');

// Transliterate a full sentence
const hindiText = bhasha.transliterateText('namaste, aap kaise hai?');
console.log(hindiText); // नमस्ते, आप कैसे है?

// Get a list of supported languages
const supportedLangs = bhasha.getSupportedLanguages();
console.log(supportedLangs); // ['english', 'gujarati', 'hindi']`}
          />
        </div>

        {/* Advanced Usage */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Advanced Usage
          </h3>
          <p className="text-gray-600 mb-4">
            For more granular control, you can process input character by
            character. This is useful for building custom interactive input
            experiences.
          </p>
          <CodeSnippet
            language="javascript"
            code={`import { BhaSha } from '@bhashaime/core';

const bhasha = new BhaSha();
bhasha.setLanguage('gujarati');

let fullOutput = '';
const englishInput = 'kem chho';

for (const char of englishInput) {
  const result = bhasha.processInput(char);
  if (result.valid) {
    fullOutput = result.output; // processInput returns the full transliterated string so far
  }
}

console.log(fullOutput); // કેમ છ્છો`}
          />
        </div>

        {/* API Reference */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            API Reference
          </h3>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h5 className="font-mono text-gray-900 mb-1">
                setLanguage(lang: SupportedLanguage): void
              </h5>
              <p className="text-sm text-gray-600">
                Sets the active language for transliteration.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h5 className="font-mono text-gray-900 mb-1">
                transliterateText(text: string): string
              </h5>
              <p className="text-sm text-gray-600">
                Transliterates a complete string of text.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h5 className="font-mono text-gray-900 mb-1">
                processInput(char: string):{' '}
                {'{ valid: boolean; output: string }'}
              </h5>
              <p className="text-sm text-gray-600">
                Processes a single character and returns the updated output.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h5 className="font-mono text-gray-900 mb-1">
                getSupportedLanguages(): SupportedLanguage[]
              </h5>
              <p className="text-sm text-gray-600">
                Returns an array of all supported language codes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
