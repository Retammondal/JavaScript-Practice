// Add a New Property Using map() 
// Create an array of product objects containing name and price. Use map() to create a new array where 
// each product also has an inStock property with the value true. 
// Example: 
// Input: 
// [ 
// { name: "Laptop", price: 50000 }, 
// { name: "Mouse", price: 500 } 
// ] 
// Output: 
// [ 
// { name: "Laptop", price: 50000, inStock: true }, 
// { name: "Mouse", price: 500, inStock: true } 
// ] 

const productList =  [ 
    { name: "Laptop", price: 50000 }, 
    { name: "Mouse", price: 500 } 
];

console.log(`\nAdding New property using map and Spread`);
const updateList1 = productList.map(data=>{
    return {...data, inStock: true};
})
console.log(updateList1);

console.log(`\nAdding New property using map only`);
const updateList2 = productList.map(object =>{
    object["inStock"] = true;
    return object;
})
console.log(updateList2);