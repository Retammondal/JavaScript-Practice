// Student Result System 
// Create variables for:
// studentName , rollNumber , mathMarks ,scienceMarks , englishMarks 
// Calculate: 
// ● Total marks 
// ● Percentage 
// ● Grade 
// ● Pass/Fail 
// Rules: 
// Pass/Fail 
// The student must score at least 
// 40 in every subject. 
// Grade 
// 90–100 → A 
// 80–89  → B 
// 70–79  → C 
// 60–69  → D 
// 40–59  → E 
// Below 40 → F 


// Display a result like: 
// ------------------------- 
// STUDENT RESULT 
// ------------------------- 
// Name       : Rahul    
// Roll No    : 101 

// Math       : 85 
// Science    : 78 
// English    : 92 

// Total      : 255 
// Percentage : 85% 
// Grade      : B 
// Result     : PASS 
// -------------------------
 
let studentProfile = {
    studentName : "Retam",
    rollNumber : 1,
    marks : {Math : 98, Science : 96, English : 91}
}

// getting only the marks array
let marksArray = Object.values(studentProfile["marks"])
// getting total marks of the marks array
let totalMarks = marksArray.reduce((acc,value)=>{
    return acc += value
},0)
let percentage = ((totalMarks / (marksArray.length * 100))*100).toFixed(2);

// Result Pass fail define
let result = "";
for (let mark of marksArray){
    if (mark<40){
        result = "FAILED";
        break;
    }
    else{
        result = "PASSED"
    }
}
// console.log(result);

// Gradde Checking
let grade = "";
if (percentage < 40){
    grade = "F";
}
else if (percentage < 60){
    grade = "E";
}
else if (percentage < 70){
    grade = "D";
}
else if (percentage < 80){
    grade = "C";
}
else if (percentage < 90){
    grade = "B";
}
else if (percentage <= 100){
    grade = "A";
}




// Result Time
console.log(`
------------------------------------
STUDENT RESULT
------------------------------------

Name        :   ${studentProfile["studentName"]}
Roll No.    :   ${studentProfile["rollNumber"]}`);
console.log(`\n--------Subject Marks-------\n`);

// All marks with subject loop print
for (const [i,j] of Object.entries(studentProfile["marks"])){
    console.log(`${i} : ${j}`);
}

console.log(`\n--------Final Showdown-------`);
console.log(`
Total Marks : ${totalMarks}
Percentage  : ${percentage}
Grade       : ${grade}
Result      : ${result}`);

console.log(`\n----------------------------`);

