// 1. Find Index an Object Using 
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

console.log(`\nGetting Data using findIndex() where age > 20 -->`);
const subData1 = data.findIndex(value => value.age > 20);
console.log(subData1);

console.log(`\nGetting All Indexes where age > 20 -->`);
// const subData2 = data.filter((value)=>{
//     return value.age > 20
// })

const subData2 = data.reduce((acc,value,index)=>{
    if (value.age > 20)
        acc.push(index);
    return acc;
},[])
console.log(subData2);