let product = " wireless headphones PRO ";

// Trim
let cleaned = product.trim().toLowerCase();

// Capitalize each word
cleaned = cleaned
  .split(" ")
  .map(w => w.charAt(0).toUpperCase() + w.slice(1))
  .join(" ");

// Replace "Pro" part
cleaned = cleaned.replace("Pro", "Pro Edition");

console.log("Cleaned Title:", cleaned);
console.log("Length:", cleaned.length);
