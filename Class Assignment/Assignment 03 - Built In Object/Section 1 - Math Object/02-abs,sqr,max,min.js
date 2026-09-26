// 1. Absolute Value 
// Use Math.abs() to find the positive value of -25. 
// Example: 
// Input: -25 
// Output: 25 
// 2. Power and Square Root 
// Use Math.pow() to calculate 2 raised to the power 3 and Math.sqrt() to find the square root of 64. 

// 3. Minimum and Maximum 
// Use Math.min() and Math.max() to find the smallest and largest values from 10, 25, 5, and 18. 
// Example: 
// Minimum: 5 
// Maximum: 25

let negativeNum = -25.5;
console.log(`\nGetting Modulas of ${negativeNum} :`, Math.abs(negativeNum));

console.log(`\nPower of 2^3 :`, Math.pow(2,3));
console.log(`\nSquare Root of 64 :`, Math.sqrt(64));

// Numbers
let numList = [10,25,5,18];
console.log(`\nGetting Minimum Values among ${numList} : `, Math.min(numList)); // will return NaN
console.log(`Getting Minimum Values among ${numList} : `, Math.min(...numList)); 
console.log(`Getting Maximum Values among ${numList} : `, Math.max(...numList)); 

