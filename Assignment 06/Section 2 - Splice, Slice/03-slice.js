// 1. Create a Copy Using slice()
// Create an array of your choice and use slice() without any arguments to create a copy of that array.
// 2. Extract Part of an Array
// Use slice() to create a new array containing "CSS", "JavaScript", and "React".
// Example:
// Input: ["HTML", "CSS", "JavaScript", "React", "Node.js"]
// Output: ["CSS", "JavaScript", "React"]

// Slice ==> Immutable
// Syntax : array.slice(startIndex, endIndex) ; endIndex excluded...
const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
console.log(`\nInitial Array Skills -->`);
console.log(skills);

console.log(`\nExtracting 1st to 3rd Element -->`);
const subSkills = skills.slice(1,4);
console.log(subSkills);

console.log(`\nCreating a Copy using Slice() -->`);
const subSkills2 = skills.slice();
console.log(subSkills2);

