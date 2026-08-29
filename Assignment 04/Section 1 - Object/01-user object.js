// 1. Create a User Object 
// Create an object named user containing the properties name, email, and role. 
// Display the complete object. 
// Example: 
// Output: 
// { 
// name: "Rahul", 
// email: "rahul@example.com", 
// role: "developer" 
// } 

const userObject = {
    Name : "Retam Mondal",
    Email : "Retammondal2020@gmail.com",
    Role : "Full-Stack Developer"
}

// Display the Object
console.log(`\nDisplay and Print the Object : `, userObject);
console.log("\nExtracting UserObject Details");

// Getting key and values
for ([i,j] of Object.entries(userObject)){
    console.log(`Key -> ${i} ; Value -> ${j};`);
}