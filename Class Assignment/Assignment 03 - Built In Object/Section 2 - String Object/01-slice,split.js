// 1. Extract Part of a String 
// Create a string "JavaScript Programming" and use slice() to extract the word "JavaScript". 
// 2. Split a String 
// Create a string "HTML,CSS,JavaScript" and use split() to separate the values. 
// Example: 
// Input: "HTML,CSS,JavaScript" 
// Output: ["HTML", "CSS", "JavaScript"] 

let string = "HTML,CSS,JavaScript";
// want to extract javascript from last of string
let substring = "JavaScript";
let substringLen = substring.length;

console.log(`\nGet ${substring} from ${string} :`, substring.slice(-substringLen));

// Split
let stringArr = string.split(",");
console.log(`\nGet Array of ${string} :`, stringArr);