'use strict';


// Curriculum Notes:
// for (/*initialization*/; /*condition*/; /*increment*/) {
//     // body
// }
//
//
// for (let i = 0; i < 10; i++) {
//     console.log('for loop iteration #' + i);
// }
//
//
// let i = 0;
// // DONT DO THIS
// for (; i < 10;) {
//     console.log('for loop iteration #' + i);
//     i++;
// }
//
//
// for (let i = 0, j = 9; i < 10; i++, j--) {
//     console.log('for loop iteration #' + i + ', j = ' + j);
// }


//Exercise Problems:
//For Loops - showMultiplicationTable
function showMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

// Function call:
showMultiplicationTable(7); // Replace 7 with the desired number


//For Loop - Generate 10 random numbers:
for (let i = 0; i < 10; i++) {
    const randomNumber = Math.floor(Math.random() * (181)) + 20;
    if (randomNumber % 2 === 0) {
        console.log(`${randomNumber} is even`);
    } else {
        console.log(`${randomNumber} is odd`);
    }
}

//For Loop - Pyramid:
for (let i = 1; i <= 9; i++) {
    console.log(String(i).repeat(i));
}

//For Loop - Counting Down:
for (let i = 100; i >= 5; i -= 5) {
    console.log(i);
}









