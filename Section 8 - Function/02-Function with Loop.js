// 1. Print Numbers Using a Function 
// Create a function printNumbers(n) that prints numbers from 1 to n using a loop. 
// Example: 
// Input: 5 
// Output: 1 2 3 4 5
// 2. Multiplication Table Function 
// Create a function printTable(num) that prints the multiplication table of the given number. 
// 3. Sum from 1 to N 
// Create a function sumNumbers(n) that calculates and returns the sum of numbers from 1 to n. 
// Example: 
// Input: 5 
// Output: 15 

function printNumbers(n){
    for(i=1; i<=n; i++)
        console.log(`Number ${i}`);
    i++;
}

function printTable(n2){
    console.log(`\nMultiplication Table of ${n2}`);
    i =1;
    while (i<=10){
        console.log(`${n2} x ${i} = ${n2*i}`);
        i++;
    }
}

function sumNumbers(n){
    console.log(`\nSum of Numbers from 1 to ${n}`);
    let sum = 0;
    i = 1;
    while (i<=n){
        sum+=i;
        i++;
    }
    return sum;
}

printNumbers(8);
printTable(9);
console.log(sumNumbers(7));