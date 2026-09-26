// 3. Student Marks 
// Create variables for marks of three subjects. 
// Calculate: 
// ● Total marks 
// ● Average marks 
// ● Percentage 
// Assume every subject is out of 100. 

// let subjects are Math, Chemistry, Physics
let mathMarks = 99;
let chemistryMarks = 96;
let physicsMarks = 98;

let totalMarks = mathMarks + chemistryMarks + physicsMarks;
let averageMarks = (totalMarks/3).toFixed(2);
let percentageMarks = ((totalMarks/300) *100).toFixed(2);

console.log(
`       Students Marks
    -----------------------------
    Total Marks =  ${totalMarks}
    Average Marks =  ${averageMarks}
    % got in Marks =  ${percentageMarks}`
);