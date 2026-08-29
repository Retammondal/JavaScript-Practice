// Get Object Keys 
// Create a user object containing name, email, and role. Use Object.keys() to get all the property names. 
// Example  
// Input: 
// const user = { 
// name: "Rahul", 
// email: "rahul@example.com", 
// role: "developer" 
// }; 
// Output: 
// ["name", "email", "role"] 

const userObject = {
    Name : "Retam Mondal",
    Email : "Retammondal2020@gmail.com",
    Role : "Full-Stack Developer"
}

console.log(`\nGetting all Keys from user Object..`);
console.log(Object.keys(userObject));

// Get Object Values 
// Create a product object containing name, price, and category. 

console.log(`\nGetting all Values from user Object..`);
console.log(Object.values(userObject));