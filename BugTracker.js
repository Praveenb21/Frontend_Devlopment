// Q3 - Bug Tracker: Callback to Promise Migration

// Original callback-based function (for reference)
// function fetchBugs(callback) {
//   setTimeout(() => callback(['UI glitch', 'API timeout', 'Login failure']), 1000);
// }

function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const simulateFailure = Math.random() < 0.2;
      if (simulateFailure) return reject(new Error('Failed to fetch bugs from API'));
      resolve(['UI glitch', 'API timeout', 'Login failure']);
    }, 1000);
  });
}

getBugs()
  .then(bugs => {
    console.table(bugs.map((bug, index) => ({ id: index + 1, bug })));
  })
  .catch(error => {
    console.log('Error fetching bugs:', error.message);
  });
