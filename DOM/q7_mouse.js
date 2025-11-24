"use strict";

const box = document.getElementById("box");
const coords = document.getElementById("coords");

box.addEventListener("mousemove", (e) => {
  const x = e.clientX - box.offsetLeft;
  const y = e.clientY - box.offsetTop;
  coords.textContent = `X: ${x} , Y: ${y}`;
});

box.addEventListener("dblclick", (e) => {
  const dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = `${e.clientX - box.offsetLeft}px`;
  dot.style.top = `${e.clientY - box.offsetTop}px`;

  box.appendChild(dot);
});
