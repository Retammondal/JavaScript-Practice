// 1. Basic Calculator 
// Create two variables containing two numbers. 
// Calculate and display: 
// ● Addition 
// ● Subtraction 
// ● Multiplication 
// ● Division 
// ● Remainder 

let var1 = 56;
let var2 = 78;

let addtwo = var1 + var2;
let subtwo = var1 - var2;
let subtwoMod = Math.abs(subtwo);
let multtwo = var1 * var2;
let divtwo = var1 / var2;
let remtwo = var1 % var2;

console.log("Basic Calculator");
console.log("----------------------------------------------");
console.log(`Addition of two variable ${var1} and ${var2} 
    : ${addtwo}`);
console.log(`Substraction of two variable ${var1} and ${var2} 
    : ${subtwo}`);
console.log(`Substraction Modulas of two variable ${var1} and ${var2} 
    : ${subtwoMod}`);
console.log(`Multiplication of two variable ${var1} and ${var2} 
    : ${multtwo}`);
console.log(`Division of two variable ${var1} and ${var2} 
    : ${divtwo}`);
console.log(`Remainder of two variable ${var1} and ${var2} 
    : ${remtwo}`);