// Destructuring with Renaming 
// Create a product object containing name and price. 
// Use destructuring to store the name property in a variable named productName. 
// Example: 
// Input: 
// const product = { 
// name: "Laptop", 
// price: 50000 
// }; 
// Expected Result: 
// productName = Laptop 

const product = { 
    name: "Laptop", 
    price: 50000 
}; 

console.log(`\nStoring product Name=productName, productPrice variable -`);
let {name:productName, price: productPrice} = product;
console.log(`productName :`, productName);
console.log(`productPrice :`, productPrice);
