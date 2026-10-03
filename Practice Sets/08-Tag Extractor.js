/**
 * ==========================================
 * FLAT TAG EXTRACTOR & SANITIZER
 * ==========================================
 * 
 * FOCUS (90%): 
 * - .flatMap() single-pass transformation
 * - Rest parameters (...tagLists) in function signatures
 * - .filter(Boolean) to clean falsy values
 * 
 * PAST REVISION (10%): 
 * - String .toLowerCase() and .trim() methods
 * 
 * REQUIREMENTS:
 * 1. Process an array of article objects containing nested tag lists (which 
 *    include messy data like empty strings, spaces, and null/undefined).
 * 2. Write a function `compileMasterTags(...tagArrays)` that accepts an arbitrary 
 *    number of tag arrays using Rest parameters.
 * 3. Inside the function, use `.flatMap()` to flatten the array of arrays into a single array.
 * 4. Chain `.filter(Boolean)` to automatically filter out empty strings, null, or undefined slots.
 * 5. Chain `.map(tag => tag.trim().toLowerCase())` to clean up the formatting.
 */


const articlesOne = [
  { title: "Getting Started with JS", tags: [" JS ", "Web", ""] },
  { title: "Backend Basics", tags: ["Node.js", null, " Backend"] },
  { title: "Styling UI", tags: ["css", undefined, "UI ", ""] }
];

const articlesTwo = [
  { title: "Mastering Async JS", tags: [" Promises ", "", "JS"] },
  { title: "Database Design", tags: ["MongoDB", " SQL", null] },
  { title: "State Management", tags: [undefined, "React ", "Redux", ""] }
];


// Chain of Map, filter, flat
// NOTE : Why the NEed of taking ...tagArrays (Rest Operator) 
// -> whenever there is possibility of multiple Argument pass we need to give that.
function compileMasterTags(...tagArrays){
    tagArrays = tagArrays.flat().map(value=>value.tags).flat()
    .filter(Boolean).map(tag=>tag.trim().toUpperCase())
    console.log(tagArrays);
}


compileMasterTags(articlesOne, articlesTwo)
