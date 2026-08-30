// Filter Active Users 
// Create an array of users containing name and isActive. Use filter() to get only the active users. 
// Example: 
// Input: 
// [ 
// { name: "Rahul", isActive: true }, 
// { name: "Priya", isActive: false } 
// ] 
// Output: 
// [ 
// { name: "Rahul", isActive: true } 
// ] 

let user = [
  { "name": "Rahul", "isActive": true },
  { "name": "Priya", "isActive": false },
  { "name": "Amit", "isActive": true },
  { "name": "Neha", "isActive": false },
  { "name": "Vikram", "isActive": true }
];

let activeUser = user.filter(value => value.isActive === true);
console.log(`\nUsers who are Active :`);
console.log(activeUser);
