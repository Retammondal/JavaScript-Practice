// Simple ATM Menu 
// Create the following menu: 
// 1. Check Balance 
// 2. Deposit Money 
// 3. Withdraw Money 
// 4. Exit 
// Use switch-case. 
// Rules: 
// ● Check Balance → Display current balance 
// ● Deposit → Add money to balance 
// ● Withdraw → Check whether sufficient balance exists 
// ● Exit → Display a goodbye message 
// ● Invalid choice → Display an error message 


console.log(`
    Check the following menu: 
 1. Check Balance 
 2. Deposit Money 
 3. Withdraw Money 
 4. Exit `);

let currentBalance = 52000;
let depositAmount = 20000;
let withdrawAmount = 2500;

let option = 2;

switch (option) {
    case 1 : console.log(`You have Selected Check Balance..
        Showing Your Current Balance -- ${currentBalance}`); break;
    case 2 : 
        currentBalance += depositAmount;
        console.log(`You have Selected Deposit Money..
            Deposit Amount is -- ${depositAmount},
            Showing Your Current Balance -- ${currentBalance}`); break;
    case 3 : 
        currentBalance -= withdrawAmount;
        console.log(`You have Selected Withdraw Money..
            Withdraw Amount is -- ${withdrawAmount},
            Showing Your Current Balance -- ${currentBalance}`); break;
    case 4 : 
        console.log(`You have Selected Exit..
            Thank You! Have a Nice Day..`); break;
    default :
        console.log("Invalid Choice");
}