// Convert Product Names to Uppercase 
// Create an array of product names and use map() to create a new array where every product name is 
// converted to uppercase. 
// Example: 
// Input: 
// ["laptop", "mobile", "headphones"] 
// Output: 
// ["LAPTOP", "MOBILE", "HEADPHONES"]

// const variable = arrayName.map(function);

const productName = ["laptop", "mobile", "headphones"] ;

console.log(`\nConverting Products Names to Uppercase using Map..`);
const productNameUpper = productName.map( (product) => {
    return product.toUpperCase();
})
console.log(productNameUpper);

const productNameUpper2 = productName.map(function(product){
    return product.toUpperCase();
})
console.log(productNameUpper2);