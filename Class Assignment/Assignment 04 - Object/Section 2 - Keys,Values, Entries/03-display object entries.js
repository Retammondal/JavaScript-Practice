// Display Object Entries 
// Create an object containing a user's name and email. 
// Use Object.entries() and forEach() to display each key along with its value. 
// Example: 
// Input: 
// const user = { 
// name: "Rahul", 
// email: "rahul@example.com" 
// }; 
// Output: 
// name: Rahul 
// email: rahul@example.com 

const userObject = {
    Name : "Retam Mondal",
    Email : "Retammondal2020@gmail.com",
    Role : "Full-Stack Developer"
}

let entries = Object.entries(userObject);
console.log(`\nDisplaying Object in Array Format :`, entries);

console.log(`\nGoing to show each properties one by one...`);
entries.forEach((element,index) => {
    console.log(`Property Index No. ${index} is :`, element);
});