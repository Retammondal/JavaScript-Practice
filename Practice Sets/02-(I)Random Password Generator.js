// Project : Random Password & Token Generator

// Goal: Build a function that generates a randomized secure password or alphanumeric token of specified length.

// Concepts Practiced: Math.floor(Math.random() and Math.floor(M)ath.floor() for index selecti)on , string index lookup / 
// .charAt() , for loops , and default parameters .

// Requirements:
// Accepts a length parameter (default to 8).
// Picks characters randomly from a character set containing letters, numbers, and symbols.
// Returns the generated password string.

const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*?";

function passwordGenerator(passLength = 8, minLett = 1, minNum = 1, minSym = 1){
    if (passLength <= 3){
        return "Length of Password should be Greater than 3...Try Again!!";
    }
    if (passLength < minLett + minNum + minSym){
        return "Length of Password is lesser than your Min Criteria....Try Again!!";
    }
    
    let password = "";
    for (let lett=1; lett<=minLett; lett++){
        let index = Math.floor(Math.random() * letters.length);
        password += letters.charAt(index)       
    }
    for (let num=1; num<=minNum; num++){
        let index = Math.floor(Math.random() * numbers.length);
        password += numbers.charAt(index)       
    }
    for (let sym=1; sym<=minSym; sym++){
        let index = Math.floor(Math.random() * symbols.length);
        password += symbols.charAt(index)       
    }

    let combineCharacters = letters+numbers+symbols;
    let remainingLength = passLength - password.length;

    for (let i=1; i<=(remainingLength); i++){
        let index = Math.floor(Math.random() * combineCharacters.length);
        password += combineCharacters.charAt(index)
    }

    return shuffleString(password);    
}

// Wanting to make a Function to Shuffle a String..
function shuffleString(str){
    let shuffleStr = "";
    let arrStr = str.split("");             // Convert to array
    for (let i=1; i<=str.length; i++){
        let index = Math.floor(Math.random()* arrStr.length);
        shuffleStr += arrStr[index]
        arrStr.splice(index,1);             // Removes 1 item at index 
        
    }
    return shuffleStr
}


// Final Function to Give how much Character, Symbol, Number is there
function password(passLength, minLett, minNum , minSym){
    let createdPassword = passwordGenerator(passLength,minLett,minNum,minSym);
    console.log(`Auto Generated Password by System is --> ${createdPassword}`);
    let LetterCount = 0;
    let NumberCount = 0;
    let SymbolCount= 0;

    for (let i of createdPassword){
        if (letters.includes(i)){
            LetterCount +=1;
        } else if (numbers.includes(i)){
            NumberCount +=1;
        } else if (symbols.includes(i)){
            SymbolCount +=1;
        }
    }

    console.log("-------------------------------------------------");
    console.log(`Password Summary -->
        Letters Count = ${LetterCount}
        Numbers Count = ${NumberCount}
        Symbols Count = ${SymbolCount}`);
}

console.log();
password(15)
console.log();
password(6)