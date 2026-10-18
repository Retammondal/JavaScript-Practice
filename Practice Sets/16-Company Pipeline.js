console.log("------------------------------1----------------------------");
// ----------------------------------------------------------------------------------------------
// A shopping application needs a private cart. 
// Customers can add products, but they should not be able to directly modify the cart array.
// Your requirements
// 1. Create a function called createCart().
// 2. Inside it, create an empty array named cart.
// 3. Return an object containing addItem(item) and getItems() methods.
// 4. addItem() should add an item to the private array.
// 5. getItems() should return a copy of the array.
// ----------------------------------------------------------------------------------------------
function createCart(){
    const cart = [];
    return {
        addItem(item){
            cart.push(item)
        },
        getItems(){
            return cart;
        }
    }
}

const user1 = createCart();
const user2 = createCart();

user1.addItem("Shoes")
user2.addItem("Nike Shoes")
user1.addItem("Iphone")
user2.addItem("Samsung Phone")

console.log(user1.getItems());
console.log(user2.getItems());

console.log("------------------------------2----------------------------");
// Safe Configuration Manager
// ----------------------------------------------------------------------------------------------
// A company wants to save a configuration without allowing changes to the saved settings 
// when the original object is modified.
// Your requirements
// 1. Create a function saveConfig(settings).
// 2. Use Spread to create a copy of settings.
// 3. Freeze the copied object.
// 4. Return the frozen copy.
// 5. Test whether changing the original object affects the saved copy.
// ----------------------------------------------------------------------------------------------

function saveConfig(settings){
    // here input setting will be an Object
    let copySettings = {...settings};
    // Freeze the object
    Object.freeze(copySettings);

    return copySettings;
}

// ----------------------------------------------------------------
// *** Concept : Object Freeze
// ----------------------------------------------------------------
// Object.freeze() is a built-in method used to make an object immutable.
// No New properties, no deletion, no updation
// Note: In normal mode -> fail silently. In Strict Mode ("use strict";) -> TypeError
// ----------------------------------------------------------------

// -------------------TESTING ---------------------
const sampleSettingAS = {
    name : "Annapurna Store",
    address : "Mallickpur",
    owner : "Alpana Mondal"
}
const annapurnaStore = saveConfig(sampleSettingAS)
console.log(annapurnaStore);
// changing to the passed original setting
sampleSettingAS.address = "Amtala"
console.log(sampleSettingAS);
console.log(annapurnaStore);

// want to change object data from the function
annapurnaStore.owner = "Retam Mondal";      // will do nothing
console.log(annapurnaStore);


console.log("------------------------------3----------------------------");
// Multiple Transaction Collector
// ----------------------------------------------------------------------------------------------
// A cashier needs a function that accepts any number of transaction objects and returns them together in an array.
// Your requirements
// 1. Create a function collectTransactions().
// 2. Accept any number of transaction objects using Rest parameters.
// 3. Return an array containing all received transactions.
// 4. Test with one, three, and zero transactions.
// ----------------------------------------------------------------------------------------------
const transaction1 = { id: 1, value: 100 };
const transaction2 = { id: 2, value: 135 };

function collectTransactions(...entries){
    return entries;
}
console.log(collectTransactions(transaction1, transaction2))
console.log(collectTransactions())              // give null array

console.log("------------------------------4----------------------------");
// Chainable Task Manager
// ----------------------------------------------------------------------------------------------
// A task manager should allow users to add several tasks in one continuous statement instead of writing separate method calls.
// Your requirements
// 1. Create a function createTaskManager().
// 2. Maintain a private tasks array.
// 3. Return an object with addTask(task) and getTasks() methods.
// 4. Make addTask() support method chaining.
// 5. Test by adding three tasks in one chain
// ----------------------------------------------------------------------------------------------
function createTaskManager(){
    const tasksList = [];
    return {
        addTask(task){
            tasksList.push(task);
            return this;
        },
        getTasks(){
            return tasksList;
        }
    }
}

const dailyTask = createTaskManager();
dailyTask.addTask("Bath")
dailyTask.addTask("Brush")
dailyTask.addTask("Study").addTask("Eating")

console.log(dailyTask.getTasks());

