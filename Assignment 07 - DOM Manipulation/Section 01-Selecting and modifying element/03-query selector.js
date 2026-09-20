// Select an Element Using querySelector()
// Create a paragraph with a class description and use querySelector() to select it and change its text
// content.
// Example:
// HTML: <p class="description">Old Text</p>
// Output: New Description

const description = document.querySelector(".description > span")
description.textContent = "Changed Content"