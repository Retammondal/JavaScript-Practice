// 1. Format a Decimal Number 
// Create a variable containing the number 12.56789 ;
// display the number with two decimal places. 
// Example: 
// Output: 12.57 
// 2. Format a Price 
// Create a variable price containing a decimal value and display with two decimal places. 
// Example Input: 99.5 
// Output: 99.50 

let num = 12.56789;
console.log(`\nGetting 2 decimal value :`, num.toFixed(2));

let price = 99.5;
console.log(`\nGetting 2 decimal value of ${price} :`, price.toFixed(2));
