// Select an Element by ID
// Create a heading with an id of title and use getElementById() to select it and change its text.
// Example:
// HTML: <h1 id="title">Welcome</h1>
// Output: Hello JavaScript

const heading = document.getElementById("title")
heading.textContent = "Welcome to the Jungle..."

const heading2 = document.querySelector("#title2")
heading2.textContent = "Hello Retam..."