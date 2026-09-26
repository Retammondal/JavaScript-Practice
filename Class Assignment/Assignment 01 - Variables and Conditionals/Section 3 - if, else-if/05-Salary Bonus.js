// Salary Bonus 
// Take an employee’s: 
// ● Salary 
// ● Years of experience 
// Bonus rules: 
// Experience >= 10 years → 20% bonus 
// Experience >= 5 years  → 10% bonus 
// Experience >= 2 years  → 5% bonus 
// Below 2 years          
// Calculate and display: 
// ● Original salary 
// ● Bonus 
// ● Final salary 

let nameP = "Retam Mondal"
let salary = 30000;
let experience = 5;
let bonusPerc;

if (experience<2) {
    bonusPerc = 0;
}
else if(experience>=2) {
    bonusPerc = 5;
}
else if(experience >= 5) {
    bonusPerc = 10;
}
else if(experience >= 10) {
    bonusPerc = 20;
};

let bonus = (salary * bonusPerc)/100;
let finalSalary = salary + bonus;
// Final Answer
console.log(`Dear ${nameP}, Your Current Salary is ${salary},
    You got experience of ${experience} Years in this field,
    So, You are getting Bonus of ${bonus},
    ----------------------
    Final Salary => ${finalSalary}`);