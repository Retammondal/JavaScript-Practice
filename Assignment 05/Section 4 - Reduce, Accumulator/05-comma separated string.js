// Create a Comma-Separated String 
// Create an array of frontend technologies and use reduce() to combine them into a single 
// comma-separated string. 
// Example: 
// Input: 
// ["HTML", "CSS", "JavaScript"] 
// Output: 
// "HTML, CSS, JavaScript" 

let array = ["HTML", "CSS", "JavaScript"];

let string = array.reduce((acc,value,index)=>{
    if (index === 0)
        return acc + value;
    else
        return acc + ", " + value;
},"")

console.log(`\nGetting in String -->`);
console.log(string);


// But Best way will be with join
let string2 = array.join(", ");
console.log(`\nGetting in String using Join -->`);
console.log(string2);