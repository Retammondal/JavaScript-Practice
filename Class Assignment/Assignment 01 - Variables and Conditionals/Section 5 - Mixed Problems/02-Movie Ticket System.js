// Movie Ticket System 
// Take: 
// age 
// numberOfTickets 
// Ticket prices: 
// Age below 12 → ₹100 
// Age 12–59    → ₹200  
// Age 60+      → ₹120    

// Calculate the total ticket price. 
// Example: 
// Age: 25 
// Tickets: 3 
 
// Total: ₹600


// Mentos Zindagii
let persons = [
    {nameP : "Retam",age : 16, ticket : 2},
    {nameP : "Rishob",age : 15, ticket : 3},
    {nameP : "Anushka",age : 16, ticket : 4},
    {nameP : "Rishita",age : 13, ticket : 4},
    {nameP : "Aadrika",age : 5, ticket : 2},
    {nameP : "Anima",age : 65, ticket : 1}
]

let totalTickets = 0;
let totalSell = 0;

for ( let person of persons){
    totalTickets += person["ticket"]

    let soldValue
    if (person["age"] < 12){
        soldValue = person["ticket"] * 100
    }
    else if (person["age"] < 60){
        soldValue = person["ticket"] * 200
    }
    else if (person["age"] >= 60){
        soldValue = person["ticket"] * 120
    }

    totalSell += soldValue
    console.log(`${person["nameP"]} has taken ${person["ticket"]} tickets => ${soldValue}`);
}

console.log("--------------------------------------------------------------------------------------");
console.log(`Final Result =>
    Total Tickets sold : ${totalTickets},
    Total Sell Value : ${totalSell}`);

console.log("--------------------------------------------------------------------------------------");
// Easy Zindagi
let personAge = 62;
let takenTickets = 3;

if (personAge < 12) {
    console.log(`Person with age ${personAge} has taken ${takenTickets} tickets
            => ${takenTickets} x 100 = ${takenTickets * 100}`);
}
else if (personAge < 60) {
    console.log(`Person with age ${personAge} has taken ${takenTickets} tickets
            => ${takenTickets} x 200 = ${takenTickets * 200}`);
}
else if (personAge >= 60) {
    console.log(`Person with age ${personAge} has taken ${takenTickets} tickets
            => ${takenTickets} x 120 = ${takenTickets * 120}`);
}