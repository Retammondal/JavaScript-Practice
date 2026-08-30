// Extract User Names 
// Create an array of user objects containing name and email. Use map() to create a new array containing 
// only the names. 
// Example: 
// Input: 
// [ 
// { name: "Rahul", email: "rahul@example.com" }, 
// { name: "Priya", email: "priya@example.com" } 
// ] 
// Output: 
// ["Rahul", "Priya"] 

const userName = [ 
    { name: "Rahul", email: "rahul@example.com" }, 
    { name: "Priya", email: "priya@example.com" } 
] 

console.log(`\nExtracting Name only from Username Array > Object using Map`);
const nameOnly = userName.map(function(data){
    return data["name"];
})
console.log(nameOnly);