// Even or Odd 
// Take a number and check whether it is even or odd. 
// Use the % operator. 

let number = 53;
let evenCheck = null;
if (number % 2 === 0){
    evenCheck = true
    console.log(`The Number ${number} is Even!✅`);
}
else {
    evenCheck = false;
    console.log(`The Number ${number} is Odd!❌`);

}
console.log(evenCheck);

console.log("-------------------------");
console.log("USING TERNARY OPERATOR");
// Using Ternary Operator
// let checkNum = null;
// number % 2 === 0? checkNum = Even! ✅ : Odd! ❌  // WRONG !!

let checkNum = null;
checkNum = (number % 2 === 0) ? "Even! ✅" : "Odd! ❌";
console.log(`The Number ${number} is ${checkNum}`);




// Using Switch Expression
console.log("-------------------------");
console.log("USING SWITCH OPERATOR");
let checkNum2 = null;
switch (number % 2){
    case 0:
        checkNum2 = "Even! ✅"
        break;
    default:
        checkNum2 = "Odd! ❌"
        break;
}
console.log(`The Number ${number} is ${checkNum2}`);