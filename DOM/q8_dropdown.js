"use strict";

const btn = document.getElementById("dropBtn");
const optBox = document.getElementById("options");

btn.addEventListener("click", () => {
  optBox.style.display = optBox.style.display === "block" ? "none" : "block";
});

// Select option
optBox.addEventListener("click", (e) => {
  if (e.target.classList.contains("opt")) {
    btn.textContent = e.target.textContent;
    optBox.style.display = "none";
  }
});

// Close when clicking outside (capturing phase)
document.addEventListener("click", (e) => {
  if (!btn.contains(e.target) && !optBox.contains(e.target)) {
    optBox.style.display = "none";
  }
}, true);
