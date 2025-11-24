"use strict";

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalContent = document.getElementById("modalContent");

document.querySelector(".grid").addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    modal.style.display = "flex";
    modalImg.src = e.target.src;
  }
});

// prevent close when clicking inside
modalContent.addEventListener("click", (e) => e.stopPropagation());

modal.addEventListener("click", () => {
  modal.style.display = "none";
});
