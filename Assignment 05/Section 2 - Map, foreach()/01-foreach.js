// Display Technologies Using forEach() 
// Create an array of frontend technologies and use forEach() to display every technology. 
// Example: 
// Input: 
// ["HTML", "CSS", "JavaScript"] 
// Output: 
// HTML 
// CSS 
// JavaScript 

const tech = ["HTML", "CSS", "JavaScript"] ;

console.log(`\nShowing all Technologies using for each..`);
tech.forEach((value,index) => {
    console.log(`Technology ${index+1} : ${value.toUpperCase()}`);
})