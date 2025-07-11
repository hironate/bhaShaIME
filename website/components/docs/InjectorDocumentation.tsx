import { Code2 } from 'lucide-react';
import CodeSnippet from '../CodeSnippet';

const InjectorDocumentation = () => {
  const basicUsageHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>BhaSha IME Example</title>
</head>
<body>
    <h1>BhaSha IME Injector Example</h1>
    <p>Start typing in English in the textarea below.</p>
    
    <textarea rows="4" cols="50" placeholder="Type here..."></textarea>
    
    <!-- Include the injector script -->
    <script src="https://cdn.jsdelivr.net/npm/@bhashaime/core/dist/bhasha-ime-injector.js"></script>
</body>
</html>`;

  const advancedUsageHtml = `<!DOCTYPE html>
<html lang="en">
<body>
    <h2>Gujarati Input</h2>
    <textarea id="gujarati-input" rows="4" cols="50" placeholder="Type here..."></textarea>
    
    <h2>Hindi Input</h2>
    <textarea id="hindi-input" rows="4" cols="50" placeholder="Type here..."></textarea>
    
    <script>
      // Switch language for the second input field
      document.getElementById('hindi-input').addEventListener('focus', () => {
        window.bhashaIME.setLanguage('hindi');
      });
      
      // Revert to default for the first input
      document.getElementById('gujarati-input').addEventListener('focus', () => {
        window.bhashaIME.setLanguage('gujarati');
      });
    </script>

    <!-- Include the injector script -->
    <script src="https://cdn.jsdelivr.net/npm/@bhashaime/core/dist/bhasha-ime-injector.js"></script>
</body>
</html>
`;

  const scriptTag = `<script src="https://cdn.jsdelivr.net/npm/@bhashaime/core/dist/bhasha-ime-injector.js"></script>`;
  const setLanguageExample = `// To change the language dynamically
window.bhashaIME.setLanguage('hindi'); // Or 'gujarati'
`;

  return (
    <div>
      <p className="text-lg text-gray-600 mb-6">
        For projects that don't use React, or if you want to quickly add
        transliteration to an existing HTML page, you can use the standalone
        injector script.
      </p>

      {/* Basic Usage */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          Basic Usage
        </h3>
        <p className="text-gray-700 mb-4">
          The easiest way to use the injector is to add the script tag to your
          HTML file. It will automatically detect all `input` and `textarea`
          fields and enable transliteration. The default language is Gujarati.
        </p>
        <CodeSnippet language="html" code={scriptTag} />
        <p className="text-gray-700 mt-4">
          Here is a complete HTML file demonstrating basic usage:
        </p>
        <CodeSnippet language="html" code={basicUsageHtml} />
      </div>

      {/* Advanced Usage */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          Advanced Usage
        </h3>
        <p className="text-gray-700 mb-4">
          The script exposes a global object `window.bhashaIME` that allows for
          more advanced control, such as changing the language dynamically.
        </p>
        <CodeSnippet language="javascript" code={setLanguageExample} />
        <p className="text-gray-700 mt-4">
          You can use this to build more complex user interfaces, for example,
          by switching the language based on which input field is active:
        </p>
        <CodeSnippet language="html" code={advancedUsageHtml} />
      </div>
    </div>
  );
};

export default InjectorDocumentation;
