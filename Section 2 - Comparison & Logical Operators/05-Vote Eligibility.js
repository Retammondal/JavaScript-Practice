// Voting Eligibility 
// Take a person’s age. 
// Rules: 
// Age >= 18 → Eligible to vote 
// Age < 18  → Not eligible to vote
let nameP = "Raj";
let age = 23;

let eligibility = (age>=18)? "Eligible": "Not Eligible";
console.log(`${nameP} is ${eligibility} to Vote...`);