// Get Object Entries 
// Create a settings object and use Object.entries() to convert its properties into key-value pairs. 
// Example: 
// Input: 
// const settings = { 
// theme: "dark", 
// language: "English", 
// notifications: true 
// }; 
// Expected Output: 
// [ 
// ["theme", "dark"], 
// ["language", "English"], 
// ["notifications", true] 
// ] 

const settings = { 
    theme: "dark", 
    language: "English", 
    notifications: true 
}; 

// wanting to make 1st character of every key Capital
for (let oldkey in settings){
    let newkey = oldkey.charAt(0).toUpperCase() + oldkey.slice(1); //create new key
    // creating new property and delete old one
    settings[newkey] = settings[oldkey];
    delete settings[oldkey];
}
console.log(`\nDisplaying the Object :`, settings);
console.log(`\nDisplaying the Object Entries in Array :`, Object.entries(settings));

