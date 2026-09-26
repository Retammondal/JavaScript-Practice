// Update an Object Using Spread 
// Create a user object containing name and role. Use the spread operator to create a new object and 
// update the role to "developer". 
// Example: 
// Input: 
// const user = { 
// name: "Rahul", 
// role: "student" 
// }; 
// Output: 
// { 
// name: "Rahul", 
// role: "developer" 
// }

const userObject = {
    Name : "Retam Mondal",
    Email : "Retammondal2020@gmail.com",
    Role : "Full-Stack Developer"
}

const newObject = {...userObject, Role : "Full-Stack Dev + AI"}
console.log(newObject);