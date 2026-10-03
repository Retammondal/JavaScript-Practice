/**
 * ==========================================
 * E-COMMERCE CART AGGREGATOR & COUPON ENGINE
 * ==========================================
 * 
 * FOCUS (90%): 
 * - .reduce() for single-value total calculations and object tallying
 * - Object methods using the `this` keyword
 * - Method Chaining (.filter().map().reduce())
 * - Object Destructuring with fallbacks
 * 
 * PAST REVISION (10%): 
 * - switch(true) pattern for discount evaluation
 * - Default function parameters
 * 
 * REQUIREMENTS:
 * 1. Create a `cart` object containing an `items` array and methods using `this`.
 *    `calculateTotal()`, `getCategorySummary()`
 * 2. In `calculateTotal()`: Chain .filter() (out unavailable items), .map() 
 *    (to apply a 10% tax to the price), and .reduce() to compute the final subtotal.
 * 3. In `getCategorySummary()`: Use .reduce() with an initial {} accumulator to 
 *    count items per category (e.g., { electronics: 2, apparel: 1 }).
 * 4. Write a higher-order function `applyCoupon(total, couponObj)` 
 *    that destructures coupon properties with defaults (`const { code, discount = 0.10 } = couponObj`)
 */

const cart = {
  items: [
    { name: "Laptop", category: "electronics", price: 1000, available: true },
    { name: "T-Shirt", category: "apparel", price: 200, available: true },
    { name: "Sneakers", category: "apparel", price: 800, available: false },
    { name: "Mouse", category: "electronics", price: 550.8, available: true }
  ],
  calculateTotal(){
    return this.items.filter(value => value.available === true)
    .map(({price})=>price).reduce((accumulator,currentValue)=>{
        accumulator = accumulator + (currentValue*1.10), 0
        return accumulator
    })
  },
  getCategorySummary(){
    return this.items.reduce(function(acc,{category}){
        if (category in acc){
            acc[category] += 1;
        } else{
            acc[category] = 1
        }
        return acc
    }, {})
  }
};

const couponObj1 = { code: "SAVE20", discount: 0.20 };

function applyCoupon(total, {discount = 0.10}){
    return (total * (1-discount)).toFixed(2);
}

// --- TEST CASES (Uncomment to test your code) ---

console.log("--- Subtotal ---");
const total = cart.calculateTotal();
console.log(`Total after tax: ₹${total}`);

console.log("\n--- Category Summary ---");
console.log(cart.getCategorySummary());

console.log("\n--- Applying Coupons ---");
// Expected fallback discount (10%)
console.log(`With SAVE10 (default 10%): ₹${applyCoupon(total, { code: "SAVE10" })}`); 
// Expected applied discount (20%)
console.log(`With SAVE20 (20%): ₹${applyCoupon(total, { code: "SAVE20", discount: 0.20 })}`);