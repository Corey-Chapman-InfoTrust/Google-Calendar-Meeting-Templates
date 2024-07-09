const meetingNotes = `
          <b>Meeting Objective</b>
          <br><br>
          <i>[Clear, concise meeting objective]</i>
          <br><br>
          <b>Agenda</b>
          <ul>
              <li>
                  <b>5-10 min:</b> Introductions/Catch-up
              </li>
              <li>
                  <b>x min:</b> Topic 1 - Led by [Name]
              </li>
              <li>
                  <b>x min:</b> Topic 2 - Led by [Name]
              </li>
              <li>
                  <b>x min:</b> Topic 3 - Led by [Name]
              </li>
              <li>
                  <b>5-10 min:</b> Final thoughts and action items
              </li>
          </ul>
          <b>Assign the following roles to ensure this meeting stays efficient</b>
          <ul>
              <b>Facilitator</b> - <i>Keep the meeting on track</i>
              <br>
              <b>Timekeeper</b> - <i>Ensure the time efficiency of the meeting</i>
              <br>
              <b>Notetaker</b> - <i>Responsible for documenting key action items, discussions, and questions</i>
          </ul>
          <br>
          <b><i>Please arrive on time and help each other ensure the meeting ends on time!</i></b>
          `

function addMeetingsSuckButton() {
  // Check to see if the buttons have already been injected. If so, return out of the function
    if (document.querySelector(".meetingsSuckCSS")) return; 
    
  // Set vars to determine if you are in the popup window or the larger calendar window
    var moreOptionsBox = document.querySelector(".KCm9Q.lR3h6d"); // The full-screen popup box after clicking "More Options"
    var newMeetingPopup = document.querySelector("#yDmH0d > div.I2Yrs.iWO5td > div > div.ecHOgf.RDlrG.Inn9w.iWO5td > span"); // The smaller popup when clicking "New Meeting"

    // If either exist at the polling time, run the below code
    if (moreOptionsBox || newMeetingPopup) {
      // Ternary Operator to set a variable to append button under
      var parentElement = moreOptionsBox ? document.querySelector(".vfh3kc") : document.querySelector("#yDmH0d > div > div > div.ecHOgf.RDlrG.Inn9w.iWO5td > span > div > div.q2nced > div.K0f0Xc > div.ZX9XLb > div.BUmX4d > div.Dna1ee.JGCEqd > span > div > div.anMZof.BVTBSc.sUvU0d"); 

      if (!parentElement) return; // If the parent element doesn't exist, return out of the function
      
      var meetingsSuckButton = document.createElement("Button"); // Create the button
      meetingsSuckButton.innerHTML = "Meetings Suck!"; // Modify the text within the button
      meetingsSuckButton.classList.add("meetingsSuckCSS"); // Add CSS to the button'
      if (newMeetingPopup) {
        meetingsSuckButton.classList.add("moreOptionsMeetingsSuckCSS");
      }
  
      // Add event listener to the button for when it is clicked
      meetingsSuckButton.addEventListener("click", function() {
        // Set a variable for the "Add description" text
        var addDescription = moreOptionsBox ? document.querySelector(".KCm9Q.lR3h6d") : document.querySelector(".KCm9Q.r7kft");
        // Check if the element exists
        if (addDescription)
            // Append the string to the existing class to force it to disappear
            addDescription.classList.add('CDELXb');
      
        const descriptionField = document.querySelector('.hj99tb.editable'); // this is the description box
        // Check if the div was found
        if (descriptionField)
            // Insert the desired text into the div
            descriptionField.textContent = "";
            descriptionField.innerHTML = meetingNotes; 
      })
      
      parentElement.appendChild(meetingsSuckButton); // Add button below 
    }
}

 // Create an observer instance linked to the callback function
const observer = new MutationObserver((mutationsList, observer) => {
    for(let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        // Look for the specific elements you need
        if (document.querySelector(".KCm9Q.lR3h6d") || document.querySelector("#yDmH0d > div.I2Yrs.iWO5td > div > div.ecHOgf.RDlrG.Inn9w.iWO5td > span")) {
          addMeetingsSuckButton();
        }
      }
    }
  });   
  
// Start observing the target node for configured mutations
const targetNode = document.body;
observer.observe(targetNode, { childList: true, subtree: true });