// Initialize the counter value
let counterValue = 0;

// Get DOM elements
const counterDisplay = document.getElementById("counter");
const addButton = document.getElementById("addBtn");
const removeButton = document.getElementById("removeBtn");

// Function to update the counter display
function updateCounter() {
  counterDisplay.textContent = counterValue;
}

// Add button functionality
addButton.addEventListener("click", () => {
  counterValue++;
  updateCounter();
});

// Remove button functionality
removeButton.addEventListener("click", () => {
  if (counterValue > 0) {
    counterValue--;
    updateCounter();
  }
});
