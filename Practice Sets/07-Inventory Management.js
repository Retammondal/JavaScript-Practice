/**
 * ==========================================
 * INVENTORY MANAGEMENT & STOCK ADJUSTER
 * ==========================================
 * 
 * FOCUS (90%): 
 * - .splice() mutator
 * - .find() / .findIndex() short-circuit search
 * - Spread operator (...) for shallow updates
 * - for...of iteration over Object.entries()
 * 
 * PAST REVISION (10%): 
 * - Number .toFixed(2) formatting
 * - Strict equality (===)
 * 
 * REQUIREMENTS:
 * 1. Manage an inventory array of product objects ({ id, name, price, stock }).
 * 2. Implement updateStock(id, newQuantity) using .find() to locate the product 
 *    and mutate its stock count. (Optionally use the spread operator for updates).
 * 3. Implement deleteProduct(id) using .findIndex() to locate its array index 
 *    and .splice() to remove it in place.
 * 4. Print a formatted stock report using:
 *    for (const [key, value] of Object.entries(product))
 *    and format the price using .toFixed(2).
 */

let inventory = [
  { id: 1, name: "Wireless Noise-Canceling Headphones", price: 8499.00, stock: 45 },
  { id: 2, name: "Mechanical Gaming Keyboard", price: 4199.00, stock: 120 },
  { id: 3, name: "4K Ultra HD Smart Monitor (27\")", price: 24999.00, stock: 15 },
  { id: 4, name: "Ergonomic Wireless Mouse", price: 2499.00, stock: 85 },
  { id: 5, name: "Portable SSD 1TB", price: 7999.00, stock: 30 }
];

function updateStock(id, newQuantity){
    let searchProduct = inventory.find(value => value.id === id);
    // in find -- Primitives are passed by values, objects are passed by reference
    // by Mutating searchProduct properties it will mutate Original also

    searchProduct.stock += newQuantity;
};


// ----------------------------------------------------------------------------------

function deleteProduct(id){
    let removeProductIndex = inventory.findIndex(value => value.id === id);
    inventory.splice(removeProductIndex, 1)
}

// ----------------------------------------------------------------------------------

// Loop of Each Product Object --> Inside again loop
const printReport = (inventoryArray) => {
    console.log("");
    console.log("STOCK REPORT ==>");
    console.log("----------------------------------------");
    inventoryArray.forEach((product)=>{
        for (let [key,value] of Object.entries(product)){
            if (key === "price"){
                value = value.toFixed(2)
            }

            if (key === "name"){
                console.log(`${value}`);
            } else if(key === "id"){
                continue;
            } 
            else{
                console.log(`\t${key.toUpperCase().padEnd(10)}: ${value}`);
            }
        }
    })
}

// ----------------------------------------------------------------------------------
console.log();

// --- INITIAL REPORT ----------------
printReport(inventory)

// --- TEST CASES ----------------
updateStock(2, 30);
updateStock(3, 35);
updateStock(5, 45);

printReport(inventory)



