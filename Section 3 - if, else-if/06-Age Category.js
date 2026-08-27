// Age Category 
// Take a person’s age. 
// Display: 
// 0–12   → Child 
// 13–19  → Teenager 
// 20–59  → Adult 
// 60+    → Senior Citizen 
// Also handle invalid negative ages. 

let age = 16;
if (age<=0 && age>120){
    console.log("Invalid Age..");
}
else if (age <= 12) {
    console.log("You are Child");
}
else if (age <= 19 ) {
    console.log("You are Teeneger");
}
else if (age <= 59 ) {
    console.log("You are Adult");
}
else if (age > 59 ) {
    console.log("You are Senior Citizen");
}
