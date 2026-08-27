// Menu-Based Calculator 
// Create this menu: 
// 1. Addition 
// 2. Subtraction 
// 3. Multiplication 
// 4. Division 
// 5. Modulus 
// Take the user’s choice and two numbers. 
// Use switch-case to perform the selected operation. 

let menu = "Division";
let num1 = 10;
let num2 = 0;
let output;

switch (menu){
    case "Addition" : output = num1 + num2; break;
    case "Subtraction" : output = num1 - num2; break;
    case "Multiplication" : output = num1 * num2; break;
    case "Division" : 
        // Safeguard against division by zero
        output = (num2 !== 0) ? (num1 / num2) : "Error: Cannot divide by zero"; 
        break;
    case "Modulus" : output = num1 % num2; break;
    default: output = "Not Valid"; break;
}

console.log(`Output will be ${output}`);