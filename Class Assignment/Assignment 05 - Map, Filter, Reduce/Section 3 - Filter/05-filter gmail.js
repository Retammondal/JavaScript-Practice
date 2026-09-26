// Filter Gmail Addresses 
// Create an array of email addresses and use filter() to get only the emails that include "@gmail.com". 
// Example: 
// Input: 
// ["rahul@gmail.com", "priya@yahoo.com", "aman@gmail.com"] 
// Output: 
// ["rahul@gmail.com", "aman@gmail.com"] 

let texts = [
    "rahul@gmailcom", 
    "priyamicrosoft.com",
    "retam@annapurnastore.com",
    "retam@zohomail.in", 
    "aman@gmail.com"
];

let emailTexts = texts.filter(value => value.includes("@") && value.includes("."));

console.log(`\nIt's Email or not; Checking @ or, . :`);
console.log(emailTexts);