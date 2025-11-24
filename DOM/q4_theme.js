"use strict";

document.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const theme = e.target.getAttribute("data-set");
    document.body.setAttribute("data-theme", theme);
  }
});
