// Number Classification 
// Take a number. 
// Determine all applicable information: 
// ● Whether it is positive, negative or zero 
// ● Whether it is even or odd 
// ● Whether it is greater than 100, less than 100, or equal to 100 
// Example: 
// Input: 150 
// Output: 
// Positive 
// Even 
// Greater than 100 

let input = 150;
let posNegCheck = null;
let evenOddCheck = null;
let check100 = null;

// Positive Negative Check
if (input === 0){
    posNegCheck = "Zero";
}
else if(input < 0){
    posNegCheck = "Negative";
}
else{
    posNegCheck = "Positive";
}

// Even Odd check
if (input % 2 === 0){
    evenOddCheck = "Even";
}
else{
    evenOddCheck = "Odd";
}

// Greater than 100
if (input === 100){
    check100 = "Equal to 100";
}
else if (input < 100){
    check100 = "Less than 100";
}
else{
    check100 = "Greater than 100";
}

// Final Result Show Time
console.log(`Number to check ${input}
    -------------------------------
    1. Positive Negative Check = ${posNegCheck},
    2. Even Odd Chcek = ${evenOddCheck},
    3. Chcek with 100 = ${check100}`);
