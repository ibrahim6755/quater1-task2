const age: number = 20;
const purchaseAmount: number = 50;

if (age >= 18) {
    console.log("You are eligible for the special offer!");

    if (purchaseAmount >= 100) {
        console.log("Congratulations, you have qualified for a free gift!");
    } else {
        console.log("You are only $", 100 - purchaseAmount, "away from qualifying for a free gift!");
    }
} else {
    console.log("Sorry, you must be at least 18 years old to be eligible for the special offer.");
}
