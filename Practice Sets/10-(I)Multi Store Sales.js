/**
 * ==========================================
 * MULTI-STORE SALES ANALYTICS PIPELINE
 * ==========================================
 * 
 * New Focus (90%): 
 * - Complex .reduce() aggregation[10]
 * - .flatMap() for flattening nested store logs[34]
 * - .findLast() for reverse searching[6]
 * - Optional Chaining (store?.sales?.)[26][40]
 * - Spread operator (...) for merging state objects[22]
 * - static Object.keys() / Object.values()[14]
 * 
 * Past Revision (10%): 
 * - Date object getters (getFullYear(), getMonth())[41]
 * - ternary conditional checks[42]
 * - Number.isNaN() validation[43]
 * 
 * REQUIREMENTS:
 * 1. Multi-Store Dataset: Create a nested data structure representing multiple store 
 *    branches, where each store contains an array of daily transaction objects.
 * 2. Reverse Transaction Lookup: Use .findLast() to instantly find the most recent 
 *    transaction over $500 across a store's log[6].
 * 3. Data Flattening & Aggregation:
 *    - Use .flatMap() to combine all transaction logs from all store branches into 
 *      a single master transaction list[34].
 *    - Use .reduce() to crunch the master list into a single report object containing: 
 *      totalRevenue, storeSalesTally (an object mapping store names to total sales)[10], 
 *      and averageTransactionValue.
 * 4. Safe Report Generation:
 *    - Use Optional Chaining (store?.metrics?.Revenue?.())[26] to safely call 
 *      reporting methods if present.
 *    - Return an updated summary object immutably using the Spread operator 
 *      (return { ...report, generatedAt: Date.now() })
 */

// -----------------------------------------------------------------------------------------
// Concept : Ternary Operator (? :) for Conditional Returns
// -----------------------------------------------------------------------------------------
// Syntax: condition ? expressionIfTrue : expressionIfFalse
// 
// Use case: A one-line shorthand for an if/else statement. Excellent for 
// dynamically deciding what to return based on whether a variable exists (is truthy).
//
// Example: 
// return branch ? branchData[branch] : allTransLargest;
// (If 'branch' was passed in, return its specific data. Else, return the fallback data).
// -----------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------
// Concept : Optional Chaining (?.) & Logical OR (||) Fallback
// -----------------------------------------------------------------------------------------
// Syntax: object?.property?.method?.() || "Fallback Value"
// 
// Use case 1 (?.) : Safely reads nested properties or calls methods. If any 
// step is missing (null/undefined), it stops and returns undefined instead of crashing.
//
// Use case 2 (||) : The Logical OR operator provides a default value if the left 
// side ends up being "falsy" (like undefined from the optional chaining).
//
// Example: 
// const localRevenue = data?.metrics?.getRevenue?.() || "Not Available";
// (Try to call getRevenue. If metrics or getRevenue doesn't exist, use "Not Available").
// -----------------------------------------------------------------------------------------

const store = [
  {
    name: "Downtown",
    transactions: [
        { id: 101, amount: 120, date: new Date("2026-10-01") },
        { id: 102, amount: 600, date: new Date("2026-10-02") } 
    ],
    metrics: { 
        getRevenue(){
            return 720
    }}
  },
  {
    name: "Uptown",
    transactions: [
      { id: 103, amount: 50, date: new Date("2026-10-01") },
      { id: 104, amount: 800, date: new Date("2026-10-03") },
      { id: 105, amount: 450, date: new Date("2026-10-04") }
    ]
  }
];

// ----------------------------------------------------------------------------------------------------
// Changing the Date Format --> Using a Loop
store.forEach(value=>{
    let transArray = value.transactions;
    // Changing the Date Format
    transArray.map(value=>value.date=value.date.toLocaleDateString('en-IN'))
})

// ----------------------------------------------------------------------------------------------------
// Function to Return Recent Large Transaction accross all, 
// if Given Branch then will give Largest Transaction accross branch
function findRecentLargeTransaction(data, branch, threshold = 500){
    const branchData = {};
    
    data.forEach(value=>{
        let branch = value.name;
        let transArray = value.transactions;
        
        let transLargest = transArray.findLast(value=>{
            return value.amount >= threshold;
        })
        branchData[branch] = transLargest
    })
    
    const allTransactions = data.flatMap(value => value.transactions)
    const allTransLargest = allTransactions.findLast(value=>{
        return value.amount >= threshold;
    })
    return branch ? branchData[branch] : allTransLargest;
}


// ----------------------------------------------------------------------------------------------------
// Returning a Report Object containing {totalRevenue, averageTransactionValue, storeSalesTally}

function generateMasterReport(data){
    const allTransactions = data.flatMap(value => value.transactions)
    const totalRevenue = allTransactions.reduce((acc,value)=>{
        acc = acc + value.amount;
        return acc
    },0)
    
    // Ternary check: If divisor is 0, default to 0; otherwise, divide.
    const averageTransactionValue = allTransactions.length !== 0 
    ? Number((totalRevenue / allTransactions.length).toFixed(2)) 
    : 0; 

    const storeSalesTally = data.reduce((acc,value)=>{
        let branchTotal = value.transactions.reduce((sum, trans) => sum + trans.amount, 0);
        acc[value.name] = branchTotal;
        return acc;
    },{})

    return {
        totalRevenue : totalRevenue,
        averageTransactionValue : averageTransactionValue,
        storeSalesTally : storeSalesTally
    }
}

// ----------------------------------------------------------------------------------------------------
// Returning a Report Object containing {totalRevenue, averageTransactionValue, storeSalesTally, Generating Time}

function finalizeReport(data, report){
    const localRevenue = data?.metrics?.getRevenue?.() || "Not Available";
    return {
        ...report,
        localRevenueReported: localRevenue,
        generatedAt : new Date(Date.now()).toLocaleDateString('en-IN')
    }
}

// --- TEST CASES ---

console.log("--- Recent Large Transaction (Downtown) ---");
console.log(findRecentLargeTransaction(store, "Downtown")); 

console.log("\n--- Master Report ---");
const rawReport = generateMasterReport(store);
console.log(rawReport);

console.log("\n--- Finalized Report (Downtown) ---");
console.log(finalizeReport(store[0], rawReport));

console.log("\n--- Finalized Report (Uptown) ---");
console.log(finalizeReport(store[1], rawReport));