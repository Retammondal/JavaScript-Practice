// Student Result 
// Take marks of three subjects. 
// A student passes only when they score 
// 40 or more in every subject. 
// If the student passes, calculate the average and display: 
// Average >= 75 → Distinction 
// Average >= 60 → First Division 
// Average >= 50 → Second Division 
// Otherwise → Pass 
// If any subject is below 40: 
// Result: Fail 

let nameP = "Retam Mondal"
let marks = {
    math : 99,
    physics : 98,
    chemistry : 90,
    biology : 80
};

// Pass/Fail Getting
let result;
for (i in marks){
    if (marks[i] < 40){
        result = "Fail"
        break; // breaking so that it not run the loop no reason
    }
    else{
        result = "Pass"
    }
}

// Average Calculation
let average;
let subjectsOnly = Object.keys(marks);
let marksOnly = Object.values(marks);
let total = marksOnly.reduce((accum, value) => {
    return accum + value;
}, 0);

if (result === "Pass"){
    average = total/marksOnly.length;
}


// Avergae giving
let averageCheck;
switch (result === "Pass"){
    case (average >= 75) : averageCheck = "Distinction" ; break;
    case (average >= 60) : averageCheck = "First Division" ; break;
    case (average >= 50) : averageCheck = "Second Division" ; break;
    default: averageCheck = "Pass"; break;
}

// Time to Print Result
console.log(`Hey! ${nameP}`);
console.log(`The Results are Out for Following Subject: ${subjectsOnly}`);
console.log(`You have got marks ${total} out of ${marksOnly.length * 100}`);
if (result === "Pass"){
    console.log("Congratulations! You Passed...");
    console.log(`Your Grades are ${averageCheck}`);
}
else{
    console.log(`Sorry to say! You failed!`);
    console.log(`Better Luck Next time!`);
}