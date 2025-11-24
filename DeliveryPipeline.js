// Q10 - The Final Delivery: Async Pipeline Debugger
// Steps: takeOrder -> prepare -> pack -> dispatch -> deliver
// Each step returns a Promise with 1-2s delay and random success/failure

function randomDelay() {
  return 1000 + Math.floor(Math.random() * 1000);
}

function step(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error(`${name} failed`));
      console.log(`Step: ${name}`);
      resolve(`${name} done`);
    }, randomDelay());
  });
}

async function runPipeline() {
  console.log('Start Pipeline');
  try {
    await step('Order taken');
    await step('Food prepared');
    await step('Package ready');
    await step('Out for delivery');
    await step('Delivered');
    console.log('Delivery completed!');
  } catch (error) {
    console.log('Pipeline failed!');
  }
}

runPipeline();
