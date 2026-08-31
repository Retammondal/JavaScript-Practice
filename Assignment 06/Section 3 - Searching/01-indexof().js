// 1. Find the Index of an Element
// Use indexOf() to find the index of "JavaScript".
// Example:
// Input: ["HTML", "CSS", "JavaScript", "React"]
// Output: 2
// 2. Find an Element Using indexOf()
// Create an array of programming languages and use indexOf() to find the position of "React"

const skills = ["HTML", "CSS", "JavaScript", "React"];

const find1 = "JavaScript";
const find2 = "React"
console.log(`\nFinding Index of ${find1} -->`);
console.log(skills.indexOf(find1));

console.log(`\nFinding Index of ${find2} -->`);
console.log(skills.indexOf(find2));