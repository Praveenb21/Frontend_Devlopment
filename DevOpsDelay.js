// Q4 - DevOps Delay: Async Timeout Race
// Server A responds in 2s, Server B in 3s. Use Promise.all and Promise.race.

function serverA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error('Server A failed'));
      resolve('Server A completed');
    }, 2000);
  });
}

function serverB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error('Server B failed'));
      resolve('Server B completed');
    }, 3000);
  });
}

Promise.all([serverA(), serverB()])
  .then(results => {
    console.log('Deployment completed for all servers');
    console.log(results);
  })
  .catch(error => {
    console.log('Deployment error (all):', error.message);
  });

Promise.race([serverA(), serverB()])
  .then(fastest => {
    console.log('Fastest response:', fastest);
  })
  .catch(error => {
    console.log('Deployment error (race):', error.message);
  });
