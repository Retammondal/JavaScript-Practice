// 1. Random Number 
// Use Math.random() to generate and display a random number. 
// 2. Random Whole Number 
// Use Math.random() and Math.floor() to generate a random whole number between 1 and 10. 
// Example: 
// Output: Any whole number from 1 to 10 
// 3. Round a Number 
// Use Math.round() to round the number 4.6 to the nearest integer. 
// Example: 
// Input: 4.6 
// Output: 5 
// 4. Floor and Ceil 
// Use Math.floor() and Math.ceil() on the number 7.3 and display both results. 
// Example: 
// Math.floor(7.3) → 7 
// Math.ceil(7.3) → 8 

console.log(`\nGenerating Random Number [0,1) :`, Math.random());

// Random whole number b/w 1-10
let randomWhole = Math.floor((Math.random() * 10) +1);
console.log(`\nGenerating Random Whole Number [1,10] :`, randomWhole);

// Round to nearest integer
let num = 4.6;
console.log(`\nGetting Nearest Integer of ${num} :`, Math.round(num));

let num2 = 7.3;
console.log(`\nGetting Lowest Integer of ${num2} :`, Math.floor(num2));
console.log(`Getting Greatest Integer of ${num2} :`, Math.ceil(num2));