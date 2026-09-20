// Change an Attribute Using setAttribute()
// Create an image element and use setAttribute() to change its src and alt attributes.
// Example:
// HTML: <img id="profileImage" src="old.jpg" alt="Old Image">
// Expected Result: The image should have the new src and alt values.

const image = document.querySelector("#profileImage")
image.setAttribute("alt", "New Image")

const heading = document.querySelector("#heading")
heading.setAttribute("style", "color: red; text-decoration: underline red dashed 3px;");

// getAttribute
console.log(heading.getAttribute("style"));
console.log(heading.getAttribute("class"));