// Simple Login 
// Create: username , password 
// Correct credentials: 
// username = "admin" 
// password = "12345" 
// If both are correct: 
// Login successful 
// Otherwise: 
// Invalid username or password 
// Use the logical && operator.

username = "admin2";
password = "12345";

let checkLogin = (username === "admin" && password === "12345") ? 
    "Login Successful✅✅" : "Invalid Username or Password❌❌"

console.log(checkLogin);