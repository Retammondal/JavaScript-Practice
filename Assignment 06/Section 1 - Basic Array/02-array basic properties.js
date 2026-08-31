// 1. Add an Element Using push()
// Create the following array and use push() to add "JavaScript" at the end.
// Example:
// Input: ["HTML", "CSS"]
// Output: ["HTML", "CSS", "JavaScript"]
// 2. Remove an Element Using pop()
// Remove the last element from the given array using pop().
// Example:
// Input: ["HTML", "CSS", "JavaScript"]
// Output: ["HTML", "CSS"]
// 3. Remove the First Element Using shift()
// Remove the first element from the following array using shift().
// Example:
// Input: ["Red", "Blue", "Green"]
// Output: ["Blue", "Green"]
// 4. Add an Element at the Beginning
// Use unshift() to add "HTML" at the beginning of the following array.
// Example:
// Input: ["CSS", "JavaScript"]
// Output: ["HTML", "CSS", "JavaScript"]

let array = ["Mango", "Orange", "Apple", 56, 58.56, true, undefined, null];

console.log(`\nPushing an Element -->`);
array.push("JavaScript");
console.log(array);

console.log(`\nPushing an Element (Number) -->`);
array.push(23);
console.log(array);

console.log(`\nRemoving the last element -->`);
array.pop();
console.log(array);

console.log(`\nAdding the first element -->`);
array.unshift("Red");
console.log(array);

console.log(`\nRemoving the first element -->`);
array.shift();
console.log(array);