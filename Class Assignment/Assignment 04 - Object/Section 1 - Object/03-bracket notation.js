// Access Object Properties Using Bracket Notation 
// Create a user object containing name and email. Use bracket notation to display the email property. 
// Example: 
// Input: 
// const user = { 
// name: "Rahul", 
// email: "rahul@example.com" 
// }; 
// Output: 
// rahul@example.com

const user = { 
    name: "Rahul", 
    email: "rahul@example.com" 
}; 

let search = "email";
// console.log(`\nDisplaying Email using bracket notation :`, user[email]); // give error
// Bracket Notation -> give variables without "", string using ""

console.log(`\nDisplaying Email using bracket notation :`, user["email"]); // string call
console.log(`\nDisplaying Email using bracket notation :`, user[search]); // string call