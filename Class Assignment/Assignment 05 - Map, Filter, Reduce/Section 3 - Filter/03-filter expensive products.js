// Filter Expensive Products 
// Create an array of product objects containing name and price. 
// Use filter() to get products with a price greater than 1000. 
// Example: 
// Input: 
// [ 
// { name: "Mouse", price: 500 }, 
// { name: "Keyboard", price: 1500 } 
// ] 
// Output: 
// [ 
// { name: "Keyboard", price: 1500 } 
// ] 

let products = [
  { "name": "Mouse", "price": 500 },
  { "name": "Keyboard", "price": 1500 },
  { "name": "Monitor", "price": 12000 },
  { "name": "Headphones", "price": 3500 },
  { "name": "Desk Chair", "price": 8500 }
];

let productsHighPrice = products.filter(value => value.price >= 1000);
console.log(`\nProducts with Price more than 1000 :`);
console.log(productsHighPrice);
