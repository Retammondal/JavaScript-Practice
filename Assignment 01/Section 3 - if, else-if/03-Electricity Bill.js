// Electricity Bill 
// Take the number of units consumed. 
// Calculate the bill using: 
// 0–100 units     → ₹5 per unit 
// 101–200 units   → ₹7 per unit 
// Above 200       → ₹10 per unit 
// Example: 
// Units = 250 
// First 100  → 100 × 5 
// Next 100   → 100 × 7 
// Remaining  → 50 × 10 
// Display the final bill. 

let unitsConsumed = 250;
let finalBill = 0;

if (unitsConsumed<0){console.log("Not Possible Units Given!!");}
else if(unitsConsumed <= 100) {
    finalBill = unitsConsumed*5;
    console.log(`Your Electric Consumption is ${unitsConsumed} units`);
    console.log(`Bill Breakdown : 
        ${unitsConsumed} x 5 = ${finalBill}
        --------------------------
        Total Bill = ${finalBill}`);
}
else if(unitsConsumed <= 200) {
    finalBill = 100*5 + (unitsConsumed-100)*7;
    console.log(`Your Electric Consumption is ${unitsConsumed} units`);
    console.log(`Bill Breakdown : 
        100 x 5 = 500,
        ${unitsConsumed-100} x 7 = ${(unitsConsumed-100)*7}
        --------------------------
        Total Bill = ${finalBill}`);
}
else {
    finalBill = 100*5 + 100*7 + (unitsConsumed-200)*10;
    console.log(`Your Electric Consumption is ${unitsConsumed} units`);
    console.log(`Bill Breakdown : 
        100 x 5 = 500,
        100 x 7 = 700,
        ${unitsConsumed-200} x 10 = ${(unitsConsumed-200)*10}
        --------------------------
        Total Bill = ${finalBill}`);
};
