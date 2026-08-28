// Part A - for Loop 
// 1. Print Numbers 
// Write a program to print numbers from 1 to 10 using a for loop. 
// 2. Print Even Numbers 
// Write a program to print all even numbers from 1 to 20. 
// 3. Print Odd Numbers 
// Write a program to print all odd numbers from 1 to 20. 
// 4. Reverse Counting 
// Write a program to print numbers from 10 to 1 using a loop. 
// 5. Sum of Numbers 
// Write a program to calculate the sum of numbers from 1 to 10. 
// 6. Multiplication Table 
// Take a number and print its multiplication table up to 10.

console.log("\nPrint Numbers using For Loop [1-10]\n");
for (i=1; i <= 10; i++){
    console.log(`Number ${i}`);
}

console.log("\nPrint Even Numbers using For Loop [1-20]\n");
for (i=1; i <= 20; i++){
    if(i % 2 === 0)
        console.log(`Number ${i}`);
}

console.log("\nPrint Odd Numbers using For Loop [1-20]\n");
for (i=1; i <= 20; i++){
    if(i % 2 === 1)
        console.log(`Number ${i}`);
}

console.log("\nPrint Reverse Numbers using For Loop [10-1]\n");
for (i=10; i >= 1; i--){
    console.log(`Number ${i}`);
}

console.log("\nPrint Sum of Numbers from 1-10");
let number = 0;
for (i=1; i <= 10; i++){
    number += i;
}
console.log(`Sum Calculating using for loop = ${number}`);

console.log("\nPrint Multiplication table of Numbers from 1-10");
let multNum = 7;
console.log(`Multiplication Table of ${multNum}\n`);
for (i = 1; i<=10; i++){
    console.log(`${multNum} x ${i} = ${multNum * i}`);
}