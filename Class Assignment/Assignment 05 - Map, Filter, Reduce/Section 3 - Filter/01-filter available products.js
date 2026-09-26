// Filter Available Products 
// Create an array of product objects containing name and inStock. Use filter() to create a new array 
// containing only the products that are in stock. 
// Example: 
// Input: 
// [ 
// { name: "Laptop", inStock: true }, 
// { name: "Mouse", inStock: false } 
// ] 
// Output: 
// [ 
// { name: "Laptop", inStock: true } 
// ] 


let products = [ 
    { name: "Laptop", inStock: true }, 
    { name: "Mouse", inStock: false },
    { name: "Desktop", inStock: true}
];
let productsStock = products.filter(value => value["inStock"]===true);

console.log(`\nProducts already in Stock....using filter() : `);
console.log(productsStock);