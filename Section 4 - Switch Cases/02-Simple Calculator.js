// Simple Calculator 
// Take: 
// ● First number 
// ● Second number 
// ● Operator 
// Supported operators: + - * / % 
// Use switch-case. 
// Example: 
// First number: 20 
// Second number: 5 
// Operator: * 
// Output: 100 
// Also handle division by zero;

let num1 = 25;
let num2 = 5;
let operator = "/";
let output;

switch (operator){
    case "+" : output = num1 + num2; break;
    case "-" : output = num1 - num2; break;
    case "*" : output = num1 * num2; break;
    case "/" : 
        if (num1 === 0 || num2 === 0){
            output = "NaN"
        }
        else{
            output = num1 / num2; break;
        }
    case "%" : output = num1 % num2; break;
}

console.log(`With Numbers ${num1} and ${num2} using Operator ${operator},
    Output is ${output}`);