// Format User Names Using map() 
// Create an array of names and use map() to add the text "User: " before every name. Display the new 
// array. 
// Example: 
// Input: 
// ["Rahul", "Priya", "Aman"] 
// Output: 
// ["User: Rahul", "User: Priya", "User: Aman"] 

let names = ["Rahul", "Priya", "Aman"];
let addinName = "User: ";
let namesUpdate = names.map((value) => `${addinName}${value}`);
console.log(`\nUpdated Name using ${addinName}`);
console.log(namesUpdate);