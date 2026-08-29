// Traffic Signal 
// Take a traffic signal color: 
// "red" 
// "yellow" 
// "green" 
// Use switch-case. 
// Display: 
// red    → Stop 
// yellow → Wait 
// green  → Go 
// For any other value: 
// Invalid signal 


let trafficSignalColor;
trafficSignalColor = "Yellow";

switch (trafficSignalColor){
    case "Red": console.log(`Signal is Red; Stop..`); break;
    case "Yellow": console.log(`Signal is Yellow; Wait..`); break;
    case "Green": console.log(`Signal is Green; Go..`); break;
}
