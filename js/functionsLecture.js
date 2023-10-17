"use strict";

// --------------------USING FUNCTIONS--------------------------------
// console.log(helloWorld());
// console.log(parseInt("67"));
// console.log(confirm("Would you like to submit"));

// let hello = helloWorld();
// console.log(hello);


// -------------------DEFINING FUNCTIONS----------------------------

// A function is made up of several parts. These include:

// - The keyword function
// - The name of the function(always in camel case in JS)
// - A set of parentheses
// - A body, which includes the logic you write.
// - A return statement

// * inputs(parameters) and outputs(return statements) are optional


// EXAMPLE 1
function helloWorld(){

    console.log("hi imugi")
    return "Hello World";
}

// EXAMPLE 2(A function with inputs)
function addNumbers(num1,num2){
    let sum = num1 + num2;
    return sum;
}


let sum = addNumbers(10,5);
console.log(sum);
let anotherSum = addNumbers(sum, 10);
console.log(anotherSum);

// ANONYMOUS FUNCTIONS
const increment = function(x){
    return x + 1;
}

let two = increment(1);
console.log(two);

// ARROW FUNCTIONS
function helloWorld(){

    console.log("hi imugi")
    return "Hello World";
}

const helloWorld2 = () => "hello world";

console.log(helloWorld2());


// DEFAULT FUNCTION PARAMETER VALUES



// ----------------FUNCTION SCOPE--------------------------------


// GLOBAL VARIABLES
let globalVar = "I'm a global variable ☻"
function varAlert(){
    alert(globalVar);
}

// varAlert();


// LOCAL VARIABLES

function localVarAlert(){
    let localVar = "✿ Look, I'm a local ✿";
    alert(localVar);
    alert(globalVar)
    return localVar;
}
// alert(localVar);
let local = localVarAlert();
console.log(local);
//----------------Guidelines and Best Practices-------------------

// - If your function hits 20 lines consider refactoring.
// - A function should do one thing
// - Functions should be at the top of your page

