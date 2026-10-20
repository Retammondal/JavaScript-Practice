"use strict"; // 1. Strict mode catches uninitialized variables in the TDZ and prevents accidental globals.

/**
 * ==========================================
 * MODULAR STATE MACHINE & PIPELINE ENGINE
 * ==========================================
 * 
 * FOCUS (90%): 
 * - Nested execution architecture (parent setup returning a staged function chain).
 * - Closures maintaining step registries (`queue`) across execution frames.
 * - Call Stack management: Sequential execution via reduce instead of deep recursion.
 * - Dynamic `this` management (returning `this` for chaining, arrow functions for lexical inheritance).
 * - Type Coercion guards: Preventing implicit string concatenation ("10" + 5 = "105") and checking NaN.
 * 
 * PAST REVISION (10%): 
 * - Higher-order array transformers (map, reduce).
 * - Rest parameters (...args).
 * - Spread operator (...) for immutable config cloning.
 * - Dynamic bracket notation.
 * 
 * REQUIREMENTS:
 * 1. Build `createPipeline(initialConfig)`. It initializes a private `queue`, `history`, 
 *    and an immutable clone of the config using the Spread operator.
 * 2. Implement `.pipe(transformFn)`. It adds functions to the queue and returns `this` 
 *    to allow method chaining.
 * 3. Implement `.execute(...records)`. It uses Rest parameters to accept multiple data objects.
 * 4. Inside `.execute`, use an arrow function `processRecord` to process data. This ensures 
 *    lexical `this` inheritance. Process the record through the `queue` using `.reduce()`.
 * 5. Coercion Shield: Inside the reduce loop, enforce that `record.value` is strictly a Number 
 *    to avoid string concatenation bugs. Throw an error if it results in `NaN`.
 * 6. Create two independent pipelines to prove they have isolated closure memory.
 
 */

function createPipeline(initialConfig){
    // Private Variables (Closure)
    const queue = [];
    const history = [];

    // Clone the initial Configuration
    // Why? If someone change the initialConfig later, it should preserve new...
    const config = {...initialConfig};

    return {
        pipe(transformFn) {
            queue.push(transformFn);
            return this;
            // this.queue.push(transformFn) adds the function to the queue.
            // return this returns the salesPipeline object so you can call .pipe() again.
        },
        
        // here each record will be an Object
        // records = [{},{},...]
        execute(...records){
            const processRecord = (item)=>{
                return queue.reduce((acc,transformFunc)=>{
                    // COERCION SHIELD: Verify strictly Number and block NaN
                    if (typeof acc.value !== 'number' || Number.isNaN(acc.value)) {
                        throw new TypeError(`Type Coercion Guard Violation: value must be a strict Number. Received: ${typeof acc.value} (${acc.value})`);
                    }
                    let updatedItem = transformFunc(acc);
                    return updatedItem;
                },item)
            }
            // Local array to hold just this output
            const batchResult = []

            for (let eachRec of records){
                let finalObj = processRecord(eachRec)
                batchResult.push(finalObj);
                // Track internally in the private history audit log
                history.push({ configId: config.id, timestamp: new Date(), output: { ...finalObj } });
            }
            return batchResult;
        },
        getHistory : history
    }
}





// Testing Data //---------------------------------------------------------------
// 1. Initialize Pipeline A (Standard Account)
const standardPipeline = createPipeline({ id: "standard-tier", factor: 1.0 });
// 2. Initialize Pipeline B (VIP Account - Completely Isolated)
const vipPipeline = createPipeline({ id: "vip-tier", factor: 2.5 });

// 3. Giving the Transform Functions....
standardPipeline
  .pipe((record) => {
    // Step 1: Add a base bonus of 10
    record.value += 10;
    return record;
  })
  .pipe((record) => {
    // Step 2: Multiply by 2
    record.value *= 2;
    return record;
  });


vipPipeline.pipe((record) => {
  // VIP gets a massive bonus step
  record.value += 100;
  return record;
});
// ---------------------------------------------------------------
// 3. Execution Data
const record1 = { id: "user_01", value: 5 };
const record2 = { id: "user_02", value: 20 };
const brokenRecord = { id: "user_03", value: "50" }; // Triggers the Coercion Shield

// 4. Running the Pipelines
console.log("\n--- Pipeline A Results ---");
console.log(standardPipeline.execute(record1, record2));


console.log("\n--- Pipeline B Results ---");
console.log(vipPipeline.execute({ id: "user_04", value: 10 }));

console.log("\nPipeline A History----");
console.log(standardPipeline.getHistory);