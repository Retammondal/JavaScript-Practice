// Add HTML Using innerHTML
// Create a <div> with an id of container and use innerHTML to add a heading and a paragraph inside it.
// Example:
// Expected HTML inside the container:
// <h2>My Website</h2>
// <p>Welcome to my website!</p>

const container = document.querySelector("#container")
container.innerHTML = `<h2>My Website</h2>
<p>Welcome to my website!</p>`