"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(color) {
    color = color.toLowerCase(); // Convert the input color to lowercase for case-insensitive matching

    // Check if the color is known and return a corresponding message
    if (color === "green") {
        return "What a coincidence, that's David's favorite!";
    } else if (color === "blue") {
        return "That's Deryk's favorite color!";
    } else if (color === "amber") {
        return "Amber is the color of your energy, whooaaaa!";
    } else {
        return "I don't know anything about " + color;
    }
}

console.log(analyzeColor('blue')); // should return "That's Deryk's favorite color!"
console.log(analyzeColor('red'));  // should return "I don't know anything about red"
console.log(analyzeColor('cyan')); // should return "I don't know anything about cyan"

/* ########################################################################## */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// Get a random color from the 'colors' array
const randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
function analyzeRandomColor() {
    return analyzeColor(randomColor);
}

const result = analyzeRandomColor();
console.log(result);

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function analyzeColorSwitch(color) {
    color = color.toLowerCase();

    switch (color) {
        case 'green':
            return "What a coincidence, that's David's favorite!";
        case 'blue':
            return "That's Deryk's favorite color!";
        default:
            return "I don't know anything about " + color;
    }
}

const resultSwitch = analyzeColorSwitch(randomColor);
console.log(resultSwitch);

/* ########################################################################## */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
function promptAndAnalyzeColor() {
    // Prompt the user for their favorite color
    const userColor = prompt("What is your favorite color?");

    // Analyze the user's color and display the result
    const response = analyzeColor(userColor);
    alert(response);
}

promptAndAnalyzeColor();

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(lucky, total) {
    if (lucky === 0) {
        return total;
    } else if (lucky === 1) {
        return total * 0.9;
    } else if (lucky === 2) {
        return total * 0.75;
    } else if (lucky === 3) {
        return total * 0.65;
    } else if (lucky === 4) {
        return total * 0.5;
    } else if (lucky === 5) {
        return 0;
    } else {
        return total;
    }
}
console.log(calculateTotal(0, 100)); // should return 100 (no discount)
console.log(calculateTotal(1, 100)); // should return 90 (10% discount)
console.log(calculateTotal(2, 100)); // should return 75 (25% discount)
console.log(calculateTotal(3, 100)); // should return 65 (35% discount)
console.log(calculateTotal(4, 100)); // should return 50 (50% discount)



/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 5
const luckyNumber = Math.floor(Math.random() * 6);
const customerTotal = parseFloat(prompt("What is your total?"));
alert("Your lucky number is: " + luckyNumber);
alert("Your total before the discount is: $" + customerTotal.toFixed(2));
alert("Your price after the discount is: $" + calculateTotal(luckyNumber, customerTotal).toFixed(2));


/* ########################################################################## */

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
// Function to gather and display information about a number
function numberInput() {
    // Ask the user if they want to enter a number
    if (confirm("Would you like to enter a number?")) {
        // Prompt the user for a number input
        let userInput = parseFloat(prompt("Enter a number"));

        // Check if the input is a valid number
        if (!isNaN(userInput)) {
            // Check if the number is even or odd and display the result
            if (userInput % 2 === 0) {
                alert("The number " + userInput + " is even");
            } else {
                alert(`The number ${userInput} is odd`);
            }

            // Calculate and display the number plus 100
            alert("The number plus 100 = " + (userInput + 100));

            // Check if the number is positive, negative, or zero and display the result
            if (userInput > 0) {
                alert("The number " + userInput + " is Positive");
            } else if (userInput < 0) {
                alert("The number " + userInput + " is Negative");
            } else {
                alert("The number " + userInput + " is Zero");
            }
        } else {
            // Display an alert for invalid input
            alert("You entered something that was not a number, please try again!!");
        }
    }
}

// Call the function to start the number analysis process
numberInput();



