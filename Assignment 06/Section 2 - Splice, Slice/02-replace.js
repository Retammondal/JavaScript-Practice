// 1. Replace an Array Element
// Use splice() to replace "Java" with "JavaScript".
// Example:
// Input: ["HTML", "CSS", "Java"]
// Output: ["HTML", "CSS", "JavaScript"]

const skills = ["HTML", "CSS", "JavaScript", "React"];
console.log(`\nInitial Array Skills -->`);
console.log(skills);

console.log(`\nReplacing 3rd element with Java -->`);
skills.splice(2,1,"Java");
console.log(skills);