console.log("------------------------------5----------------------------");
// Record Processor
// ----------------------------------------------------------------------------------------------
// A store has an array of transaction records. Every transaction value must increase by ₹100 while preserving the customer's other information.
// Your requirements
// 1. Create an array containing three transaction objects.
// 2. Create an arrow function named processRecord that accepts one record.
// 3. Return a new object with its value increased by 100.
// 4. Use map() to process all three records.
// 5. Do not modify the original objects.
// ----------------------------------------------------------------------------------------------
const records = [
  { id: 1, value: 200 },
  { id: 2, value: 400 },
  { id: 3, value: 600 }
];


const processRecord = ({id,value})=>{
    const newObj = {id: id, value:value+100};
    return newObj;
}

const recordsUpdated = records.map((value)=>processRecord(value))
console.log(recordsUpdated);

console.log("------------------------------6----------------------------");
// Transformation Assembly Line
// ----------------------------------------------------------------------------------------------
// A factory receives a product value of ₹500. It has three machines: add ₹100, multiply by 2, 
// and subtract ₹50. Each machine must receive the previous machine's output.
// Your requirements
// 1. Create three separate transformation functions.
// 2. Store all three functions in an array named queue.
// 3. Use reduce() to execute the functions in order.
// 4. Start with the value 500.
// 5. Print the final result.
// ----------------------------------------------------------------------------------------------
const queue = [];

function addValue(productValue){
    return productValue + 100;
}
function multipleValue(productValue, multiplier=2){
    return productValue*multiplier;
}
function removeValue(productValue){
    return productValue - 100;
}

// Storing all the 3 function in Array 
queue.push(addValue, multipleValue, removeValue);
console.log(queue);

let startValue = 500;
let finalValue = queue.reduce((acc,func)=>{
    return func(acc)
},startValue)

console.log(startValue);
console.log(finalValue);


console.log("------------------------------7----------------------------");
// (VVI) Numerical Safety Checker
// ----------------------------------------------------------------------------------------------
// A financial application receives values as both numbers and strings. 
// It must convert valid numeric strings into numbers and reject invalid values.
// Your requirements
// 1. Create a function validateValue(value).
// 2. Convert the input using Number().
// 3. Check whether the result is NaN.
// 4. Throw an error for NaN.
// 5. Return the converted number for valid inputs.
// ----------------------------------------------------------------------------------------------

function validateValue(value){
    if (!value || (typeof value==="string" && value.trim()==="")){
        console.log("Invalid");
        return;
    }

    let digit = Number(value);          // converting str -> Num
    if (isNaN(digit)){
        console.log("Invalid");
        return;
    }
    console.log(digit);
}

// --- ALL DATA TYPES TEST CASES ---

// 1. Numbers (Integers & Decimals)
validateValue(34);
validateValue(34.56);
validateValue(-100);

// 2. Strings (Valid Numbers, Invalid Text, and Empty Spaces)
validateValue("42");
validateValue("REtam");
validateValue("34Reta");
validateValue("");
validateValue("   ");

// 3. Structural Types (Objects and Arrays)
validateValue(null);
validateValue(undefined);
validateValue([]);
validateValue({});

// 4. Booleans
validateValue(true);
validateValue(false);

/* -------------------------------------------------------------------------------- 
CONCEPT : 

  📌 TRAPS WITH Number() AND FALSY VALUES:
  -----------------------------------------
  • Number("")      --> 0  (Empty strings incorrectly pass as zero)
  • Number(null)    --> 0  (Null incorrectly passes as zero)
  • Number(false)   --> 0  (Boolean false passes as zero)
  • Number(true)    --> 1
  • Number(undefined) --> NaN
  
  💡 THE FIX FOR STRICT CONVERSION:
  Always filter out null, undefined, and empty/spaced strings BEFORE using Number().
-------------------------------------------------------------------------------- */

console.log("------------------------------8----------------------------");
// Transaction History Tracker
// ----------------------------------------------------------------------------------------------
// A store wants to keep a private history of completed transactions 
// and allow users to view it without directly changing the saved history.
// Your requirements
// 1. Create a function createHistoryTracker().
// 2. Maintain a private history array.
// 3. Provide addRecord(record) and getHistory() methods.
// 4. Store a copy of each record.
// 5. Return copies when someone requests the history.
// 6. Test that modifying a returned record does not change the saved one.

