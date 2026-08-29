// Update an Object Property 
// Create a user object with name and role. Update the role from "student" to "developer" 
// and display the updated object. 
// Example: 
// Input: 
// { 
// name: "Rahul", 
// role: "student" 
// } 
// Output: 
// { 
// name: "Rahul", 
// role: "developer" 
// } 

const userObject = {
    Name : "Retam Mondal",
    Email : "Retammondal2020@gmail.com",
    Role : "Full-Stack Developer"
}
console.log(`\nObject at start...`);
console.log(userObject);

let updateName = "Anuska";
let updateRole = "Student";
console.log(`\nUpdating Name from ${userObject.Name} to ${updateName}`);
console.log(`Updating Role from ${userObject.Role} to ${updateRole}`);
console.log(`Updating Role from ${userObject.Email} to "Anuska@gmail.com"`);

userObject.Name = updateName;
userObject.Role = updateRole;
userObject.Email = "Anuska@gmail.com";

console.log(`\nBelow Updated Object....`);
console.log(userObject);