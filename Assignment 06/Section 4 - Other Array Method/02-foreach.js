// 1. Display Every Element Using forEach() 
// Create an array containing five colors and use forEach() to display every color.

const colors = ["Red", "Yellow", "Blue", "Green", "Orange", "Purple", "Pink", "Black"];

console.log(`\nDisplaying all the Colors :`);
colors.forEach((value,index)=>{
    console.log(`[Index ${index}] Color - ${index+1} => ${value}`);
})
