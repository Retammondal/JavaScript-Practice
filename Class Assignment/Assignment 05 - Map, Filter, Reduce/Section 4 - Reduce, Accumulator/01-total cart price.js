// Calculate the Total Cart Price 
// Create an array of product prices and use reduce() to calculate the total price of all items in the cart. 
// Example: 
// Input: 
// [500, 1200, 300] 
// Output: 
// 2000 

let itemsPrice = [500, 1200, 300, 350, 150];

let totalPrice = itemsPrice.reduce((acc,value) =>{
    return acc += value;
},0);

console.log(`\nGetting Sum of Price of all items`, totalPrice);
