document.getElementById('insertButton').addEventListener('click', () => {
  // Open the external link
  window.open('https://www.youtube.com/watch?v=xm3YgoEiEDc', '_blank');

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: insertTextIntoDescription,
      args: ["OOW BOY"]
    }, (results) => {
      if (chrome.runtime.lastError) {
          console.error('Error executing script: ', chrome.runtime.lastError.message);
      } else {
          console.log('Script executed successfully', results);
      }
    });
  });
});