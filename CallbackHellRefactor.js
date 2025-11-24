// Q5 - Frontend Rush: Avoiding Callback Hell

// Nested callbacks (callback hell) example:
function design(cb) {
  setTimeout(() => {
    console.log('design');
    cb();
  }, 1000);
}

function build(cb) {
  setTimeout(() => {
    console.log('build');
    cb();
  }, 1000);
}

function test(cb) {
  setTimeout(() => {
    console.log('test');
    cb();
  }, 1000);
}

function deploy(cb) {
  setTimeout(() => {
    console.log('deploy');
    cb();
  }, 1000);
}

function celebrate(cb) {
  setTimeout(() => {
    console.log('celebrate');
    cb();
  }, 1000);
}

// Demonstrate callback hell
design(() => {
  build(() => {
    test(() => {
      deploy(() => {
        celebrate(() => {
          console.log('Callback pipeline finished');
        });
      });
    });
  });
});

// Refactor using async/await for readability
function delayLog(step) {
  return new Promise(resolve => setTimeout(() => {
    console.log(step);
    resolve(step);
  }, 1000));
}

async function runPipelineAsync() {
  // async/await linearizes the flow making it easier to read and maintain
  await delayLog('design');
  await delayLog('build');
  await delayLog('test');
  await delayLog('deploy');
  await delayLog('celebrate');
  console.log('Async/await pipeline finished');
}

runPipelineAsync();
