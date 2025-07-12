// Background service worker for bhaShaIME Chrome Extension
/* global chrome */

// Installation and update handling
chrome.runtime.onInstalled.addListener(async (details) => {
  if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    console.log('bhaShaIME extension installed');

    // Set default language
    await chrome.storage.sync.set({ currentLanguage: 'english' });

    // Open welcome page (optional)
    // chrome.tabs.create({ url: 'welcome.html' });
  } else if (details.reason === chrome.runtime.OnInstalledReason.UPDATE) {
    console.log('bhaShaIME extension updated');
  }
});

// Handle extension startup
chrome.runtime.onStartup.addListener(() => {
  console.log('bhaShaIME extension started');
});

// Listen for messages from content scripts and popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  switch (message.action) {
    case 'getLanguage':
      // Get current language from storage
      chrome.storage.sync
        .get(['currentLanguage'])
        .then((result) => {
          sendResponse({ language: result.currentLanguage || 'english' });
        })
        .catch((error) => {
          console.error('Error getting language:', error);
          sendResponse({ language: 'english' });
        });
      return true; // Keep message channel open for async response

    case 'setLanguage':
      // Set current language in storage
      chrome.storage.sync
        .set({ currentLanguage: message.language })
        .then(() => {
          sendResponse({ success: true });
          // Broadcast to all tabs
          broadcastLanguageChange(message.language);
        })
        .catch((error) => {
          console.error('Error setting language:', error);
          sendResponse({ success: false, error: error.message });
        });
      return true;

    case 'extensionStatus':
      // Handle status updates from content scripts
      console.log('Extension status update:', message.status);
      sendResponse({ received: true });
      break;

    default:
      console.log('Unknown message action:', message.action);
      sendResponse({ error: 'Unknown action' });
  }
});

// Broadcast language change to all tabs
async function broadcastLanguageChange(language) {
  try {
    const tabs = await chrome.tabs.query({});

    for (const tab of tabs) {
      try {
        await chrome.tabs.sendMessage(tab.id, {
          action: 'languageChanged',
          language: language,
        });
      } catch (error) {
        // Tab might not have content script loaded, ignore
        console.log(`Could not send message to tab ${tab.id}:`, error.message);
      }
    }
  } catch (error) {
    console.error('Error broadcasting language change:', error);
  }
}

// Handle tab updates to inject content script if needed
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url) {
    // Skip chrome:// and extension:// URLs
    if (
      tab.url.startsWith('chrome://') ||
      tab.url.startsWith('chrome-extension://')
    ) {
      return;
    }

    // Send current language to newly loaded tab
    setTimeout(async () => {
      try {
        const result = await chrome.storage.sync.get(['currentLanguage']);
        const currentLanguage = result.currentLanguage || 'english';

        await chrome.tabs.sendMessage(tabId, {
          action: 'initializeLanguage',
          language: currentLanguage,
        });
      } catch (error) {
        // Content script might not be ready yet, ignore
        console.log(
          `Could not initialize language for tab ${tabId}:`,
          error.message,
        );
      }
    }, 100);
  }
});

// Handle storage changes
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === 'sync' && changes.currentLanguage) {
    console.log('Language changed to:', changes.currentLanguage.newValue);
    broadcastLanguageChange(changes.currentLanguage.newValue);
  }
});

// Extension action (toolbar button) click handler
chrome.action.onClicked.addListener((tab) => {
  // This will open the popup by default due to manifest configuration
  // If popup is not set, we could open options page here
  console.log('Extension action clicked for tab:', tab.id);
});

// Commands functionality removed - not needed for basic operation
// Can be added later with proper manifest configuration if keyboard shortcuts are desired

// Error handling
chrome.runtime.onSuspend.addListener(() => {
  console.log('bhaShaIME extension suspended');
});

// Keep service worker alive for better performance
const keepAlive = () => setInterval(chrome.runtime.getPlatformInfo, 20000);
chrome.runtime.onStartup.addListener(keepAlive);
keepAlive();
