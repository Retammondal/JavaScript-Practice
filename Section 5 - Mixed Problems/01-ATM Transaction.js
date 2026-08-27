// ATM Transaction 
// Create variables: 
// balance 
// withdrawAmount 
// Check: 
// 1. Withdrawal amount must be greater than 0. 
// 2. Withdrawal amount must not be greater than the balance. 
// 3. If valid, subtract the withdrawal amount. 
// 4. Display the remaining balance. 
// Example: 
// Balance: ₹10000 
// Withdraw: ₹3000 
// Withdrawal successful 
// Remaining balance: ₹7000

let balance = 100000;
let withdrawAmount = 9999;

if (withdrawAmount <= 0 || withdrawAmount >= balance) {
    console.log("Please Give Right Inputs");
}
else{
    balance -= withdrawAmount;
    console.log(`Withdraw Successfully Attempted of ${withdrawAmount} Rupees.....`);
    console.log(`Remaining Balance : ${balance}`);
}