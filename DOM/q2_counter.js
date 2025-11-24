"use strict";

const box = document.getElementById("textBox");
const counter = document.getElementById("counter");
const reset = document.getElementById("resetBtn");
let max = 100;

box.addEventListener("input", (e) => {
  let remaining = max - box.value.length;

  counter.textContent = `${remaining} characters left`;
  counter.className = "";

  if (remaining <= 20 && remaining > 0) counter.classList.add("yellow");
  if (remaining <= 0) counter.classList.add("red");

  if (remaining < 0) e.preventDefault();
});

reset.addEventListener("click", () => {
  box.value = "";
  counter.textContent = "100 characters left";
});
