//  Read Data Using dataset
// Create a button with a custom data-id attribute and use the dataset property to read its value.
// Example:
// HTML: <button id="productBtn" data-id="101">View Product</button>
// Output: 101

const productBtn = document.querySelector("#productBtn")
productBtn.dataset.dataId = "101"
productBtn.dataset.userName = "Retam"

// changing dataset value
productBtn.dataset.userName = "RetamMondal"

// printing all dataset
console.log(productBtn.dataset);