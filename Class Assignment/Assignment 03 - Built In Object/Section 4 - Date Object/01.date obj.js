// 1. Current Date and Time 
// Create a Date object using new Date() and display the current date and time. 
// 2. Store a Specific Date 
// Create a Date object for a specific date of your choice and display it. 
// Example: new Date("2026-01-01") 
// 3. Current Timestamp 
// Use Date.now() to get and display the current timestamp. 
// 4. Simple Date Difference 
// Create two Date objects for two different dates and find the difference between them in milliseconds. 
// Example:  
// Date 1: January 1, 2026 
// Date 2: January 2, 2026 

let currentDateTime = new Date();
console.log(`\nGetting Current Date,Time in ISO format :`, currentDateTime);
console.log(`Getting Current Date,Time in String Format`, currentDateTime.toLocaleString('en-IN'));

let storeDate = new Date("2026-05-01")
console.log(`\nStored Date Format :`, storeDate.toLocaleDateString('en-IN'));

let currentTime = Date.now(); // e.g., 1724940562304
console.log(`Current time but in milisecond`, currentTime);
// console.log(currentTime.getHours());

// 1. Create a new Date object using the milliseconds
const dateObj = new Date(currentTime);

// 2. Extract the local time components
const hours = dateObj.getHours();     // e.g., 14 (for 2:00 PM)
const minutes = dateObj.getMinutes(); // e.g., 30
const seconds = dateObj.getSeconds(); // e.g., 45

console.log(`Getting Date.now() Time Information : ${hours}:${minutes}:${seconds}`); // "14:30:45"

// Get date diff
let dateDif = currentDateTime - storeDate; 
// dateDif.getHours() => will not happen
let dateObj2 = new Date(dateDif);
console.log(`\nGetting Date Difference in ms`, dateDif);