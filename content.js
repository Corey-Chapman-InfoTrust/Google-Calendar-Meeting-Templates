// content.js
console.log("loaded");

//Button Injector
function addMeetingButton() {
    var descriptionBox = document.querySelector(".KCm9Q.lR3h6d");
    var statusBox = document.querySelector(".vfh3kc");
    if (descriptionBox) {
      var button = document.createElement("button");
      button.innerHTML = "Meetings Suck!";
  
      // Add event listener to the button
      button.addEventListener("click", function() {

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
      })
      statusBox.appendChild(button);
    } else {
      console.log("Meeting description box not found.");
  }};
  
  function checkForElement() {
    var targetElement = document.querySelector(".VfPpkd-YVzG2b");
    if (targetElement) {
      clearInterval(pollingInterval); // Stop polling once the element is found
      addMeetingButton();
    }
  }
  
  // Check every 500 milliseconds (adjust as needed)
  var pollingInterval = setInterval(checkForElement, 500);

// tap into the URL, /eventedit when someone clicks "more options"
// when someone clicks Create -> Event
// can potentially listen for specific element visibility