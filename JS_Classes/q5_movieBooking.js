"use strict";

function validateBooking(name, email, seats) {
  const nameReg = /^[A-Za-z ]+$/;
  const emailReg = /^[a-z0-9._%+-]+@[a-z]+\.[a-z]{2,4}$/;
  const seatsReg = /^[1-9]$|^10$/;

  if (!nameReg.test(name)) return "Invalid Name";
  if (!emailReg.test(email)) return "Invalid Email";
  if (!seatsReg.test(seats)) return "Seats must be 1–10";

  const ticket = { name, email, seats };
  console.log("🎟 Ticket Booked:", ticket);
}

validateBooking("Yash", "yash@gmail.com", "5");
