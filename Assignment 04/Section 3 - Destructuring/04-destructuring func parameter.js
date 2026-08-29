// Destructure Function Parameters 
// Create a function named displayUser that receives a user object. 
// Use object destructuring in the function parameters to access and display name and email. 
// Example: 
// Input: 
// displayUser({ 
// name: "Rahul", 
// email: "rahul@example.com" 
// }); 
// Output: 
// Rahul 
// rahul@example.com

const userObject = {
    Name : "Retam Mondal",
    Email : "Retammondal2020@gmail.com",
    Role : "Full-Stack Developer"
}

function displayUser({Name,Email,Role,College = "IIM Calcutta"}){
    console.log('Name :', Name);
    console.log('Emailid :', Email);
    console.log('College :', College);
}

// Passing Function Parameter = object
console.log(`\nPassing Object as Parameter in Function - `);
displayUser(userObject);