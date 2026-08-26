// Student Grade 
// Take a student’s percentage. 
// Assign a grade: 
// 90–100 → A 
// 80–89  → B 
// 70–79  → C 
// 60–69  → D 
// 40–59  → E 
// Below 40 → F 
// Also check for invalid percentages below 0 or above 100. 

let grade = null;
let marks = 96;
let nameP = "Retam";

switch (true){
    case (marks<0 || marks>100) : grade = "Invalid" ; break;
    case (marks < 40) : grade = "F" ; break;
    case (marks < 60) : grade = "E" ; break;
    case (marks < 70) : grade = "D" ; break;
    case (marks < 80) : grade = "C" ; break;
    case (marks < 90) : grade = "B" ; break;
    case (marks <= 100) : grade = "A" ; break;
}

console.log(`Hey! ${nameP}, You have got marks ${marks} with grade ${grade}`);