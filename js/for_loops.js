'use strict';

// #1. Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for
// that number (just multiply by the numbers 1 through 10)

//(Using a loop without template literals):
function showMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        const result = number * i;
        console.log(number + ' x ' + i + ' = ' + result);
    }
}

// (Using a loop with template literals):
function showMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

// Prompt the user for input
const userInput = prompt('Enter a number to display its multiplication table:');
const number = parseInt(userInput);

// Check if the user entered a valid number
if (!isNaN(number)) {
    // Function call with user input
    showMultiplicationTable(number);
} else {
    console.log('Invalid input. Please enter a valid number.');
}


// #2. Use a for loop and code from the previous lessons to generate 10 random numbers between 20 and 200 and output to
// the console whether each number is odd or even.

// Using a loop without a function):
for (let i = 0; i < 10; i++) {
    const randomNumber = Math.floor(Math.random() * (181)) + 20;
    if (randomNumber % 2 === 0) {
        console.log(`${randomNumber} is even`);
    } else {
        console.log(`${randomNumber} is odd`);
    }
}

// Using a loop with a function):
function isEvenOrOdd(number) {
    return number % 2 === 0 ? 'even' : 'odd';
}

for (let i = 0; i < 10; i++) {
    const randomNumber = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
    console.log(`${randomNumber} is ${isEvenOrOdd(randomNumber)}`);
}


// #3. Create a for loop that uses console.log to create a Pyramid Pattern.(1 22 333 4444 55555 666666 etc.)

//(Using a loop without template literals):
for (let i = 1; i <= 9; i++) {
    console.log(String(i).repeat(i));
}

// (Using a loop with template literals):
for (let i = 1; i <= 9; i++) {
    console.log(`${i}`.repeat(i));
}


// #4. Create a for loop that uses console.log to count down to 5, by 5, from 100
// For Loop - Counting Down:

for (let i = 100; i >= 5; i--) {
    console.log(i);
}

//or

for (let i = 100; i >= 5; i -= 5) {
    console.log(i);
}








