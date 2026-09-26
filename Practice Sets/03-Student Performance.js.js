// Project : Student Grade & Performance Evaluator

// Goal: Write a program that processes a student object containing subject scores, 
// computes the overall average, and determines their grade.

// Concepts Practiced: Object literals , for...in or Object.values() iteration , 
// and the switch(true) pattern for score range evaluation .

// Requirements:
// Take a student object (e.g., { name: "Alice", scores: { Math: 88, Science: 94, English: 79 } }).
// Calculate average score across all subjects.
// Evaluate grade ('A', 'B', 'C', 'F') using switch(true).

const studentData = [
    {
        name : "Retam",
        scores : {
            Math : 96,
            Physics : 98,
            Chemistry : 90,
            English : 90,
            Bengali : 81
        }
    },
    {
        name : "Anuska",
        scores : {
            Math : 94,
            Science : 98,
            English : 93,
            Bengali : 91
        }
    },
    {
        name : "Rishob",
        scores : {
            Math : 79,
            Science : 76,
            English : 70,
            Bengali : 71
        }
    },
    {
        name: "Ayan",
        scores: {
            Math: 72,
            Science: 75,
            English: 78,
            Bengali: 68
        }
    },
    {
        name: "Sneha",
        scores: {
            Math: 55,
            Science: 62,
            English: 50,
            Bengali: 63
        }
    },
    {
        name: "Rohit",
        scores: {
            Math: 35,
            Science: 42,
            English: 48,
            Bengali: 41
        }
    }
];

console.log();
// Iterate over Array
for (let eachStud of studentData){
    let name = eachStud.name;
    let scoresObj = eachStud.scores;                // Scores Object
    let scoreArr = Object.values(scoresObj);        // Scores Array List

    let totalMarks = scoreArr.length * 100;
    let obtainedMarks = 0;
    for (let mark of scoreArr){
        obtainedMarks += mark;
    }
    let averageMarks = Math.round(obtainedMarks/scoreArr.length);
    let grade = "Not Defined"
    
    switch (true){
        case (averageMarks>=90):
            grade = "A"
            break;
        case (averageMarks>=80):
            grade = "B"
            break;
        case (averageMarks>=70):
            grade = "C"
            break;
        case (averageMarks>=60):
            grade = "D"
            break;
        case (averageMarks>=50):
            grade = "D"
            break;
        default:
            grade  = "Fail"
            break;
    }

    console.log(`Student's Name --> ${name}
        Total Marks in Exam : ${totalMarks}
        Total Marks Obtained : ${obtainedMarks}
        Average Marks Got : ${averageMarks}
        Grade => ${grade}`);
    console.log("-----------------------------");
}



