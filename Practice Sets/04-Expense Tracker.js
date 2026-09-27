// Project : Interactive Expense Tracker & Analyzer

// Goal: Build a console-based expense management system that stores records, 
// filters by category, and generates spending reports.

// Concepts Practiced: Array of Objects, .forEach() array iteration , 
// Array mutator methods (push, pop) , Callback functions , and the Date object .

// Requirements:
// Implement an expenses array containing expense objects ({ id, description, amount, category, date }).
// Functions to addExpense(), getExpensesByCategory(), and getHighestExpense().
// Format dates using new Date().toLocaleDateString() and output category totals.





let expenseArray = [];


// ----------------------------------------------------------------------------------------------
// ADDING EXPENSE FUNCTION..
// ----------------------------------------------------------------------------------------------

function addExpense(category, amount, description){
    // Generate a new date and ID right at the moment the function is called
    const now = new Date(); 
    const uniqueDate = now.toLocaleString();
    const uniqueId = crypto.randomUUID();

    // New Object Add
    let addObj = {
        ID : uniqueId,
        Date : uniqueDate,
        Category : category,
        Amount : amount,
        Description : description
    };

    expenseArray.push(addObj);
}

// Adding Expenses
    addExpense("Food", 150, "Morning coffee and crossaint");
    addExpense("Food", 450, "Swiggy lunch order at the office");
    addExpense("Food", 250, "Groceries from the local supermarket");

    addExpense("Transport", 80, "Metro smartcard recharge");
    addExpense("Transport", 600, "Auto-rickshaw and cab fares for weekend outing");

    addExpense("Bills", 799, "Wi-Fi broadband monthly internet bill");
    addExpense("Bills", 149, "Mobile prepaid recharge");

    addExpense("Entertainment", 250, "Movie ticket for the weekend show");
    addExpense("Entertainment", 1500, "Concert entry pass fee");

    addExpense("Health", 1500, "Routine full-body health checkup fee");


// ----------------------------------------------------------------------------------------------
// Get EXPENSE BY CATEGORY FUNCTION..
// ----------------------------------------------------------------------------------------------

function getExpensesByCategory(category){
    let filteredArr = [];
    let total = 0;
    expenseArray.forEach(function(expense){
        let cat = expense.Category;
        if (cat.toLowerCase() === category.toLowerCase()){
            filteredArr.push(expense);
            total += expense.Amount;
        }
    })

    console.log("\n----------------------------------------------------------\n");
    console.log(`List of Expenses with ${category} Category --> `);
    console.log(filteredArr);
    console.log();
    console.log(`${category.toUpperCase()} Category Summary --> 
    No. of Expenses : ${filteredArr.length}
    Total Expense Amount : ${total}`);

    return total;
}


// ----------------------------------------------------------------------------------------------
// HIGHEST EXPENSE FUNCTION..
// ----------------------------------------------------------------------------------------------

function getHighestExpense(){
    let highestExpense = 0;
    let highestExpenseArr = [];
    
    expenseArray.forEach(function(expense){
        if (expense.Amount > highestExpense){
            highestExpense = expense.Amount;
            highestExpenseArr = [expense.Description];  // Clears old items, starts fresh array
        } else if (expense.Amount === highestExpense){
            highestExpenseArr.push(expense.Description);
        }
    })

    return { 
        amount: highestExpense, 
        array: highestExpenseArr 
    };
}

// ----------------------------------------------------------------------------------------------
// SPENDING REPORT..
// ----------------------------------------------------------------------------------------------
function spendingReport(){
    let highestExpense = getHighestExpense().amount;
    let highestExpenseArr = getHighestExpense().array;
    let categoryObject = {};

    for (let expense of expenseArray){
        let categoryList = Object.keys(categoryObject);
        if (!categoryList.includes(expense.Category)){
            categoryObject[expense.Category] = 0
        }
    }
    
    for (let category in categoryObject){
        for (let expense of expenseArray){
            if (category === expense.Category){
                categoryObject[category] += expense.Amount
            }
        }
    }
    console.log("\n----------------------------------------------------------\n");
    for (let i in categoryObject){
        console.log(`${i} Category Total Expense ->
            ${categoryObject[i]}`);
    }

    console.log();
    console.log(`Highest Expenses --> ${highestExpenseArr}`);   
    // Template Literal automatically Deconstruct Array
    console.log(`Highest Expense Value = ${highestExpense}`);
}

// ----------------------------------------------------------------------------------------------
// TESTING
// ----------------------------------------------------------------------------------------------
spendingReport()
getExpensesByCategory("food")
getExpensesByCategory("entertainment")