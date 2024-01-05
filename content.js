// Function to receive messages from popup and background scripts
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === 'getSearchVolume') {
    // TODO: Fetch search volume data from a source and send it back to popup
    const searchVolumeData = {
      lastDay: 1000,
      lastWeek: 5000,
      last30Days: 15000,
      last6Months: 50000,
      lastYear: 100000
    };

    // Send the search volume data back to popup
    sendResponse(searchVolumeData);
  }
});
