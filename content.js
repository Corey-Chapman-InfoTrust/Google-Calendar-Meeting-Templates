// content.js
console.log("loaded");

// Function to inject CSS styles
function injectStyles() {
    var style = document.createElement('style');
    style.innerHTML = `
        .awesome-button {
            background-color: #ff6347; /* Tomato color */
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
            border-radius: 12px;
            border: none;
            box-shadow: 0 4px #999;
        }
        
        .awesome-button:hover {
            background-color: #ff4500; /* Darker tomato color */
        }

        .awesome-button:active {
            background-color: #ff4500;
            box-shadow: 0 2px #666;
            transform: translateY(2px);
        }
    `;
    document.head.appendChild(style);
}

//Button Injector
function addMeetingButton() {
    var descriptionBox = document.querySelector(".KCm9Q.lR3h6d");
    var statusBox = document.querySelector(".vfh3kc");
    if (descriptionBox) {
      var button = document.createElement("button");
      button.innerHTML = "Meetings Suck!";
      bustton.className = "awesome-button";
  
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

  // Inject styles when the content script is loaded
injectStyles();
  
  // Check every 500 milliseconds (adjust as needed)
  var pollingInterval = setInterval(checkForElement, 500);

// tap into the URL, /eventedit when someone clicks "more options"
// when someone clicks Create -> Event
// can potentially listen for specific element visibility