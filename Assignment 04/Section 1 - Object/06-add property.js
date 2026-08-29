// Add a New Property 
// Create a profile object containing name and email. 
// Add a new property named isLoggedIn with the value true. 
// Example: 
// Input: 
// { 
// name: "Rahul", 
// email: "rahul@example.com" 
// } 
// Output: 
// { 
// name: "Rahul", 
// email: "rahul@example.com", 
// isLoggedIn: true 
// } 

const userObject = {
    Name : "Retam Mondal",
    Email : "Retammondal2020@gmail.com",
    Role : "Full-Stack Developer"
}
console.log(`\nObject at start...`);
console.log(userObject);

console.log(`\nAdding Property..`);
userObject["isLoggedIn"] = true;

console.log(`\nBelow Updated Object....`);
console.log(userObject);