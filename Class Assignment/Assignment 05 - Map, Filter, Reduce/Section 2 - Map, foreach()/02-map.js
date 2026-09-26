// Create a New Array Using map() 
// Using the same array of frontend technologies, use map() to create a new array where every technology 
// is converted to uppercase. 
// Example: 
// Input: 
// ["html", "css", "javascript"] 
// Output: 
// ["HTML", "CSS", "JAVASCRIPT"]

const tech = ["HTML", "CSS", "JavaScript"] ;

console.log(`\nShowing all Technologies using map..`);
const techMap = tech.map(value=>value.toUpperCase());
console.log(techMap);

