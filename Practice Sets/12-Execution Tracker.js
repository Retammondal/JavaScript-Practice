/**
 * ==========================================
 * EXECUTION TRACKER & COUNTER FACTORY (CLOSURES)
 * ==========================================
 * 
 * FOCUS (90%): 
 * - Closures acting as an inner function's persistent "backpack"
 * - Retaining live references to outer variables in memory
 * - Preventing garbage collection of parent variables
 * - Generating independent execution contexts across multiple instances
 * - Returning function references (return func) rather than immediate executions
 * 
 * PAST REVISION (10%): 
 * - Date.now() timestamps
 * - Template literals
 * 
 * REQUIREMENTS:
 * 1. Create a factory function `createTracker(trackerName)` that initializes 
 *    private variables `count = 0` and `createdAt = Date.now()`.
 * 2. Return an inner function reference without executing it immediately.
 * 3. Each time the inner function is invoked, increment `count` and log a formatted 
 *    string using template literals (name, total invocations, elapsed ms).
 * 4. Instantiate two distinct trackers and call them alternately to prove isolated memory.
 * 5. Demonstrate the difference between calling the stored function repeatedly versus 
 *    executing `createTracker("Temp")()` multiple times.
 */

/*
 * ==========================================
 * Real-Life Scene
 * ==========================================
// In real-life software development, this project represents a System Health & Analytics Monitor.

// Imagine you are running a backend server for an app (like Netflix or an e-commerce store). 
// Behind the scenes, different parts of your server are doing different jobs:

// One part handles Authentication (Auth): Logging users in.
// Another part handles the Database (DB): Searching for movies or products.

// You want to track exactly how many times each of these systems is used, 
// and how long they've been running, so you can monitor your server's performance.
*/

function createTracker(trackerName){
    let count = 0;
    let createdAt = Date.now();

    return function innerFunc(){
        count ++;
        let elapsedTime = Date.now() - createdAt;
        console.log(trackerName, count, elapsedTime);
    }
}

const auth = createTracker("Authentication");
const db = createTracker("DataBase");


console.log("\nName, Total Invocation, Elapsed in ms :");
console.log("---------------------------------------");
// They remember their own counts independently!
auth();
auth();
db();
db();
db();
db();
db();
db();
db();
db();
db();
auth();

console.log("\nName, Total Invocation, Elapsed in ms :");
console.log("---------------------------------------");
// By not saving the returned function to a variable, the closure is instantly 
// thrown away (garbage collected) after it runs. The next line creates a brand new 
// tracker from scratch.
createTracker("Sample Data")();
createTracker("Sample Data")();