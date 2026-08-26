// Positive, Negative or Zero 
// Take a number and determine whether it is: 
// ● Positive 
// ● Negative 
// ● Zero 

let number = 26;
let numSign = null;

// switch (number) {
//     case <0:
//         numSign = Negative;
// }
// Its not possible
console.log("Switch Operator");

switch (true){
    case (number<0):
        numSign = "Negative"
        break;
    case (number===0):
        numSign = "Zero"
        break;
    default:
        numSign = "Positive";
    }

console.log(`Sign of the Number is ${numSign}`);

// Using Ternary Operator
console.log("--------------------");
console.log("Ternary Operator");

let numSign2 = null;

numSign2 = (number < 0) ? "Negative" : (number === 0) ? "Zero" : "Positive";
console.log(`Sign of the Number is ${numSign2}`);
