"use strict";

class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    this.salary += this.salary * (percent / 100);
  }
}

const employees = [
  new Employee(1, "Amit", "HR", 30000),
  new Employee(2, "Kiran", "Tech", 45000),
  new Employee(3, "Riya", "Admin", 25000),
  new Employee(4, "Sam", "Tech", 55000),
  new Employee(5, "Raj", "Finance", 40000)
];

employees.forEach(e => {
  console.log(`${e.name} Annual → ₹${e.getAnnualSalary()}`);
});

const totalPayout = employees.reduce((sum, e) => sum + e.getAnnualSalary(), 0);

console.log("\nTotal Annual Company Payout:", totalPayout);
