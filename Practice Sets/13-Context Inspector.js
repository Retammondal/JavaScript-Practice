/**
 * ==========================================
 * CONTEXT INSPECTOR & METHOD BORROWER
 * ==========================================
 * 
 * FOCUS (90%): 
 * - Activating "use strict" to restrict runtime behavior.
 * - Dynamic context resolution ("left of the dot" golden rule).
 * - Bare function invocation (evaluates to undefined in strict mode).
 * - Arrow functions resolving `this` lexically (inheriting from parent).
 * 
 * PAST REVISION (10%): 
 * - Object literals
 * - Dot vs bracket notation
 * - Shorthand method syntax
 * 
 * REQUIREMENTS:
 * 1. Place "use strict"; at the top of your script.
 * 2. Create a `userProfile` object with properties (`username`, `role`) and a 
 *    method `getSummary()` using standard shorthand syntax.
 * 3. Inside `getSummary()`, access properties using `this`. Also add an inner 
 *    arrow function to prove that arrow functions inherit `this` lexically.
 * 4. Execute `userProfile.getSummary()` to verify proper dynamic binding.
 * 5. Extract the method to a variable (`detachedSummary`) and invoke it bare 
 *    to verify strict mode catches `this` as undefined.
 */

"use strict";

const userProfile = {
    username : "Retam21",
    role : "Full Stack Developer",
    getSummary() {
        console.log("Func Declaration -->",this.username, this.role);
        const arrowFunc = ()=>{
            console.log("Arrow Function -->",this.username, this.role);
        }
        arrowFunc();
    }
}

// --- TEST CASES ------------------------------------------------------

console.log("\n--- STANDARD INVOCATION (LEFT OF THE DOT) ---");
userProfile.getSummary();

// ---------------------------------------------------------
console.log("\n---  DETACHED INVOCATION (BARE CALL) ---");
const detachedSummary = userProfile.getSummary;
try {
  detachedSummary(); 
  
} catch (error) {
  console.log("Strict Mode caught the error successfully!");
  console.log("Error details:", error.message);
  // Expected Output: Cannot read properties of undefined (reading 'username')
}


// --------------------------------------------------------------------------------------------------
// Level Up
// --------------------------------------------------------------------------------------------------
const storedFunc = userProfile.getSummary;
const user2 = {
  username : "Ram",
  role : "AI Dev",
  getSummary : storedFunc
}
user2.getSummary()