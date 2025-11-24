// Q9 - Debugging the Event Loop
// Prediction (comment):
// Script start
// Script end
// Promise callback
// Timeout callback
// Explanation: Promise callbacks are microtasks, executed after current sync code, before macrotasks like setTimeout.

console.log('Script start');

setTimeout(() => console.log('Timeout callback'), 0);

Promise.resolve().then(() => console.log('Promise callback'));

console.log('Script end');
