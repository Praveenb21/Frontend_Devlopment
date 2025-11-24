// Q7 - The Lazy Loader: Promise.allSettled Practice

function loadProfile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.25) return reject(new Error('Profile failed'));
      resolve('Profile Loaded');
    }, 2000);
  });
}

function loadPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.25) return reject(new Error('Posts failed'));
      resolve('Posts Loaded');
    }, 1500);
  });
}

function loadMessages() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.25) return reject(new Error('Messages failed'));
      resolve('Messages Loaded');
    }, 1000);
  });
}

async function loadAllModules() {
  const startTime = Date.now();
  const results = await Promise.allSettled([loadProfile(), loadPosts(), loadMessages()]);
  const endTime = Date.now();
  results.forEach((res, index) => {
    if (res.status === 'fulfilled') console.log(`Module ${index + 1} succeeded:`, res.value);
    else console.log(`Module ${index + 1} failed:`, res.reason.message);
  });
  console.log('Total time (ms):', endTime - startTime);
}

loadAllModules();
