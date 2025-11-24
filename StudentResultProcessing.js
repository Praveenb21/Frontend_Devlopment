class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  calculateAverage() {
    if (!Array.isArray(this.marks) || this.marks.length === 0) return 0;
    const sum = this.marks.reduce((acc, m) => acc + m, 0);
    return sum / this.marks.length;
  }

  getGrade() {
    const average = this.calculateAverage();
    if (average >= 90) return "A";
    if (average >= 75) return "B";
    if (average >= 50) return "C";
    return "F";
  }
}

const student1 = new Student("Riya", [95, 88, 92]);
const student2 = new Student("Aman", [72, 68, 80]);
const student3 = new Student("Neha", [45, 52, 48]);

console.log(student1.name, "Average:", student1.calculateAverage(), "Grade:", student1.getGrade());
console.log(student2.name, "Average:", student2.calculateAverage(), "Grade:", student2.getGrade());
console.log(student3.name, "Average:", student3.calculateAverage(), "Grade:", student3.getGrade());
