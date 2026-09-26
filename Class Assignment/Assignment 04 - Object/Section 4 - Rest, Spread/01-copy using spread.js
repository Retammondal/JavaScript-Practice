// Copy an Object Using Spread 
// Create a user object and use the spread operator to create a copy of it. 
// Example: 
// Input: 
// const user = { 
// name: "Rahul", 
// role: "developer" 
// }; 
// Expected Result: 
// const newUser = { 
// name: "Rahul", 
// role: "developer" 
// };

const userObject = {
    Name : "Retam Mondal",
    Email : "Retammondal2020@gmail.com",
    Role : "Full-Stack Developer"
}

const newUser = {...userObject}
console.log(newUser);