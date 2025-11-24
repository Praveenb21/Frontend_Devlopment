"use strict";

// fields
const step1 = document.querySelector(".step1");
const step2 = document.querySelector(".step2");
const step3 = document.querySelector(".step3");
const sum = document.querySelector(".summary");

document.getElementById("next1").onclick = () => {
  if (document.getElementById("name").value.trim() === "") return alert("Enter name");
  step1.style.display = "none";
  step2.style.display = "block";
};

document.getElementById("back1").onclick = () => {
  step2.style.display = "none";
  step1.style.display = "block";
};

document.getElementById("next2").onclick = () => {
  const email = document.getElementById("email").value;
  if (!email.includes("@")) return alert("Invalid email");

  step2.style.display = "none";
  step3.style.display = "block";
};

document.getElementById("back2").onclick = () => {
  step3.style.display = "none";
  step2.style.display = "block";
};

document.getElementById("finish").onclick = () => {
  const pass = document.getElementById("password").value;
  if (pass.length < 6) return alert("Password too short");

  sum.textContent = `Name: 
${name.value}, Email: ${email.value}, Password: ${pass}`;
  step3.style.display = "none";
};
