"use strict";


// #1. Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the
// user if they enter invalid input.
while (true) {
    const userNumber = prompt("Enter an odd number between 1 and 50:");
    const number = parseInt(userNumber);

    if (number >= 1 && number <= 50 && number % 2 !== 0) {
        console.log(`Number to skip is: ${number}`);
        break;
    }
}

// #2. Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the
// user entered.
for (let i = 1; i <= 50; i++) {
    if (i === number) {
        console.log(`Yikes! Skipping number: ${i}`);
        continue;
    }
    if (i % 2 !== 0) {
        console.log(`Here is an odd number: ${i}`);
    }
}