// Rest Parameters 
// Create a function named showSkills that accepts a developer's name as the first parameter and any 
// number of skills using a rest parameter. Display the name and skills. 
// Example: 
// Input: 
// showSkills("Rahul", "HTML", "CSS", "JavaScript"); 
// Output: 
// Name: Rahul 
// Skills: HTML, CSS, JavaScript 

console.log(`\nBelow Function takes first input as your name, 
    then write all the skills you had :`);

function showSkills(nameP,...skills){
    console.log(`Your Name is :`, nameP);
    console.log(`Your Following Skills are :`, skills);
}

showSkills("Retam","HTML", "CSS", "JavaScript")