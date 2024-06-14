// By Corey Chapman, InfoTrust LLC (c) 2024
// todo: Modify meeting title?

const meetingNotes = `
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
              <b>Facilitator</b> - <i>Keep the meeting on track</i>
              <br>
              <b>Timekeeper</b> - <i>Ensure the time efficiency of the meeting</i>
              <br>
              <b>Notetaker</b> - <i>Responsible for documenting key action items, discussions, and questions</i>
          </ul>
          <br>
          <b><i>Please arrive on time and help each other ensure the meeting ends on time!</i></b>
          `

//More Options Button Injector
function addMeetingsSuckButton() {
  if (document.querySelector(".meetingsSuckCSS")) return; // Check to see if the buttons have already been injected. If so, return out of the function
    var moreOptionsBox = document.querySelector(".KCm9Q.lR3h6d"); // The full-screen popup box after clicking "More Options"
    var newMeetingPopup = document.querySelector("#yDmH0d > div.I2Yrs.iWO5td > div > div.ecHOgf.RDlrG.Inn9w.iWO5td > span"); // The smaller popup when clicking "New Meeting"

    if (moreOptionsBox || newMeetingPopup) {

      // Ternary Operator to set a variable to append button under
      var parentElement = moreOptionsBox ? document.querySelector(".vfh3kc") : document.querySelector("#yDmH0d > div > div > div.ecHOgf.RDlrG.Inn9w.iWO5td > span > div > div.q2nced > div.K0f0Xc > div.ZX9XLb > div.BUmX4d > div.Dna1ee.JGCEqd > span > div > div.anMZof.BVTBSc.sUvU0d"); 
      
      var meetingsSuckButton = document.createElement("Button"); // Create the button
      meetingsSuckButton.innerHTML = "Meetings Suck!"; // Modify the text within the button
      meetingsSuckButton.classList.add("meetingsSuckCSS"); // Add CSS to the button'
      if (newMeetingPopup) {
        meetingsSuckButton.classList.add("moreOptionsMeetingsSuckCSS");
      }
  
      // Add event listener to the button for when it is clicked
      meetingsSuckButton.addEventListener("click", function() {
        
        // Set a variable for the "Add description" text
        var addDescription = moreOptionsBox ? document.querySelector(".KCm9Q.lR3h6d") : document.querySelector(".KCm9Q.r7kft.u3bW4e");
        // Check if the element exists
        if (addDescription)
            // Append the string to the existing class to force it to disappear
            // TODO: Maybe delete the entire element?
            addDescription.classList.add('CDELXb');
      
        const descriptionField = document.querySelector('.hj99tb.editable'); // this is the description box
        // Check if the div was found
        if (descriptionField)
            // Insert the desired text into the div
            descriptionField.innerHTML = meetingNotes; 
      })
      
      if (moreOptionsBox || newMeetingPopup)
        parentElement.appendChild(meetingsSuckButton); // Add button below 
    }};
  
// Check every 500 milliseconds (adjust as needed)
var pollingInterval = setInterval(addMeetingsSuckButton, 500);


// //Button Injector
// function addMeetingButton() {
//   var descriptionBox = document.querySelector(".KCm9Q.lR3h6d");
//   var statusBox = document.querySelector(".vfh3kc");
//   if (descriptionBox) {
//     var moreDetailsButton = document.createElement("Button");
//     moreDetailsButton.innerHTML = "Meetings Suck!";
//     moreDetailsButton.classList.add("moreDetailsButton");

//     // Add event listener to the button
//     moreDetailsButton.addEventListener("click", function() {

//       // deleting the placeholder text
//       var element = document.querySelector('.KCm9Q.lR3h6d');
//       // Check if the element exists
//       if (element) {
//           // Append the string to the existing class attribute
//           element.classList.add('CDELXb');
//       }
    
//       const descriptionField = document.querySelector('.hj99tb.editable');
//       // Check if the div was found
//       if (descriptionField) {
//           // Remove the placeholder text
//           descriptionField.textContent = "";
    
//           // Insert the desired text into the div
//           descriptionField.innerHTML = `
//           <b>Meeting Agenda:</b>
//           <ul>
//               <li>Introductions/Catch-up (5-10 min)</li>
//               <li>Topics (15-20 min)</li> 
//               <li>Final thoughts and action items (5-10 min)</li>
//           </ul>
//           <b>Topics For Discussion:</b>
//           <ul>
//               <li></li>
//               <li></li> 
//               <li></li>
//           </ul>
//           <b>Assign the following roles to ensure this meeting stays efficient</b>
//           <ul>
//               <b>Facilitator</b> - <i>Who is keeping the meeting on track?</i>
//               <br>
//               <b>Timekeeper</b> - <i>Someone to ensure the time efficiency of the meeting</i>
//               <br>
//               <b>Notetaker</b> - <i>Responsible for documenting key action items, discussions, and questions</i>
//           </ul>
//           <br>
//           <b><i>Please arrive on time and help each other ensure the meeting ends on time!</i></b>
//           `;
//       } else {
//       console.log("The div containing 'Add description' was not found.");
//       }
//     })
    
//     statusBox.appendChild(moreDetailsButton);
//   } else {
//     console.log("Meeting description box not found.");
// }};

// function checkForElement() {
//   var targetElement = document.querySelector(".VfPpkd-YVzG2b");
//   if (targetElement) {
//     clearInterval(pollingInterval); // Stop polling once the element is found
//     addMeetingButton();
//   }
// }

// // Check every 500 milliseconds (adjust as needed)
// var pollingInterval = setInterval(checkForElement, 500);