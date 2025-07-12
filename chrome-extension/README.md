# bhaShaIME Chrome Extension

A Chrome extension that enables typing in Hindi, Gujarati, and other Indian languages using an English keyboard. This extension uses the bhaShaIME transliteration engine to convert English text to Indian scripts in real-time.

## Features

- **Multi-language Support**: Hindi (Devanagari), Gujarati, and English
- **Real-time Transliteration**: Type in English and see Indian script instantly
- **Universal Compatibility**: Works on any website with text input fields
- **Easy Language Switching**: Quick toggle between languages via popup
- **Seamless Integration**: No need to change system keyboard settings

## Installation

### Development Installation

1. Clone the repository and navigate to the `chrome-extension` directory
2. Add icon files to the `icons/` directory (see `icons/README.md` for details)
3. Open Chrome and go to `chrome://extensions/`
4. Enable "Developer mode" (toggle in top right)
5. Click "Load unpacked" and select the `chrome-extension` directory
6. The extension should now appear in your extensions list

### Production Installation

The extension will be available on the Chrome Web Store once published.

## Usage

1. **Activate the Extension**: Click the bhaShaIME icon in the Chrome toolbar
2. **Select Language**: Choose from English, Hindi, or Gujarati in the popup
3. **Start Typing**: Click on any text field on any website and start typing in English
4. **Real-time Conversion**: Your English text will be converted to the selected Indian script

### Examples

- **Hindi**: Type "namaste" → नमस्ते
- **Gujarati**: Type "namaste" → નમસ્તે
- **English**: Type "hello" → hello (no conversion)

## Supported Languages

| Language | Script     | Code       |
| -------- | ---------- | ---------- |
| English  | Latin      | `english`  |
| Hindi    | Devanagari | `hindi`    |
| Gujarati | Gujarati   | `gujarati` |

## Files Structure

```
chrome-extension/
├── manifest.json          # Extension manifest
├── popup.html             # Language selection popup
├── popup.css              # Popup styling
├── popup.js               # Popup functionality
├── background.js          # Background service worker
├── content.js             # Content script
├── injector.js            # Transliteration engine
├── icons/                 # Extension icons
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   └── icon128.png
└── README.md              # This file
```

## Technical Details

### Architecture

1. **Background Script**: Manages extension lifecycle and inter-component communication
2. **Content Script**: Runs on web pages and manages the injector
3. **Injector Script**: Contains the transliteration engine and handles keyboard input
4. **Popup**: Provides the user interface for language selection

### Permissions

- `activeTab`: To inject content scripts into active tabs
- `storage`: To save user language preferences
- `host_permissions`: To run on all websites

## Development

### Building from Source

The extension uses the bhaShaIME transliteration engine from the parent project. The `injector.js` file contains a bundled version of the engine.

### Testing

1. Load the extension in Chrome
2. Navigate to any website with text input
3. Test transliteration with different languages
4. Verify language switching works correctly

### Debugging

- Open Chrome DevTools on any page to see content script logs
- Use the extension's popup to see popup script logs
- Check the background script logs in `chrome://extensions/` → Developer mode → Service worker

## Troubleshooting

### Extension Not Working

1. Check that the extension is enabled in `chrome://extensions/`
2. Refresh the webpage after installing/updating the extension
3. Check browser console for error messages

### Transliteration Not Working

1. Ensure a supported language is selected
2. Try clicking in the text field and typing again
3. Check that the website allows text input modifications

### Language Not Switching

1. Verify the extension popup shows the correct language
2. Try refreshing the webpage
3. Check that the extension has proper permissions

## Contributing

This extension is part of the bhaShaIME project. To contribute:

1. Fork the main repository
2. Make changes in the `chrome-extension/` directory
3. Test thoroughly across different websites
4. Submit a pull request

## License

This extension is part of the bhaShaIME project and follows the same licensing terms.

## Support

For support, bug reports, or feature requests, please use the main bhaShaIME repository's issue tracker.
