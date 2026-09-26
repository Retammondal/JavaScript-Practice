// 1. Find an Object Using find()
// Create an array of user objects containing name and age. Use find() to get the user whose name is
// "Rahul".
// Example:
// Input:
// [
// { name: "Rahul", age: 20 },
// { name: "Priya", age: 22 }
// ]

const data = [
    { name: "Rahul", age: 20 },
    { name: "Priya", age: 22 },
    { name: "Sruti", age: 21 }
];

console.log(`\nGetting Data using find() where age > 20 -->`);
const subData1 = data.find(value => value.age > 20);
console.log(subData1);

// But probelm with find or, findindex will only give 1st one; 
// To get all use Filter()

console.log(`\nGetting Data using filter() where age > 20 -->`);
const subData2 = data.filter(value => value.age > 20);
console.log(subData2);
