// Select Multiple Elements Using querySelectorAll()
// Create three <li> elements with the class item. Use querySelectorAll() to select all of them and change
// their text color using the style property.
// Example:
// HTML: <li class="item">HTML</li>
// <li class="item">CSS</li>
// <li class="item">JavaScript</li>
// Expected Result: All three list items should have the changed text color.

const list = document.querySelectorAll(".item")         // --> NodeList not Single Element
// list.style.color = "red"
// we can't give property to each ... we need one by one

list.forEach(function(ele){
    ele.style.color = "red";
})