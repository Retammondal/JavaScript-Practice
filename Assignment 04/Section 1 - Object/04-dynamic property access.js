// Dynamic Property Access 
// Store a property name in a variable and use bracket notation to access that property from an object. 
// Example: 
// Input: 
// const user = { 
// name: "Rahul", 
// email: "rahul@example.com" 
// }; 
// const key = "name"; 
// Output: 
// Rahul

const user = { 
    name: "Rahul", 
    email: "rahul@example.com" 
}; 

const key = "name";

console.log(`\nFinding name from user object using Dynamic Variable :`, user[key]);