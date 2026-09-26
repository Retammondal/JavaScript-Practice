// Calculate Final Cart Total 
// Create an array of cart items containing name, price, and quantity. Use reduce() to calculate the final 
// cart total by multiplying the price and quantity of each item. 
// Example 
// Input: 
// [ 
// { name: "Mouse", price: 500, quantity: 2 }, 
// { name: "Keyboard", price: 1000, quantity: 1 } 
// ] 
// Output: 
// 2000 

const cart = [
    { name: "Mouse", price: 500, quantity: 2 },
    { name: "Keyboard", price: 1000, quantity: 1 },
    { name: "Monitor", price: 12000, quantity: 1 },
    { name: "Mouse", price: 500, quantity: 1 }, // Repeated item
    { name: "USB Cable", price: 300, quantity: 3 },
    { name: "Keyboard", price: 1200, quantity: 2 }, // Repeated item (different brand/price)
    { name: "Headphones", price: 2500, quantity: 1 }
];

console.log(`\nGetting Cart Total Only--> `);
const cartTotal = cart.reduce((acc,value)=>
    acc += value.price * value.quantity
,0)

console.log(cartTotal);

const cartTotalDetails = cart.reduce((acc,value)=>{
    let productDetail = acc[0];
    // let cartTotal = acc[1]; giving local variable will be wrong
        // 1. Calculate and update individual product total
    let itemTotal = value.quantity * value.price;
    // why [0] b/c in 1st obje is present
    if (!(value.name in productDetail)){
        productDetail[value.name] = itemTotal;
    }
    else{
        productDetail[value.name] += itemTotal;
    }
    // adding total each time in total cart
    acc[1] += (itemTotal);
    return acc
}
,[{},0])

console.log(`\nGetting Cart Total along with Product Details --> `);
console.log(cartTotalDetails);