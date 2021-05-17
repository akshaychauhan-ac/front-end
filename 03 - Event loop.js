// Event loop

// There’s an endless loop, where the JavaScript engine waits for tasks, executes them and then sleeps, waiting for more tasks.
// The general algorithm of the engine:
// 1) While there are tasks:
//      execute them, starting with the oldest task.
// 2) Sleep until a task appears, then go to 1.

// The Event Loop has one job — to monitor the Call Stack and the Callback Queue.
// If the Call Stack is empty, the Event Loop will take the first event from the queue and will push it to the Call Stack, which effectively runs it.

// Job Queue (Microtasks - Promises) - ES6
// Task Queue - Web APIs

function firstFunction() {
  thirdFunction()

  const firstResponse = Promise.resolve('1st Promise');
  const secondResponse = Promise.resolve('2nd Promise');

  setTimeout(() => {
    firstResponse.then(res=> {
      console.log(res);
    })
  })

  secondResponse.then(res=> {
    console.log(res);
  })
}

function thirdFunction() {
  const thirdResponse = Promise.resolve('3rd Promise');
  const fourthResponse = Promise.resolve('4th Promise');

  queueMicrotask(() => {
    console.log('Hello from the microtask queue')
  })

  thirdResponse.then(res=> {
    console.log(res);
  })

  setTimeout(() => {
    fourthResponse.then(res=> {
      console.log(res);
    })
  })
}

function secondFunction() {
  let i = 0;
  let start = Date.now();

  for (let j = 0; j < 5.e9; j++) {
    i++;
  }
  console.log("Loop done in " + (Date.now() - start) + 'ms');
}

setTimeout(() => {
  console.log('first timeout')
});

firstFunction()
secondFunction()
console.log('first console log')


// Loop done in 5672ms
// first console log
// Hello from the microtask queue
// 3rd Promise
// 2nd Promise
// first timeout
// 4th Promise
// 1st Promise
