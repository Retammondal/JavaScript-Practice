// Add a Currency Symbol to Prices 
// Create an array of product prices and use map() to create a new array where each price is displayed with 
// a ₹ symbol. 
// Example: 
// Input: 
// [100, 250, 500] 
// Output: 
// ["₹100", "₹250", "₹500"]

const priceList = [100,250,500,364];
console.log(`\nAdding Symbol in Price list using Map`);

const symPriceList = priceList.map(price => "₹" + price);
console.log(symPriceList);

// But note as we are adding like + ; it's converting to string
for (i of symPriceList){
    console.log(typeof(i));
}
