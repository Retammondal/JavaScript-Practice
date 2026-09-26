// Count Total Products 
// Create an array of product names and use reduce() with an accumulator to count the total number of 
// products. 
// Example: 
// Input: 
// ["Laptop", "Mouse", "Keyboard"] 
// Output: 
// 3 

let productNames = ["Laptop", "Mouse", "Keyboard"];

let productCount = productNames.reduce((acc) =>
    acc +=1 ,0)

console.log(`\nHow much product is there? =`, productCount);
