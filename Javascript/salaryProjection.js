
let currentSalary = 40000;
const incrementRate = 8; // percent
const data = [];

for (let year = 1; year <= 5; year++) {
  currentSalary += (currentSalary * incrementRate) / 100;
  data.push({ Year: year, Salary: Math.round(currentSalary) });
}

console.table(data);
