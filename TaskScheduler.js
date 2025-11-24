// Q2 - Task Scheduler: Micro vs Macro Challenge
// Demonstrates microtask (Promise.then) vs macrotask (setTimeout)

console.log('Start');

setTimeout(() => {
  console.log('setTimeout macrotask');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise microtask');
});

console.log('Synchronous log');

console.log('End');

// Explanation (in comments):
// Microtasks (Promise callbacks) run after the current synchronous code completes but before macrotasks (setTimeout).
// So the order will be:
// Start
// Synchronous log
// End
// Promise microtask
// setTimeout macrotask
