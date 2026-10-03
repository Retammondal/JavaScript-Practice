/**
 * ==========================================
 * STUDENT GRADE & HONOR ROLL FILTER
 * ==========================================
 * 
 * FOCUS (90%): 
 * - Higher-order .filter() and .map() array transformations
 * - Object Destructuring
 * - Optional Chaining (?.)
 * 
 * PAST REVISION (10%): 
 * - Arrow functions
 * - Template literals
 * 
 * REQUIREMENTS:
 * 1. Create an array of student objects (e.g., [{ name: "Alice", scores: { math: 92 } }, { name: "Bob" }]).
 * 2. Write an arrow function `getMathHonorRoll(students)`.
 * 3. Use Optional Chaining (student?.scores?.math) to safely evaluate math scores 
 *    without throwing errors on incomplete student objects (like "Bob").
 * 4. Use `.filter()` to extract students scoring >= 90 in math.
 * 5. Use `.map()` with Object Destructuring (({ name }) => ...) to return a clean 
 *    array of strings formatted with template literals: ["Alice - Honor Roll"].
 */

console.log();

const students = [
  { name: "Retam", scores: { math: 92, english: 85, science: 95 } },
  { name: "Monojit" },                                                  // Missing scores entirely
  { name: "Anuska", scores: { math: 88, english: 91, science: 92 } },
  { name: "Rishob", scores: { math: 95, english: 89 } },                // Missing science
  { name: "Sayan", scores: { math: 78, english: 82, science: 80 } },
  { name: "Priya", scores: { math: 98, english: 95, science: 97 } }
];

function getMathHonorRoll(array){
    const honorStudents = array.filter(value=> value?.scores?.math >= 90).map(function({name}){
        // NOTE : function + Destructuring in the parameter
        return name;
    });
    
    for (let i of honorStudents){
        console.log(`${i} - Honor Roll in Math`);
    }
};

getMathHonorRoll(students);