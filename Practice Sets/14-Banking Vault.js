/**
 * ==========================================
 * ENCAPSULATED BANKING VAULT & STATEMENT ENGINE
 * ==========================================
 * 
 * FOCUS (90%): 
 * - Private state encapsulation using closures (avoiding global scope pollution)
 * - Returning an inner function that accepts operations/arguments via chained calls
 * - Preventing variable destruction across calls
 * - Explicit numeric validation with Number.isNaN()
 * - Strict value vs reference verification for PIN matches (===)
 * 
 * PAST REVISION (10%): 
 * - Array mutators (push)
 * - Higher-order array methods (reduce, filter)
 * - Object destructuring
 * - switch(true) pattern for action routing
 * 
 * REQUIREMENTS:
 * 1. Write `createVault(initialPin, initialBalance)` that stores `pin`, `balance`, 
 *    and a `transactions` array privately inside its execution context.
 * 2. Return an inner authentication function that expects a `enteredPin` argument.
 * 3. Verify the PIN strictly. If correct, return an API object containing methods: 
 *    `deposit`, `withdraw`, `getStatement`, `getSummary`.
 * 4. In `deposit` & `withdraw`: Validate amounts strictly. Reject negative numbers, 
 *    invalid strings, or NaN inputs using `Number.isNaN(Number(amount))`.
 * 5. In `withdraw`: Use `switch(true)` to validate limits against the current balance.
 * 6. Push transaction records `{ type, amount, date: Date.now() }` into `transactions`.
 * 7. In `getSummary()`: Use `.reduce()` on the private transaction log to compute 
 *    total deposits and withdrawals.
 * 
 * ==========================================
 * Real-Life Scene: Secure Payment Gateways & ATMs
 * ==========================================
 * In real-world web applications, exposing a user's balance directly on the global 
 * `window` object (e.g., `window.userBalance = 5000`) is a massive security risk. 
 *  Any malicious script could easily change `window.userBalance = 9999999`.
 * 
 * By using a Closure, we lock the `balance` and `transactions` inside a private vault. 
 * The ONLY way to interact with the money is through the specific "API methods" 
 * (deposit/withdraw) that we expose, which contain strict validation rules. Even if 
 * a hacker tries to modify the data in the console, the actual memory space is 
 * completely inaccessible from the outside.
 */

function createVault(initialPin, initialBalance){
    const pin = initialPin;
    let balance = initialBalance;

    const transactions = [];

    return function(enterPin){
        if (enterPin !== pin){
            return `Your Entered Pin ${enterPin}; Not Correct...`
        }
        return {
            deposit(amount) {
                // Reject Negative Numbers....
                if (amount===0){
                    return "Enter Amount Greater than 0"
                } 
                if (amount<0){
                    return "Negative Numbers not Allowed.."
                }
                // Invalid Strings --> Fails in Number Coercien --> Number Checking
                let amountNum = Number(amount)                  // converting all values to Number
                let numberCheck = Number.isNaN(amountNum)      // true/ NaN if String passed
                if (numberCheck){
                    return "Enter Correct Number";
                }

                balance = balance + amountNum;
                transactions.push({
                    type : "Deposit",
                    amount : amountNum,
                    date : Date.now()
                })

                return `Successfully Deposited ${amount}`
            },

            withdraw(amount) {
                // Reject Negative Numbers....
                if (amount===0){
                    return "Enter Amount Greater than 0";
                } 
                if (amount<0){
                    return "Negative Numbers not Allowed..";
                }
                // Invalid Strings --> Fails in Number Coercien --> Number Checking
                let amountNum = Number(amount)                  // converting all values to Number
                let numberCheck = Number.isNaN(amountNum)      // true/ NaN if String passed
                if (numberCheck){
                    return "Enter Correct Number";
                }

                // Validate Limits against Current Balance
                switch(true){
                    case (amountNum>balance):
                        return `${amount} is not available..`
                        break;
                    case (amountNum===balance):
                        return `Minimum Possible Withdrawl amount - ${balance}`;
                        break;
                }

                balance = balance - amountNum;
                transactions.push({
                    type : "Withdraw",
                    amount : amountNum,
                    date : Date.now()
                })

                return `Successfully Withdrawn ${amount}`
            },

            getStatement(){
                return transactions;
            },

            getSummary(){
                const totalDep = transactions.reduce((acc,value)=>{
                    if (value.type === "Deposit"){
                        acc = acc+(value.amount);
                    }
                    return acc;
                },0)
                const totalWith = transactions.reduce((acc,value)=>{
                    if (value.type === "Withdraw"){
                        acc = acc+(value.amount)
                    }
                    return acc;
                },0)
                return {
                    deposits : totalDep,
                    withdrawls : totalWith,
                    balance : balance
                }
            }
        }
    }
}

console.log();

// --- TEST CASES ---

console.log("--- SECURE BANKING VAULT INITIALIZED ---");
const myAccountAccess = createVault(1234, 1000);

console.log("\n--- TESTING UNAUTHORIZED ACCESS ---");
const hackerAttempt = myAccountAccess(9999);
console.log(hackerAttempt);                             // Should print "Access Denied..."

console.log("\n--- TESTING AUTHORIZED ACCESS ---");
const api = myAccountAccess(1234);

console.log(api.deposit(500));         
console.log(api.withdraw("invalid"));  // Should fail NaN validation
console.log(api.withdraw(-200));       // Should fail negative number validation
console.log(api.withdraw(5000));       // Should fail insufficient funds
console.log(api.withdraw(200));        

console.log("\n--- TRANSACTION SUMMARY ---");
console.log(api.getSummary());         
// Expected: { deposits: 500, withdrawals: 200 }

console.log("\n--- FULL STATEMENT ---");
console.log(api.getStatement());