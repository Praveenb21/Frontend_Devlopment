"use strict";

const input = document.getElementById("productInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("productList");

addBtn.addEventListener("click", () => {
  if (input.value.trim() === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span class="text">${input.value.trim()}</span>
    <div>
      <button class="edit">Edit</button>
      <button class="delete">Delete</button>
    </div>
  `;

  list.appendChild(li);
  input.value = "";
});

// EVENT DELEGATION
list.addEventListener("click", function (e) {
  const item = e.target.closest("li");
  if (!item) return;

  // DELETE
  if (e.target.classList.contains("delete")) {
    item.remove();
  }

  // EDIT
  if (e.target.classList.contains("edit")) {
    const span = item.querySelector(".text");
    const oldText = span.textContent;

    span.outerHTML = `<input class="editBox" type="text" value="${oldText}">`;

    const box = item.querySelector(".editBox");
    box.focus();

    // Auto-save when clicking outside
    document.addEventListener("click", function save(e2) {
      if (e2.target !== box) {
        const newValue = box.value.trim() || oldText;
        box.outerHTML = `<span class="text">${newValue}</span>`;
        document.removeEventListener("click", save);
      }
    });
  }
});
