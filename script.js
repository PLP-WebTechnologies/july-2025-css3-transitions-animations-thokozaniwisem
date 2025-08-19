// Functions

// Simple function with parameters + return value
function doubleNumber(num) {
  return num * 2;
}

// Function that changes color of an element
function changeColor(element, color) {
  element.style.background = color;
}

// Demonstrate scope
let globalMessage = "I'm global!";

function showScope() {
  let localMessage = "I'm local!";
  console.log(globalMessage); // works
  console.log(localMessage); // works
}

// Combining CSS + JS

// Animate box on button click
const animateBtn = document.getElementById("animateBtn");
const box = document.querySelector(".box");

animateBtn.addEventListener("click", () => {
  box.classList.toggle("animate");
});

// Toggle popup
const toggleBtn = document.getElementById("toggleBtn");
const popup = document.getElementById("popup");

toggleBtn.addEventListener("click", () => {
  popup.classList.toggle("show");
});

// Call the function to test scope in console
showScope();
console.log("Double of 5 is:", doubleNumber(5));
