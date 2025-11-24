// Q1 - The Startup Morning: Async Coffee Maker
// Each step returns a Promise that resolves after 1-2 seconds and may randomly fail.

function randomDelay() {
  return 1000 + Math.floor(Math.random() * 1000);
}

function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error('Boiling water failed'));
      console.log('Boiled water');
      resolve('water');
    }, randomDelay());
  });
}

function brewCoffee(water) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error('Brewing coffee failed'));
      console.log('Brewed coffee using', water);
      resolve('coffee');
    }, randomDelay());
  });
}

function pourIntoCup(coffee) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) return reject(new Error('Pouring into cup failed'));
      console.log('Poured coffee into cup');
      resolve('cup of coffee');
    }, randomDelay());
  });
}

// Use Promise chaining to perform steps
boilWater()
  .then(water => brewCoffee(water))
  .then(coffee => pourIntoCup(coffee))
  .then(result => {
    console.log('Coffee ready for the team!');
  })
  .catch(error => {
    console.log('Coffee process error:', error.message);
  });
