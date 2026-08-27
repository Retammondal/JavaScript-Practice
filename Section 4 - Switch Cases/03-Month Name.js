// Month Name 
// Take a number from 1 to 12. 
// Use switch-case to display the corresponding month. 
// Example: 
// 1  → January 
// 2  → February 
// 3  → March 
// ... 
// 12 → December 
// For an invalid number: 
// Invalid month 

let monthNumber = 0;
let monthCheck;

switch (monthNumber) {
    case 1 : monthCheck = "January"; break;
    case 2 : monthCheck = "February"; break;
    case 3 : monthCheck = "March"; break;
    case 4 : monthCheck = "April"; break;
    case 5 : monthCheck = "May"; break;
    case 6 : monthCheck = "June"; break;
    case 7 : monthCheck = "July"; break;
    case 8 : monthCheck = "August"; break;
    case 9 : monthCheck = "September"; break;
    case 10 : monthCheck = "October"; break;
    case 11 : monthCheck = "November"; break;
    case 12 : monthCheck = "December"; break;
    default: monthCheck = "Invalid"; // Catches 0, negative numbers, and numbers > 12
}
console.log(`Calculated from Switch Expression, Month is ${monthCheck}`);


// Method 02
let monthCheck2 = {
    1 : "January",
    2 : "February",
    3 : "March",
    4 : "April",
    5 : "May",
    6 : "June",
    7 : "July",
    8 : "August",
    9 : "September",
    10 : "October",
    11 : "November",
    12 : "December"
}

for (i=1; i<=12; i++){
    if (monthNumber === i){
        console.log("Calculated from Object-For loop; Month is ",monthCheck2[i]);
        break;
    }
    else if(monthNumber != i) {
        console.log("Calculated from Object-For loop; Month is ","Invalid");
        break;
    }
}

// Did for the switch case portion to copy paste;
// for (i=1; i<=12; i++){
//     console.log(`case ${i} : monthCheck = "${monthCheck2[i]}"; break;`);
// }