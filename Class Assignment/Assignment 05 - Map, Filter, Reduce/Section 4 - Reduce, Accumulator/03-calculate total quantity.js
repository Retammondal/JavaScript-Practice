// Calculate the Total Quantity 
// Create an array of cart item objects containing name and quantity. Use reduce() to calculate the total 
// quantity of all items. 
// Example: 
// Input: 
// [ 
// { name: "Laptop", quantity: 1 }, 
// { name: "Mouse", quantity: 2 } 
// ] Output: 
// 3 

let products = [
  { "name": "Laptop", "quantity": 1 },
  { "name": "Mouse", "quantity": 2 },
  { "name": "Mouse", "quantity": 2 },
  { "name": "Keyboard", "quantity": 1 },
  { "name": "Keyboard", "quantity": 1 },
  { "name": "Monitor", "quantity": 2 },
  { "name": "Monitor", "quantity": 2 },
  { "name": "Headphones", "quantity": 3 }
];

let totalQuantity = products.reduce((acc,value) =>{
    return acc += value.quantity
} ,0)
console.log(`\nCounting Total Products (Quantity) :`, totalQuantity);

let getProductsCount = products.reduce((acc,value)=>{
    if (!(value.name in acc)){
        acc[value.name] = value.quantity
    }
    else{
        acc[value.name] += value.quantity
    }
    return acc;
},{})

console.log(`\nGet Product wise Quantity Details :`);
console.log(getProductsCount);
