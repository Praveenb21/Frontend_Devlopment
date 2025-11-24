const workoutData = [
  { user: "A", steps: 8000, calories: 300 },
  { user: "B", steps: 12000, calories: 500 },
  { user: "C", steps: 4000, calories: 200 }
];

class FitnessAnalytics {
  constructor(data) {
    this.data = data;
  }

  getActiveUsers() {
    return this.data.filter(r => r.steps > 7000).map(r => r.user);
  }

  getAverageCalories() {
    return this.data.reduce((acc, r) => acc + r.calories, 0) / this.data.length;
  }

  getUserSummary() {
    return this.data.map(r => `${r.user}: ${r.steps} steps, ${r.calories} calories`);
  }
}

const fa = new FitnessAnalytics(workoutData);
console.log(fa.getActiveUsers());
console.log(fa.getAverageCalories());
console.log(fa.getUserSummary());
