"use strict";

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", e => {
  e.preventDefault();

  const user = loginForm.username.value.trim();
  const pass = loginForm.password.value.trim();

  const userReg = /^.{5,}$/;
  const passReg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W]).{8,}$/;

  if (!userReg.test(user))
    return alert("Username must be at least 5 characters.");

  if (!passReg.test(pass))
    return alert("Password must include uppercase, lowercase, number & special character.");

  alert("Login Successful!");
});
