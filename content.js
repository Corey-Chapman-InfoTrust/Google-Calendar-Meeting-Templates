// By Corey Chapman, InfoTrust LLC (c) 2024


//Button Injector
function addMeetingButton() {
    var descriptionBox = document.querySelector(".KCm9Q.lR3h6d");
    var statusBox = document.querySelector(".vfh3kc");
    if (descriptionBox) {
      var moreDetailsButton = document.createElement("Button");
      moreDetailsButton.innerHTML = "Meetings Suck!";
      moreDetailsButton.classList.add("moreDetailsButton");
  
      // Add event listener to the button
      moreDetailsButton.addEventListener("click", function() {

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
            descriptionField.innerHTML = `
            <b>Meeting Agenda:</b>
            <ul>
                <li>Introductions/Catch-up (5-10 min)</li>
                <li>Topics (15-20 min)</li> 
                <li>Final thoughts and action items (5-10 min)</li>
            </ul>
            <b>Topics For Discussion:</b>
            <ul>
                <li></li>
                <li></li> 
                <li></li>
            </ul>
            <b>Assign the following roles to ensure this meeting stays efficient</b>
            <ul>
                <b>Facilitator</b> - <i>Who is keeping the meeting on track?</i>
                <br>
                <b>Timekeeper</b> - <i>Someone to ensure the time efficiency of the meeting</i>
                <br>
                <b>Notetaker</b> - <i>Responsible for documenting key action items, discussions, and questions</i>
            </ul>
            <br>
            <b><i>Please arrive on time and help each other ensure the meeting ends on time!</i></b>
            `;
        } else {
        console.log("The div containing 'Add description' was not found.");
        }
      })
      
      statusBox.appendChild(moreDetailsButton);
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