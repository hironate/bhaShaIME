// bhaShaIME Injector Script for Chrome Extension
// This script handles communication and initialization for the bhaShaIME

(function () {
  'use strict';

  // Prevent multiple injections
  if (window.bhaShaIMEExtensionLoaded) {
    return;
  }
  window.bhaShaIMEExtensionLoaded = true;

  console.log('bhaShaIME Extension: Injector script loaded');

  // Initialize the extension
  async function initializeExtension() {
    try {
      // Wait for the bhaShaIME instance to be available
      await new Promise((resolve) => {
        const checkForInstance = () => {
          if (window.bhashaIME) {
            console.log('bhaShaIME Extension: bhaShaIME instance found');
            resolve();
          } else {
            setTimeout(checkForInstance, 100);
          }
        };
        checkForInstance();
      });

      // Set up language change communication
      window.addEventListener('message', (event) => {
        if (event.source !== window) return;

        if (event.data.type === 'BHASHA_IME_LANGUAGE_CHANGE') {
          console.log(
            'bhaShaIME Extension: Language change received:',
            event.data.language,
          );

          if (window.bhashaIME && window.bhashaIME.setLanguage) {
            window.bhashaIME.setLanguage(event.data.language);
            console.log(
              'bhaShaIME Extension: Language set to:',
              event.data.language,
            );
          } else {
            console.error(
              'bhaShaIME Extension: setLanguage method not available',
            );
          }
        }
      });

      // Notify that extension is ready
      window.postMessage(
        {
          type: 'BHASHA_IME_STATUS',
          active: true,
          language: window.bhashaIME.currentLanguage || 'gujarati',
        },
        '*',
      );

      console.log('bhaShaIME Extension: Successfully initialized');
    } catch (error) {
      console.error('bhaShaIME Extension: Initialization failed:', error);
    }
  }

  // Enhanced debug functions
  window.bhaShaIMEDebug = {
    getStatus: () => {
      return {
        active: !!window.bhashaIME,
        language: window.bhashaIME?.currentLanguage || 'unknown',
        ready: !!window.bhashaIME,
        originalInstance: !!window.bhashaIME,
      };
    },
    testTransliteration: (text) => {
      if (window.bhashaIME && window.bhashaIME.bhaSha) {
        const result = window.bhashaIME.bhaSha.transliterateText(text);
        console.log('Test transliteration:', text, '→', result);
        return result;
      } else {
        console.warn('bhaShaIME not ready for transliteration test');
        return text;
      }
    },
    getOriginalInstance: () => window.bhashaIME,
    setLanguage: (lang) => {
      if (window.bhashaIME && window.bhashaIME.setLanguage) {
        window.bhashaIME.setLanguage(lang);
      } else {
        console.error(
          'bhaShaIME not available or setLanguage method not found',
        );
      }
    },
    reinitialize: () => initializeExtension(),
  };

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeExtension);
  } else {
    initializeExtension();
  }
})();
