// 1. Remove an Element Using splice()
// Remove "CSS" from the following array using splice().
// Example:
// Input: ["HTML", "CSS", "JavaScript", "React"]
// Output: ["HTML", "JavaScript", "React"]
// 2. Add an Element Using splice()
// Use splice() to add "CSS" between "HTML" and "JavaScript".
// Example:
// Input: ["HTML", "JavaScript"]
// Output: ["HTML", "CSS", "JavaScript"]

const skills = ["HTML", "CSS", "JavaScript", "React"];
console.log(`\nInitial Array Skills -->`);
console.log(skills);

// Splice Method ==> Mutable (Change in Real)
// Syntax : array.splice(startIndex, deleteCount, item1, item2, ...)
console.log(`\nRemoving the 2nd Element only -->`);
skills.splice(1,1);
console.log(skills);

console.log(`\nAdding CSS,Tailwind CSS in 2nd place -->`);
skills.splice(1,0,"CSS","Tailwind CSS");
console.log(skills);