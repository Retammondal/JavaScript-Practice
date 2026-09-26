// Object Destructuring 
// Create a user object containing name, email, and role. Use object destructuring to extract name and 
// email into separate variables. 
// Example: 
// Input: 
// const user = { 
// name: "Rahul", 
// email: "rahul@example.com", 
// role: "developer" 
// }; 
// Output: 
// Rahul 
// rahul@example.com

const userObject = {
    Name : "Retam Mondal",
    Email : "Retammondal2020@gmail.com",
    Role : "Full-Stack Developer"
}

console.log(`\nStoring UserObject Name=userName, userEmail, College variable -`);
let {Name:userName, Email:userEmail, College = "IIM Calcutta"} = userObject;
console.log(`userName :`, userName);
console.log(`userEmail :`, userEmail);
console.log(`College :`, College);