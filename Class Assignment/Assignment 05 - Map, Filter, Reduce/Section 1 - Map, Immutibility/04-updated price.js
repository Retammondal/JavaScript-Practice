// Create Updated Product Prices 
// Create an array of product prices. Use map() to create a new array where every price is increased by 
// 10%. Keep the original array unchanged. 
// Example: 
// Input: 
// [100, 200, 300] 
// Output: 
// Original: [100, 200, 300] 
// New: [110, 220, 330] 

const productPrices = [100,250,340,152,364];

console.log(`\nUpdating Product prices each by 10%`);
const updatedProduct = productPrices.map(value=>{
    value = (value*1.1).toFixed(2);
    return Number.parseFloat(value); //converting to number
});
console.log(updatedProduct);

console.log(`\nShow Product prices with updated price inside array`);
const updatedProductList = productPrices.map(function(value){
    let updateValue = (value*1.1).toFixed(2);
    updateValue = Number.parseFloat(updateValue); //converting to number 
    let arr = {
        MRP : value,
        sellPrice : updateValue,
        Discount : Number.parseFloat((value - updateValue).toFixed(2))
    }  
    return arr;
})
console.log(updatedProductList);