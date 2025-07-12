// Content script for bhaShaIME Chrome Extension
// This script runs in the context of web pages and manages the bhaShaIME injector
/* global chrome */

// Global variables
let bhashaIMEActive = false;
let currentLanguage = 'english';
let injectorScript = null;

// Initialize content script
async function initializeContentScript() {
  try {
    // Get current language from storage
    const response = await chrome.runtime.sendMessage({
      action: 'getLanguage',
    });
    currentLanguage = response.language || 'english';

    // Load the injector
    await loadBhaShaIMEInjector();

    // Set initial language
    setBhaShaIMELanguage(currentLanguage);

    console.log(
      'bhaShaIME content script initialized with language:',
      currentLanguage,
    );
  } catch (error) {
    console.error('Error initializing bhaShaIME content script:', error);
  }
}

// Load the bhaShaIME injector script
async function loadBhaShaIMEInjector() {
  return new Promise((resolve, reject) => {
    try {
      // Create and inject the injector script
      injectorScript = document.createElement('script');
      injectorScript.src = chrome.runtime.getURL('injector.js');
      injectorScript.onload = () => {
        bhashaIMEActive = true;
        resolve();
      };
      injectorScript.onerror = () => {
        reject(new Error('Failed to load bhaShaIME injector'));
      };

      // Inject into the page
      (document.head || document.documentElement).appendChild(injectorScript);
    } catch (error) {
      reject(error);
    }
  });
}

// Set language in the injector
function setBhaShaIMELanguage(language) {
  try {
    // Send message to the injected script
    window.postMessage(
      {
        type: 'BHASHA_IME_LANGUAGE_CHANGE',
        language: language,
      },
      '*',
    );

    currentLanguage = language;
    console.log('bhaShaIME language set to:', language);
  } catch (error) {
    console.error('Error setting bhaShaIME language:', error);
  }
}

// Listen for messages from the extension
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  try {
    switch (message.action) {
      case 'changeLanguage':
        setBhaShaIMELanguage(message.language);
        sendResponse({ success: true });
        break;

      case 'getStatus':
        sendResponse({
          active: bhashaIMEActive,
          language: currentLanguage,
        });
        break;

      case 'initializeLanguage':
        setBhaShaIMELanguage(message.language);
        sendResponse({ success: true });
        break;

      case 'languageChanged':
        setBhaShaIMELanguage(message.language);
        sendResponse({ success: true });
        break;

      default:
        console.log('Unknown message action:', message.action);
        sendResponse({ error: 'Unknown action' });
    }
  } catch (error) {
    console.error('Error handling message:', error);
    sendResponse({ error: error.message });
  }

  return true; // Keep message channel open for async responses
});

// Listen for messages from the injected script
window.addEventListener('message', (event) => {
  if (event.source !== window) return;

  if (event.data.type === 'BHASHA_IME_STATUS') {
    bhashaIMEActive = event.data.active;

    // Send status update to extension
    chrome.runtime
      .sendMessage({
        action: 'extensionStatus',
        status: {
          active: bhashaIMEActive,
          language: currentLanguage,
        },
      })
      .catch((error) => {
        console.log('Could not send status to extension:', error);
      });
  }
});

// Handle page navigation
function handlePageNavigation() {
  // Re-initialize if needed
  if (!bhashaIMEActive) {
    initializeContentScript();
  }
}

// Listen for page changes (SPA navigation)
let lastUrl = location.href;
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    setTimeout(handlePageNavigation, 100);
  }
}).observe(document, { subtree: true, childList: true });

// Initialize when script loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeContentScript);
} else {
  initializeContentScript();
}

// Handle page reload/refresh
window.addEventListener('beforeunload', () => {
  // Cleanup if needed
  if (injectorScript) {
    try {
      injectorScript.remove();
    } catch (error) {
      console.log('Error removing injector script:', error);
    }
  }
});

// Export for debugging
window.bhaShaIMEContentScript = {
  getStatus: () => ({ active: bhashaIMEActive, language: currentLanguage }),
  setLanguage: setBhaShaIMELanguage,
  reinitialize: initializeContentScript,
};
