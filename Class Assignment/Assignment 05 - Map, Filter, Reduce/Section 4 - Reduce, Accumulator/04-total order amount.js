// Calculate Total Order Amount 
// Create an array of order objects containing amount. Use reduce() to calculate the total order amount. 
// Example: 
// Input: 
// [ 
// { amount: 500 }, 
// { amount: 1000 }, 
// { amount: 750 } 
// ] 
// Output: 
// 2250 

let amount = [ 
    { amount: 500 }, 
    { amount: 1000 }, 
    { amount: 750 } 
];

let totalAmount = amount.reduce((acc,value)=>{
    return acc += value.amount;
},0);

console.log(`\nGetting Total Amount :`,totalAmount);
