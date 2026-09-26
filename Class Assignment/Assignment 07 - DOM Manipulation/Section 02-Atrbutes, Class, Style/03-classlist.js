// Add and Remove Classes Using classList
// Create a button and use classList.add() to add a class to it. Then use classList.remove() to remove the
// class.
// Example:
// HTML: <button id="btn">Click Me</button>
// Expected Result: The button should have the class added and then removed using JavaScript.

const button = document.querySelector("#btn")
button.classList.remove("design")
button.classList.add("design")