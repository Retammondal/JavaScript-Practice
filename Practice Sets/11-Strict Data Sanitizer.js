/**
 * ==========================================
 * STRICT DATA SANITIZER & TYPE COERCION
 * ==========================================
 * 
 * FOCUS (90%): 
 * - Implicit vs explicit type coercion
 * - Mathematical operator enforcement (-, *, /)
 * - Explicit casting via Number() and String()
 * - Double NOT (!!) boolean conversion trick
 * - Evaluating truthy edge cases ([], {}, " ") against the 8 falsy values
 * - Checking for NaN safely with Number.isNaN() instead of === NaN
 * 
 * PAST REVISION (10%): 
 * - Arrow functions
 * - Default parameters
 * - Template literals
 * 
 * REQUIREMENTS:
 * 1. Write an arrow function `inspectValue(value)` that receives an unknown input.
 *    (Give it a default parameter just in case nothing is passed in).
 * 2. Test and report whether the input is truthy or falsy using `!!value`.
 * 3. Safely coerce numeric inputs: attempt implicit math (e.g., `value - 0`) 
 *    and detect if it produces NaN using `Number.isNaN()`.
 * 4. Compare loose equality (`==`) against strict equality (`===`) when evaluating numbers
 *    versus numeric strings (e.g., `"42"` vs `42`) to demonstrate type coercion rules
 * 5. Return a formatted template literal string detailing the original type, 
 *    coerced type, boolean truthiness, and sanitized value.
 */

console.log();
const inspectValue = (value = "Default")=>{
    
    // Truthy/ Falsy Check  --> Boolean*value) or, !!value
    const isTruthy = !!value;

    // Coerce to Number --> Using '-'
    const coerceNum = value-0;
    const isNaNNum = Number.isNaN(coerceNum);

    // Coerce to String --> Using  String(Value)
    const coerceStr = String(value);
    const looseMatch = value==coerceStr;
    const strictMatch = value===coerceStr;

    // Final Case : Return a formatted template literal string
    return `        Original Type  : ${typeof(value)}
        Truthy/Falsy?  : ${isTruthy}
        Coerced Number : ${coerceNum} (Is it NaN? -> ${isNaNNum})
        Coerced String : ${coerceStr}
        Loose (==) str : ${looseMatch}
        Strict (===) str: ${strictMatch}
    `;
}


const testValues = [
  "42",      // Numeric string (coerces to 42)
  42,        // Strict number
  " ",       // Whitespace string (Truthy surprise!)
  [],        // Empty array (Truthy surprise!)
  null,      // Falsy value
  NaN,       // Falsy value, numeric type
  "apple"    // String that fails numeric coercion (becomes NaN)
];

// --- TEST CASES ---
console.log("--- COERCION INSPECTION REPORT ---");
console.log("----------------------------------");
testValues.forEach(item=>{
    console.log(`\nInspecting Input: (${item})`);
    console.log(inspectValue(item));
})

