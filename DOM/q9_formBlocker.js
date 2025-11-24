"use strict";

const form = document.getElementById("myForm");
const success = document.getElementById("success");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const pass = document.getElementById("pass");

  if (name.value.trim() === "") {
    nameErr.textContent = "Name required";
    valid = false;
  }

  if (!email.value.includes("@")) {
    emailErr.textContent = "Invalid email";
    valid = false;
  }

  if (pass.value.length < 6) {
    passErr.textContent = "Password too short";
    valid = false;
  }

  if (valid) success.textContent = "Form Submitted Successfully!";
});

// Live error removal
form.addEventListener("input", (e) => {
  const id = e.target.id;

  if (id === "name") nameErr.textContent = "";
  if (id === "email") emailErr.textContent = "";
  if (id === "pass") passErr.textContent = "";
});
