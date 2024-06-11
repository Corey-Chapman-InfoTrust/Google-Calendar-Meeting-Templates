// content.js
console.log("loaded");

// Call the function to inject the button when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        console.log('Timer Reached');
    }, 4000);
});

// // Function to create your button
// function createButton() {
//     var button = document.createElement("button");
//     button.innerHTML = "Meetings Suck!";
//     // Add event listener to the button if needed
//     button.addEventListener("click", function () {
        
//         // Button click logic
//         console.log("Button clicked!");
//     });
//     return button;
// }

// // Function to find the specific div in the Google Calendar meeting description box and inject your button
// function injectButton() {
//     var descriptionBox = document.querySelector(".KCm9Q.lR3h6d");
//     if (descriptionBox) {
//         var button = createButton();
//         descriptionBox.appendChild(button);
//     } else {
//         console.log("Meeting description box not found.");
//     }
// }



// tap into the URL, /eventedit when someone clicks "more options"
// when someone clicks Create -> Event
// can potentially listen for specific element visibility 