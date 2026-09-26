// Project : Smart Tip & Bill Split Calculator

// Goal: Create a CLI function that calculates the total bill amount including tip and splits it evenly among group members.

// Concepts Practiced: Functions with default parameters [25], arithmetic operators [40], Math.round() / 
// .toFixed() number formatting , and template literals .

// Requirements:
// Write a function splitBill(totalAmount, numPeople = 1, tipPercentage = 10).
// Calculate tip amount and per-person breakdown.
// Return a formatted string output using template literals.

function splitBill(totalAmount, numPeople = 1, tipPercentage = 10){
    let tipAmount = (totalAmount * tipPercentage)/100;
        tipAmount = Math.round(tipAmount);
    let finalAmount = totalAmount + tipAmount;
    let perPersonAmount = finalAmount / numPeople;
        perPersonAmount = Math.round(perPersonAmount);

    console.log(`\nTotal Amount of Bill = ${totalAmount}`);
    console.log(`Total Tip given (with ${tipPercentage}%) = ${tipAmount}`);
    console.log(`--------------------------------------`);
    console.log(`Final Bill = ${finalAmount}`);
    console.log(`--------------------------------------`);
    console.log(`Total No. of People = ${numPeople}`);
    console.log(`Each Person will give = ${perPersonAmount}`);
    console.log(`--------------------------------------`);
    console.log();
    console.log(`Final Summary -->
        Tip = ${tipAmount}
        Bill Splitted among Each = ${perPersonAmount}`);
}

// Testing
splitBill(350, 3, 12)