// const tracker = createHistoryTracker();
// tracker.addRecord({ id: 1, value: 500 });
// tracker.addRecord({ id: 2, value: 800 });
// console.log(tracker.getHistory());
// ----------------------------------------------------------------------------------------------
function createHistoryTracker(){
    const privateHistory = [];
    // I am additionally adding Current date in it
    return {
        addRecord(entry){
            const today = new Date();
            const timedObj = {...entry, date: today.toLocaleDateString('en-US')}
            privateHistory.push(timedObj);
        },
        getHistory(){
            return privateHistory;
        }
    }
}
const tracker = createHistoryTracker();
tracker.addRecord({ id: 1, value: 500 });
tracker.addRecord({ id: 2, value: 800 });
console.log(tracker.getHistory());

console.log("------------------------------9----------------------------");
// Two Independent Counters
// ----------------------------------------------------------------------------------------------
// Two shops need separate visitor counters. Increasing Shop A's count must not affect Shop B's count.
// Your requirements
// 1. Create a function createCounter().
// 2. Maintain a private count starting at zero.
// 3. Return increment() and getCount() methods.
// 4. Create two counters from the same function.
// 5. Increment the first counter three times and the second once.
// 6. Verify that their counts are different.

// Example / Expected behavior
// const shopA = createCounter();
// const shopB = createCounter();

// shopA.increment();
// shopA.increment();
// shopA.increment();
// shopB.increment();

// console.log(shopA.getCount()); // 3
// console.log(shopB.getCount()); // 1
// ----------------------------------------------------------------------------------------------
function createCounter(){
    let count = 0;
    return {
        increment(value=1){
            count = count + value;
        },
        getCount(){
            return count;
        }
    }
}
// Testing Data
const shopA = createCounter();
const shopB = createCounter();

shopA.increment();
shopA.increment();
shopA.increment();
shopB.increment();

console.log("ShopA Count:", shopA.getCount()); // 3
console.log("ShopA Count:", shopB.getCount()); // 1

console.log("------------------------------10----------------------------");
// Final Pipeline
// ----------------------------------------------------------------------------------------------
// A company needs a reusable pipeline factory where departments can register transformations,
// process multiple transactions safely, and maintain independent histories.
// Your requirements
// 1. Build createPipeline(initialConfig).
// 2. Maintain a private queue and history.
// 3. Clone and freeze the flat configuration.
// 4. Implement chainable pipe(transformFn).
// 5. Implement execute(...records) with an arrow function processRecord.
// 6. Use reduce() to apply all queued transformations in order.
// 7. Validate numerical values before and after transformations.
// 8. Store successfully processed records in private history.
// 9. Create two pipelines and demonstrate that their data stays independent.
// ----------------------------------------------------------------------------------------------
function createPipeline(initialConfig) {
    const queue = [];
    const _history = []; // Prefix with underscore to signal private use
    const config = Object.freeze({ ...initialConfig });

    return {
        // 1. Method Chaining
        pipe(transformFunc) {
            if (typeof transformFunc !== 'function') {
                throw new TypeError('Pipeline stage must be a function');
            }
            queue.push(transformFunc);
            return this; 
        },

        // 2. Execution Logic
        execute(...records) {
            const processRecord = (value) => {
                if (!Number.isFinite(value)) {
                    throw new Error(`Invalid Input: ${value}`);
                }

                return queue.reduce((acc, currentStage) => {
                    const finalValue = currentStage(acc);
                    if (!Number.isFinite(finalValue)) {
                        throw new Error(`Transformation resulted in invalid number: ${finalValue}`);
                    }
                    return finalValue;
                }, value);
            };

            // Map records to their processed results
            const currentResults = records.map(processRecord);
            
            // Track globally inside this pipeline instance
            _history.push(...currentResults); 
            
            return currentResults;
        },

        // 3. Proper Getters (Prevents outside mutation)
        get history() {
            return [..._history]; // Returns a shallow copy so outer code can't break it
        },

        get config() {
            return config;
        }
    };
}

// --- Execution Check ---
const billing = createPipeline({ name: 'billing', currency: 'USD' })
  .pipe(n => n * 2)
  .pipe(n => n + 10);

console.log("Results 01:", billing.execute(5, 10, 30)); // Output: [20, 30, 70]
console.log("Results 02:", billing.execute(40,50)); // Output: [20, 30, 70]
console.log("History:", billing.history);             // Output: [20, 30, 70]
console.log("Configuration:", billing.config);             // Output: [20, 30, 70]


