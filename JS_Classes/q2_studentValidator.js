"use strict";

const form = document.getElementById("studentForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const pass = form.password.value.trim();

  const nameReg = /^[A-Za-z ]+$/;
  const emailReg = /^[a-z0-9._%+-]+@[a-z]+\.[a-z]{2,4}$/;
  const phoneReg = /^[0-9]{10}$/;
  const passReg = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[\W]).{6,}$/;

  validateField(nameReg, name, "nameError", form.name);
  validateField(emailReg, email, "emailError", form.email);
  validateField(phoneReg, phone, "phoneError", form.phone);
  validateField(passReg, pass, "passError", form.password);
});

function validateField(regex, value, errorId, inputBox) {
  const error = document.getElementById(errorId);
  if (!regex.test(value)) {
    inputBox.style.border = "2px solid red";
    error.textContent = "Invalid input!";
  } else {
    inputBox.style.border = "2px solid green";
    error.textContent = "";
  }
}
