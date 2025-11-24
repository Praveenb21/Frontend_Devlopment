class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    return `${this.name} is working in ${this.department}`;
  }
}

class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department);
    this.teamSize = teamSize;
  }

  work() {
    return `${this.name} is managing ${this.department} team of ${this.teamSize}`;
  }
}

const developer = new Employee("Karan", "Development");
const hrManager = new Manager("Sonal", "HR", 6);

console.log(developer.work());
console.log(hrManager.work());
