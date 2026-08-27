// Electricity Bill + Discount 
// Take the electricity units consumed. 
// Calculate the bill using: 
// 0–100       → ₹5/unit 
// 101–200     → ₹7/unit 
// Above 200   → ₹10/unit 
// Then apply: 
// Bill >= ₹2000 → 10% discount 
// Otherwise     → No discount 
// Display: 
// Units 
// Original Bill 
// Discount 
// Final Bill 

let unitsConsumed = 350;
let finalBill = 0;

if (unitsConsumed<0){console.log("Not Possible Units Given!!");}
else if(unitsConsumed <= 100) {
    finalBill = unitsConsumed*5;
    console.log(`Your Electric Consumption is ${unitsConsumed} units`);
    console.log(`Bill Breakdown : 
        ${unitsConsumed} x 5 = ${finalBill}`)
}
else if(unitsConsumed <= 200) {
    finalBill = 100*5 + (unitsConsumed-100)*7;
    console.log(`Your Electric Consumption is ${unitsConsumed} units`);
    console.log(`Bill Breakdown : 
        100 x 5 = 500,
        ${unitsConsumed-100} x 7 = ${(unitsConsumed-100)*7}`)
}
else {
    finalBill = 100*5 + 100*7 + (unitsConsumed-200)*10;
    console.log(`Your Electric Consumption is ${unitsConsumed} units`);
    console.log(`Bill Breakdown : 
        100 x 5 = 500,
        100 x 7 = 700,
        ${unitsConsumed-200} x 10 = ${(unitsConsumed-200)*10}`)
};

console.log("----------------------------------------");

let discountGiven = 0;
console.log(`Total Bill = ${finalBill}`);
if (finalBill >= 2000){
    discountGiven = finalBill * 0.1;
    console.log(`You are eligible for 10% discount..
        Discount = ${discountGiven}
        ------------------------
        Final Bill = ${finalBill-discountGiven}`);
}
