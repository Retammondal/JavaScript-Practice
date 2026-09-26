// Largest of Three Numbers 
// Take three numbers and find the largest number using if-else. 
// Do not use arrays or any built-in maximum function.

let num1 = 25;
let num2 = 30;
let num3 = 27;

// Largest of Three Numbers
switch (true) {
    case (num1 > (num2 && num3)):
        console.log(`${num1} is Greatest`);
        break;
    case (num2 > (num1 && num3)):
        console.log(`${num2} is Greatest`);
        break;
    case (num3 > (num1 && num2)):
        console.log(`${num3} is Greatest`);   
        break; 
}