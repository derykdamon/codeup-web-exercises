"use strict";
(() =>{

// Now, let's use JavaScript to manipulate these elements:
//
//  1. Two seconds after the page loads, change the "profile-pic" src attribute to a different image.
//  2. Four seconds after the page loads, use innerHTML to change the name in "profile-name".
//  3. Six seconds after page loads, add a new class to "profile-desc" that changes the color and font of the
//     description text.
//     Use setTimout to create these behaviors.
//  4. Write code that toggles a class on the "profile-card" that changes its background color every two seconds.
//     Use setInterval.
//
//  Bonus:
//  1. Encapsulate all your timers in a single function.

//     Instead of toggling the background color every two seconds for the "profile-card", create an array of colors
//     and programmatically change the background color every two seconds.
//     Hint: You will have to choose a RANDOM index from the array of colors.
//
//  2. After all of your timeouts have expired, bring up a prompt that will change "profile-name" text to whatever
//     the user inputs.


function changeProfile() { // This line encapsulates all timers into a single function

//  1. Function to change profile picture source after 2 seconds
        setTimeout(function () {
            //const profilePic = document.getElementById("profile-pic");
            const profilePic = document.querySelector("#profile-pic");
            profilePic.src = "/media/modelx.jpeg" ; // Image
        }, 2000);

//  2. Function to change profile name after 4 seconds
        setTimeout(function () {
            //const profileName = document.getElementById("profile-name");
            const profileName = document.querySelector("#profile-name");
            profileName.innerHTML = "DERYK"; // Replace with the new name
        }, 4000);

//  3. Function to add a new class to profile description after 6 seconds
        setTimeout(function () {
            //const profileDesc = document.getElementById("profile-desc");
            const profileDesc = document.querySelector("#profile-desc");
            profileDesc.classList.add("new-class"); // New CSS class from CSS folder
        }, 6000);

//  4. Function to toggle background color every 2 seconds
        //const profileCard = document.getElementById("profile-card");
        const profileCard = document.querySelector("#profile-card");
        const colors = ["red", "white", "blue", "green", "orange", "purple"]; //  An array of colors
        let colorIndex = 0;

        setInterval(function () {
            // Choose a random color index
            const randomIndex = Math.floor(Math.random() * colors.length);
            profileCard.style.backgroundColor = colors[randomIndex];
        }, 2000);


// Bonus
// Prompt to change profile name after all timeouts have expired
            setTimeout(function () {
                const newName = prompt("Enter a new name for the profile:");
                if (newName !== null) {
                    const profileName = document.querySelector("#profile-name");
                    profileName.innerHTML = newName;
                }
            }, 8000);
        }

changeProfile();     // This line calls the changeProfile function to start the timers and actions


})()