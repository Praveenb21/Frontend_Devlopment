"use strict";

const search = document.getElementById("searchBox");
const rows = document.querySelectorAll("#studentTable tr");
const noResult = document.getElementById("noResult");

search.addEventListener("input", () => {
  let value = search.value.toLowerCase();
  let found = false;

  rows.forEach((row, index) => {
    if (index === 0) return;

    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(value) ? "" : "none";

    if (text.includes(value)) found = true;
  });

  noResult.style.display = found ? "none" : "block";
});
