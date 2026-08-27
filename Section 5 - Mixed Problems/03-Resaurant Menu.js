// Restaurant Menu 
// Create the following menu: 
// 1. Burger  → ₹150 
// 2. Pizza   → ₹250 
// 3. Pasta   → ₹180 
// 4. Sandwich → ₹120 
// Take the customer’s choice and quantity. 
// Use switch-case to calculate the total price. 
// Example: 
// Choice: 2 
// Quantity: 3 
 
// Total: ₹750 

let menu = [
    ["Burger" , 150],
    ["Pizza" , 250],
    ["Sandwitch" , 120]
]

let choice = 2;
let quantity = 3;

// based on the given data
let choiceMenuName = menu[choice - 1][0];
let choiceMenuPrice = menu[choice - 1][1];

console.log(`You have choosed ${quantity} pcs. of ${choiceMenuName} priced at ${choiceMenuPrice}
        Your Total Bill will be - ${choiceMenuPrice * quantity}`);


console.log("--------------------------------------------------------------------------------------");

// Method 02

// Display the menu
console.log("=== Restaurant Menu ===");
console.log("1. Burger   -> ₹150");
console.log("2. Pizza    -> ₹250");
console.log("3. Pasta    -> ₹180");
console.log("4. Sandwich -> ₹120");

let choice2 = 4;
let quantity2 = 5;

let itemName = "";
let itemPrice = 0;

switch (choice2){
    case 1 : 
        itemName = "Burger";
        itemPrice = 150;
        break;
    case 2 : 
        itemName = "Pizza";
        itemPrice = 250;
        break;
    case 3 : 
        itemName = "Pasta";
        itemPrice = 180;
        break;
    case 4 : 
        itemName = "Sandwich";
        itemPrice = 120;
        break;
    default : console.log("Invalid Data");
}

console.log(`You have choosed ${quantity2} pcs. of ${itemName} priced at ${itemPrice}
        Your Total Bill will be - ${itemPrice * quantity2}`);