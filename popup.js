document.getElementById('insertButton').addEventListener('click', () => {
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

  function insertTextIntoDescription() {

    // deleting the placeholder text
    var element = document.querySelector('.KCm9Q.lR3h6d');
    // Check if the element exists
    if (element) {
        // Append the string to the existing class attribute
        element.classList.add('CDELXb');
    }

    const descriptionField = document.querySelector('.hj99tb.editable');
    // Check if the div was found
    if (descriptionField) {
        // Remove the placeholder text
        descriptionField.textContent = "";

        // Insert the desired text into the div
        descriptionField.innerHTML = 
        `<h3>OOW BOY</h3>
        <b>Meetings Suck!</b>
        <br><br>
        <b><u>Agenda:</b></u>
        <li>Placeholder</li>
        `;
    } else {
    console.log("The div containing 'Add description' was not found.");
  }
}







