// Update an Array Using Multiple Methods
// Perform the following operations on an array:
// 1. Add "React" using push().
// 2. Remove the first element using shift().
// 3. Display the final array.
// Example:
// Input: ["HTML", "CSS", "JavaScript"]
// Final Output: ["CSS", "JavaScript", "React"]

const skills = ["HTML", "CSS", "JavaScript"];

let text1 = "React";

skills.push(text1);
console.log(`\nAdding the ${text1} using push -->`,skills );

skills.shift();
console.log(`\nRemoving the First Element -->`,skills );
