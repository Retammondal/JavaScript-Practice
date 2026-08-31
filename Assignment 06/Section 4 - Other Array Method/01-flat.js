// 1. Flatten a Nested Array 
// Use flat() to convert the nested array into a single-level array. 
// Example: 
// Input: [1, 2, [3, 4]] 
// Output: [1, 2, 3, 4] 
// 2. Flatten a Multi-Level Array 
// Use flat() with an appropriate depth to flatten the following array completely. 
// Example: 
// Input: [1, [2, [3, 4]]] 
// Output: [1, 2, 3, 4] 

const nestedArr = [1, 2, [3, 4]];
console.log(`\nFlat to use in Single Level Entry -->`);

// flat() -- immutable
const cleanArr = nestedArr.flat();
console.log(`Nested Array : ` ,nestedArr);
console.log(`Cleaned Array : ` ,cleanArr);

// Flattern Multi Level Array
const nestedArr2 = [1, [2, [3, 4]]];
console.log(`\nFlat to use in Multi Level Entry -->`);

// flat() -- immutable
const cleanArr2 = nestedArr2.flat(Infinity);
console.log(`Nested Array : ` ,nestedArr2);
console.log(`Cleaned Array : ` ,cleanArr2);