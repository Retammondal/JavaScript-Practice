// Basic while Loop 
// Write a program to print numbers from 1 to 10 using a while loop. 
// 1. Sum of Even Numbers 
// Write a program to calculate the sum of all even numbers from 1 to 20. 
// 2. Stop the Loop Using break 
// Write a program using a while loop to print numbers from 1 onwards, but stop the loop when the 
// number reaches 6 using the break statement.  
// Expected Output: 1 2 3 4 5 
// 3. Skip a Number 
// Print numbers from 1 to 10, but skip the number 5 using the continue statement. 

console.log("\nSum of all Even Numbers [1-20]\n");
let totalNum = 0;
let i = 1;
while (i<=20){
    totalNum += i;
    i ++;
}
console.log(totalNum);

console.log("\nStop loop using break\n");
let totalNum1 = 0;
let i1 = 1;
while (i1<=20){
    if (i1===6){
        break;
    }
    totalNum1 += i1;
    console.log(i1);
    i1 ++;
}
console.log(totalNum1);

console.log("\nSkip a number using continue\n");
let totalNum2 = 0;
let i2 = 1;
while (i2 <= 10){
    if (i2===5){
        i2++ // Important part; Must needed to give otherwise loop will stop
        continue;
    }
    totalNum2 += i2;
    console.log(i2);
    i2 ++;
}
console.log(totalNum2);