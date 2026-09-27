// Project : CLI E-Commerce Cart & Receipt Generator

// Goal: Build a complete shopping cart management engine featuring inventory lookups, 
// item addition/removal, discount promo handling via callbacks, and formatted receipt output.

// Concepts Practiced: Nested Objects / 2D Arrays , Object methods using the this keyword, 
// Higher-Order Functions & Callback functions , 
// Array search methods (indexOf, .at(-1)), and string alignment using .padStart().

// Requirements:
// Create a cart object with state (items: []) and methods (addItem(), removeItem(), calculateTotal()) 
// utilizing this .
// Include a higher-order function applyDiscount(total, discountCallback) to apply dynamic coupon rules.
// Generate a tabular text receipt in the console using padStart()  for clean alignment.

const cart = [
    {name : "MOUSE", id : 101, price : 560, unit : 1}
]

function addItem(itemName, itemID, itemPrice, itemUnit){
    // item = {name : "MOUSE", id : 101, price : 560, unit : 1}
    itemName = itemName.toUpperCase();
    for (let item of cart){
        // Error Check or, Wrong Data Check
        if (itemID === item["id"] && itemName !== item["name"]){
            console.log(`Wrong Case!! ItemID ${itemID} exists, but Name ${itemName} not Match`);
            return;
        } else if (itemID !== item["id"] && itemName === item["name"]){
            console.log(`Wrong Case!! Name ${itemName} exist but ID ${itemID} not Match`);
            return;
        } else if (itemID === item["id"] && itemPrice !== item["price"]){
            console.log(`Wrong Case!! Price ${itemPrice} Doesn't Match with Previous ${item["price"]}..`);
            return;
        }

        if (itemID === item["id"]){
            item["unit"]+=itemUnit;
            return;
        } 
    }
    let newItem = {name : itemName, id: itemID, price: itemPrice, unit : itemUnit}
    cart.push(newItem)
}

// --- 10 Test Cases ---

console.log("\n--- Executing Test Cases ---");

addItem("MOUSE", 101, 560, 2); 
addItem("mouse", 101, 560, 1); 

addItem("KEYBOARD", 101, 560, 1);   // Same ID, different Name (Triggers: Wrong Case!! ItemID ≠ Item Name)
addItem("MOUSE", 102, 560, 1);      // Different ID, same Name (Triggers: Wrong Case!! ItemID ≠ Item Name)
addItem("MOUSE", 101, 600, 1);      // Same ID and Name, different Price 

addItem("KEYBOARD", 102, 1200, 1); 
addItem("MONITOR", 103, 8500, 2); 
addItem("keyboard", 102, 1200, 3); 

addItem("KEYBOARD", 102, 1500, 1);  // (Triggers: Wrong Case!! Price Doesn't Match..)

addItem("HEADPHONES", 104, 2500, 0); 

console.log("\n--- Final Cart State ---");
console.log(cart);


// --------------------------------------------------------------------------------------
// REMOVE ITEM
// --------------------------------------------------------------------------------------
function removeItem(itemID){
    let index = cart.findIndex(function(element){
        return element["id"] === itemID
    })
    // Safety check: Only splice if the item was actually found
    if (index !== -1) {
        cart.splice(index, 1);
    } else {
        console.log(`Item with ID ${itemID} not found.`);
    }
}
removeItem(104);
console.log(`\n--- Final Cart After Removing Item---`);
console.log(cart);

// --------------------------------------------------------------------------------------
// CALCULATE TOTAL
// --------------------------------------------------------------------------------------
function calculateTotal(){
    let total = 0;
    cart.forEach(function(element){
        let totalSold = element["price"] * element["unit"];
        total += totalSold
    })
    return total;
}



// --------------------------------------------------------------------------------------
// DISCOUNT
// --------------------------------------------------------------------------------------
function applyDiscount(discountValue ,discountCallback, total = calculateTotal()){
    return discountCallback(total,discountValue)
}
    function flatDiscount(total, discountValue){
        return total - discountValue;
    }
    function percDiscount(total, discountValue){
        return total - (total*discountValue)/100;
    }

// Two Coupon --> tenPercDis, thousandFlatDis
let tenPercDis = applyDiscount(10,percDiscount)
let thousandFlatDis = applyDiscount(1000,flatDiscount)


// --------------------------------------------------------------------------------------
// CART SUMMARY
// --------------------------------------------------------------------------------------

function cartSummary(){
    let total = calculateTotal().toFixed(2);            // 24 -> 24.00
    let discountTotal = tenPercDis.toFixed(2);
    let discount = (Number(total) - Number(discountTotal)).toFixed(2)

    console.log("--- Cart Summary ".padEnd(30,"-"));
    cart.forEach(function(element){
        console.log(element["name"].padEnd(20, " ") + (element["price"]*element["unit"]).toFixed(2).padStart(10, " "));
    })

    console.log("-".repeat(30));
    console.log("Total Value".padEnd(20, " ") + total.padStart(10, " "));
    console.log("(-Discount)".padEnd(20, " ") + discount.padStart(10, " "));
    console.log("Final Value".padEnd(20, " ") + discountTotal.padStart(10, " "));
}
cartSummary();
