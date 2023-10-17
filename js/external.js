"use strict";

//This says hello from external Javascript
console.log("Hello from external JavaScript");

// B. 1 This will show an alert that says welcome
alert("Welcome to my Website!");

// B. 2 This will prompt for a fav color
let userFavColor=prompt("What is your favorite color?");
alert(`Great, ${userFavColor} is my favorite color as well!`);

// B. 3.1

/* first try at B. 3.1 code

let littleMermaidDays = 3;
let brotherBearDays = 5;
let herculesDays = 1;
let perDay = 3;

let littleMermaidCost=prompt("How many days did you rent The Little Mermaid?","3");
console.log(littleMermaidCost);
let brotherBearCost = prompt("How many days did you rent Brother Bear?","5");
console.log(brotherBearCost);
let herculesCost = prompt("How many days did you rent Hercules","1")
console.log(herculesCost);
let Movietotal = littleMermaidCost * perDay + brotherBearCost *perDay+ herculesCost* perDay;
alert("The total cost of your movie rental is: $" + Movietotal);
*/

// Updated B.3.1 Code
let rentalRate= parseFloat(prompt("How much does it cost to rent a movie for a day?","3"));

let littleMermaidDays= parseFloat(prompt("How many days did you rent The Little Mermaid?","3"));
let brotherBearDays= parseFloat(prompt("How many days did you rent Brother Bear?","5"));
let herculesDays= parseFloat(prompt("How many days did you rent Hercules","1"));

let totalSpent = (littleMermaidDays + brotherBearDays + herculesDays) * rentalRate;

alert(`You want to rent "The Little Mermaid" for ${littleMermaidDays} days, 
"Brother Bear" for ${brotherBearDays} days, 
and "Hercules" for ${herculesDays} days. 
It costs $${rentalRate.toFixed(2)} to rent a movie for a day. 
\n\nThe final total is $${totalSpent.toFixed(2)} `);


/* first try at B.3.2

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
*/

//Updated B.3.2 Code:
let amazonRate = parseFloat(prompt("How much are you paid by Amazon per hour?","380"));
let amazonHours = parseFloat(prompt("How many hours did you work for Amazon this week?","4"));

alert(`You worked at Amazon for ${amazonHours} hours this week at a rate of $${amazonRate.toFixed(2)} per hour.
\n\n You are paid: $${(amazonHours * amazonRate).toFixed(2)}`);

let metaRate = parseFloat(prompt("How much are you paid by Meta per hour?","350"));
let metaHours = parseFloat(prompt("How many hours did you work for Meta this week?","10"));

alert(`You worked at Meta for ${metaHours} hours this week at a rate of $${metaRate.toFixed(2)} per hour.
\n\n You are paid: $${(metaHours* metaRate).toFixed(2)}`);

let googleRate = parseFloat(prompt("How much are you paid by Google per hour?","400"));
let googleHours = parseFloat(prompt("How many hours did you work for Google this week?","6"));

alert(`You worked at Google for ${googleHours} hours this week at a rate of $${googleRate.toFixed(2)} per hour.
\n\n You are paid: $${(googleHours * googleRate).toFixed(2)}`);


let finalTakeHomePay = (googleRate * googleHours) + (metaRate * metaHours) + (amazonRate * amazonHours);
alert(`Your final take home pay is: $${finalTakeHomePay.toFixed(2)}`);









