// Access Object Properties Using Dot Notation 
// Create a product object containing name, price, and category. 
// Use dot notation to display the product name and price. 
// Example: 
// Input: 
// const product = { 
// name: "Laptop", 
// price: 50000, 
// category: "Electronics" 
// }; 
// Output: 
// Laptop 
// 50000 

const product = { 
    name: "Laptop", 
    price: 50000, 
    category: "Electronics" 
}; 
console.log(`\nGetting product name :`, product.name); // Dot Notation
console.log(`\nGetting product price :`, product["price"]); // Bracket Notation