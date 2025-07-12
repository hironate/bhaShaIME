/* global chrome */

// DOM elements
const languageOptions = document.querySelectorAll('.language-option');

// Initialize popup
async function initializePopup() {
  try {
    // Get current language from storage
    const result = await chrome.storage.sync.get(['currentLanguage']);
    const currentLanguage = result.currentLanguage || 'english';

    updateUI(currentLanguage);

    // Add event listeners
    languageOptions.forEach((option) => {
      option.addEventListener('click', handleLanguageChange);
    });

    // Check if bhaShaIME is active on current tab
    checkBhaShaIMEStatus();
  } catch (error) {
    console.error('Error initializing popup:', error);
  }
}

// Handle language change
async function handleLanguageChange(event) {
  const languageCode = event.currentTarget.dataset.lang;

  try {
    // Save to storage
    await chrome.storage.sync.set({ currentLanguage: languageCode });

    // Update UI
    updateUI(languageCode);

    // Send message to content script
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tabs[0]) {
      await chrome.tabs.sendMessage(tabs[0].id, {
        action: 'changeLanguage',
        language: languageCode,
      });
    }

    // Visual feedback
    showStatusChange();
  } catch (error) {
    console.error('Error changing language:', error);
  }
}

// Update UI to reflect current language
function updateUI(languageCode) {
  // Update active language option
  languageOptions.forEach((option) => {
    option.classList.remove('active');
    if (option.dataset.lang === languageCode) {
      option.classList.add('active');
    }
  });
}

// Show visual feedback for status change
function showStatusChange() {
  const activeOption = document.querySelector('.language-option.active');
  if (activeOption) {
    const indicator = activeOption.querySelector('.status-indicator');
    indicator.classList.add('changing');
    setTimeout(() => {
      indicator.classList.remove('changing');
    }, 300);
  }
}

// Check if bhaShaIME is active on current tab
async function checkBhaShaIMEStatus() {
  try {
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tabs[0]) {
      await chrome.tabs.sendMessage(tabs[0].id, {
        action: 'getStatus',
      });
    }
  } catch (error) {
    // Tab might not be ready or content script not loaded
    console.log('Content script not ready:', error);
  }
}

// Listen for messages from content script
chrome.runtime.onMessage.addListener((message, _sender, _sendResponse) => {
  if (message.action === 'statusUpdate') {
    console.log('Status update received:', message.active);
  }
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePopup);

// Handle storage changes
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === 'sync' && changes.currentLanguage) {
    updateUI(changes.currentLanguage.newValue);
  }
});
