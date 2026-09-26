// 4. Shopping Bill 
// Create variables for: 
// ● Product price 
// ● Quantity 
// Calculate the total bill. 
// Then apply a discount of 
// 10%
//  and display: 
// ● Original bill 
// ● Discount amount 
// ● Final bill 

let productPrice = 299;
let quantity = 5;

let originalBill = productPrice * quantity;
let discountAmount = originalBill*10/100;
let finalBill = originalBill - discountAmount;

console.log(
`   Shopping Bill Summary
    --------------------------
    Original Bill = ${originalBill}
    Discount Amount = ${discountAmount}
    Final Bill = ${finalBill}`
);