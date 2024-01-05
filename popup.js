// Function to handle the popup button click event
function handleClick() {
  // Send a message to content script to get the search volume data
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'getSearchVolume' });
  });
}

// Register click event listener for the popup button
document.getElementById('searchButton').addEventListener('click', handleClick);
