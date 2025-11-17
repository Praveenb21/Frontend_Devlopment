// Global variable
let bonus = 5000;

// Function demonstrating scope
function calculateSalary(isPermanent) {
  let salary = 40000; // local variable

  if (isPermanent) {
    salary += bonus;
  }

  console.log(`Permanent: ${isPermanent}, Total Salary: ₹${salary}`);
}

// Call function with different values
calculateSalary(true);
calculateSalary(false);

console.log("Global bonus still =", bonus);
