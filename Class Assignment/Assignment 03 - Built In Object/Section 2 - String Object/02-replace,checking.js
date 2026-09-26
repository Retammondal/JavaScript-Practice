// 1. Replace Text 
// Create a string "Hello World" and use replace() to replace "World" with "JavaScript". 
// Example: 
// Output: "Hello JavaScript" 
// 2. Check Email 
// Create a variable email containing an email address and check whether it contains the 
// @ symbol. 
// Example:  
// Input: "user@example.com" 
// 3. Check File Extension 
// Create a variable fileName containing "assignment.pdf" and use endsWith() to check whether the file 
// has a .pdf extension. 
// 4. Remove Extra Spaces 
// Create a string with extra spaces, such as "   Hello JavaScript   ", and use trim() to remove the spaces 
// from the beginning and end. 
// Example: 
// Output: "Hello JavaScript" 
// 5. Replace a Greeting 
// Create a variable greet containing "Hello User" and use replace() to change "User" to a name of your 
// choice. 

let string = "Hello World";
console.log(`\nReplacing World with JavaScript :`, string.replace("World","JavaScript"));

let email = "Retammondal@gmail.com";
console.log(`\nChecking @ present or not? :`, email.includes("@"));

let file = "assignment.pdf";
console.log(`\nChecking file pdf or not? :`, file.endsWith(".pdf"));

let string2 = "   Hello JavaScript   ";
console.log(`\nRemoving extra spaces :`, string2.trim());

let nameP = "Retam";
let greeting = "Hello User";
console.log(`\nGreeting :`, greeting.replace("User", nameP));

