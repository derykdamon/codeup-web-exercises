"use strict";

//This says hello from external Javascript
console.log("Hello from external JavaScript");

//This will show an alert that says welcome
alert("Welcome to my Website!");

//This will prompt for fav color
let userFavColor=prompt("What is your favorite color?");

alert('Great, ' + userFavColor +'  is my favorite color as well!');

// #3 Variables
let littleMermaidDays = 3;
let brotherBearDays = 5;
let herculesDays = 1;
let perDay = 3;

// #3A Operators
let littleMermaidCost=prompt("How many days did you rent The Little Mermaid?","3");
let brotherBearCost = prompt("How many days did you rent Brother Bear?","5");
let herculesCost = prompt("How many days did you rent Hercules","1")
let Movietotal = littleMermaidCost * perDay + brotherBearCost *perDay+ herculesCost* perDay;
alert("The total cost of your movie rental is: $" + Movietotal);

// #3B Variables
let googleHourly = 400;
let amazonHourly = 380;
let metaHourly = 350;

// #3B Operators
let googleHoursWorked = prompt("How many hours did you work at Google?" , "6");
let amazonHoursWorked = prompt("How many hours did you work at Amazon?" , "4");
let metaHoursWorked = prompt("How many hours did you work at Meta?" , "10");
let companyTotal = googleHourly * googleHoursWorked + amazonHourly * amazonHoursWorked + metaHourly * metaHoursWorked;
alert("Your total payment for the week is: $" +companyTotal);









