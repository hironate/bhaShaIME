# bhaShaIME Chrome Extension

A Chrome extension that provides Indic language input method editor (IME) functionality for typing in Hindi, Gujarati, and other Indian languages using English keyboard.

## Features

- **Multi-language Support**: Hindi, Gujarati, and English
- **Real-time Transliteration**: Type in English and get instant transliteration
- **Works on Any Website**: Including Google Docs, Gmail, and other web applications
- **Easy Language Switching**: Quick language selection via extension popup

## Installation

1. **Load the Extension**:

   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top right)
   - Click "Load unpacked" and select the `chrome-extension` folder

2. **Verify Installation**:
   - The extension icon should appear in your Chrome toolbar
   - Click the icon to see the language selector popup

## Testing

### Method 1: Use the Test Page

1. Navigate to `chrome-extension://[extension-id]/test.html`
2. The test page will show the extension status and allow you to test transliteration
3. Try typing in the input fields to see real-time transliteration

### Method 2: Test on Any Website

1. Go to any website with text input (Google Docs, Gmail, etc.)
2. Click the extension icon and select a language (Gujarati or Hindi)
3. Start typing in English - you should see transliteration happening

### Method 3: Debug Console

Open the browser console and use these debug functions:

```javascript
// Check extension status
window.bhaShaIMEDebug.getStatus();

// Test transliteration
window.bhaShaIMEDebug.testTransliteration('namaste');

// Change language
window.bhaShaIMEDebug.setLanguage('hindi');
```

## Troubleshooting

### Extension Not Working on Google Docs

- The extension should now work on Google Docs with the updated approach
- If you still see issues, check the browser console for error messages
- Make sure the extension is enabled and has permissions for the site

### Transliteration Not Working

1. Check if the extension is active (icon should be colored)
2. Verify the selected language in the popup
3. Try refreshing the page
4. Check browser console for any error messages

### Common Issues

- **CSP Errors**: The extension now uses local scripts to avoid Content Security Policy issues
- **Script Loading**: Both IME engine and injector scripts are loaded by the content script
- **Language Switching**: Use the extension popup or debug functions to change languages

## Development

### File Structure

```
chrome-extension/
├── manifest.json          # Extension configuration
├── background.js          # Service worker
├── content.js            # Content script (injects into pages)
├── injector.js           # Communication layer
├── ime-injector.js       # IME engine (transliteration logic)
├── popup.html/js/css     # Extension popup UI
├── test.html             # Test page
└── icons/                # Extension icons
```

### Key Components

- **content.js**: Manages script injection and communication
- **injector.js**: Handles communication between extension and IME
- **ime-injector.js**: Contains the actual transliteration logic
- **background.js**: Manages extension state and storage

## Supported Languages

- **Gujarati**: Type in English, get Gujarati script
- **Hindi**: Type in English, get Devanagari script
- **English**: No transliteration (pass-through)

## Examples

### Gujarati

- `namaste` → `નમસ્તે`
- `dhanyawad` → `ધન્યવાદ`
- `bharat` → `ભારત`

### Hindi

- `namaste` → `नमस्ते`
- `dhanyawad` → `धन्यवाद`
- `bharat` → `भारत`

## License

This extension is part of the bhaShaIME project.
