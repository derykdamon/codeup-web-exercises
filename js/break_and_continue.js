//Break and Continue - Prompt for an odd number and output odd numbers:
while (true) {
    const userNumber = prompt("Enter an odd number between 1 and 50:");
    const number = parseInt(userNumber);

    if (number >= 1 && number <= 50 && number % 2 !== 0) {
        console.log(`Number to skip is: ${number}`);
        break;
    }
}

for (let i = 1; i <= 50; i++) {
    if (i === number) {
        console.log(`Yikes! Skipping number: ${i}`);
        continue;
    }
    if (i % 2 !== 0) {
        console.log(`Here is an odd number: ${i}`);
    }
}