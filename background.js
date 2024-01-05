// Function to handle the background script messages
chrome.runtime.onMessage.addListener(function (message) {
  if (message.action === 'saveKeyword') {
    // TODO: Save the keyword to a planner or perform any other action
    console.log('Keyword saved:', message.keyword);
  }
});
