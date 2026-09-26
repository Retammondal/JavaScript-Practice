//  Day of the Week 
// Take a number from 1 to 7. 
// Using switch-case: 
// 1 → Monday 
// 2 → Tuesday 
// 3 → Wednesday 
// 4 → Thursday 
// 5 → Friday 
// 6 → Saturday 
// 7 → Sunday 
// For any other number: 
// Invalid day 

let dayNumber = 5;
let day;
switch (dayNumber) {
    case 1: day = "Monday" ; break;
    case 2: day = "Tuesday" ; break;
    case 3: day = "Wednesday" ; break;
    case 4: day = "Thrusday" ; break;
    case 5: day = "Friday" ; break;
    case 6: day = "Saturday" ; break;
    case 7: day = "Sunday" ; break;
}

console.log(`With Day Number ${dayNumber}, Day is ${day}.`);