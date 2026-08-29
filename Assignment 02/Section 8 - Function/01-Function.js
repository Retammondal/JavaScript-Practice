// 1. Function with a Parameter 
// Create a function named greetUser(name) that takes a name as a parameter and displays a greeting  message.  
// Example:  
// Input: Rahul  
// Output: Hello, Rahul 
// 2. Add Two Numbers 
// Create a function that takes two numbers as parameters and returns their sum. 
// 3. Even or Odd Function 
// Create a function that takes a number and checks whether it is even or odd. 
// 4. Square of a Number 
// Create a function that takes a number and returns its square. 
// 5. Largest of Two Numbers 
// Create a function that takes two numbers and returns the greater number. 
// 6. Calculate Total Price 
// Create a function named calculateTotal(price, quantity) using a function declaration. The function 
// should calculate and display the total price.  
// Example:  
// Input: price = 100, quantity = 3  
// Output: Total Price: 300

function greetUser(name){
    console.log(`Hello, ${name}`);
}

function addTwo(num1,num2){
    return num1 + num2;
}

function evenOddCheck(num){
    if (num%2 ===0){
        console.log(`${num} is Even`);
    }
    else if (num%2 ===1){
        console.log(`${num} is Odd`);
    }
    else{
        console.log("Invalid Data..");
    }
}

function squareNum(sqnum){
    return sqnum**2;
}

function largestTwo(lar1,lar2){
    if (lar1 > lar2){
        console.log(`${lar1} is Greater than ${lar2}`);
    }
    else if (lar1 < lar2){
        console.log(`${lar2} is Greater than ${lar1}`);
    }
    else if (lar1 = lar2){
        console.log(`${lar2} is Equal than ${lar1}`);
    }
}

const totalPrice = (price, quant) => price *quant;

greetUser("Retam");
console.log(addTwo(5,46));
evenOddCheck(51);
evenOddCheck(-52);
evenOddCheck(0);
console.log(squareNum(5));
largestTwo(56,45);
largestTwo(5,45);
largestTwo(5,5);
console.log(totalPrice(334,5));