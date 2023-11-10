//While Loop - Generate a series:
let num = 2;

while (num <= 65536) {
    console.log(num);
    num *= 2;
}



//Do While Loop - Ice Cream Seller
let allCones = Math.floor(Math.random() * 50) + 50;

do {
    const conesToSell = Math.floor(Math.random() * 5) + 1;

    if (conesToSell <= allCones) {
        console.log(`${conesToSell} cones sold...`);
        allCones -= conesToSell;
    } else {
        console.log(`Cannot sell you ${conesToSell} cones. I only have ${allCones}...`);
    }

} while (allCones > 0);

console.log("Yay! I sold them all!");















