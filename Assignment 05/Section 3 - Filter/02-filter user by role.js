// Filter Users by Role 
// Create an array of user objects containing name and role. 
// Use filter() to get all users whose role is "developer". 
// Example: 
// Input: 
// [ 
// { name: "Rahul", role: "developer" }, 
// { name: "Priya", role: "student" } 
// ] 
// Output: 
// [ 
// { name: "Rahul", role: "developer" } 
// ] 

let users = [ 
    { name: "Rahul", role: "developer" }, 
    { name: "Priya", role: "student" } ,
    { name: "Retam", role: "Developer" } 
] 

// Making text also lowercase
let usersWithDev = users.filter(value => value["role"].toLowerCase() === "Developer".toLowerCase());

console.log(`\nGetting names only with Developer Role :`);
console.log(usersWithDev);