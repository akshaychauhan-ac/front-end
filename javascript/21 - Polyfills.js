// Polyfills

const arr = [1, 2, 3, 4, 5];

// 1) map - map((element, index, array) => { /* ... */ }, thisArgs)

Array.prototype.myMap = function (callback, context) {
    let updatedArray = [];

    for (let i = 0; i < this.length; i++) {
        updatedArray.push(callback.call(context, this[i], i, this));
    }
    return updatedArray;
}

arr.myMap((item) => item * 5);

// 2) filter - filter((element, index, array) => { /* ... */ }, thisArgs)

Array.prototype.myFilter = function (callback, context) {
    let updatedArray = [];

    for (let i = 0; i < this.length; i++) {
        if (callback.call(context, this[i], i, this)) {
            updatedArray.push(this[i]);
        }
    }
    return updatedArray;
}

arr.myFilter((item) => item <= 2);

// 3) reduce - reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator;
  let firstIndex;
  if (arguments.length === 1) {
    accumulator = this[0];
    firstIndex = 1;
  } else {
    accumulator = initialValue;
    firstIndex = 0;
  }
  for (let index = firstIndex; index < this.length; index++) {
    accumulator = callback(accumulator, this[index], index, this);
  }
  return accumulator;
};

arr.myReduce((acc, val) => acc + val);

// 4) call

Function.prototype.myCall = function (obj, ...args) {
  obj.callFn = this;
  obj.callFn(...args);
};

// 5) apply

Function.prototype.myApply = function (obj, args) {
  obj.callFn = this;
  obj.callFn(...args);
};

// 5) bind

Function.prototype.myBind = function (val, ...args) {
  const context = this;
  return function (...insideArgs) {
    context.apply(val, [...args, ...insideArgs]);
  };
};

// 6) Promise

function MyPromise(executor) {
    let onResolve;
    let onReject;
    let isFulfilled = false;
    let isRejected = false;
    let isCalled = false;
    let value;
    let error:

    function resolve(val) {
        isFulfilled = true;
        value = val;
        if (typeof onResolve === "function" && !isCalled) {
            onResolve(val);
            isCalled = true;
        }
    }
    function reject(err) {
        isRejected = true;
        error = err;
        if (typeof onReject ===  "function" && !isCalled) {
            onReject(err);
            isCalled = true;
        }
    }
    this.then = function (thenHandler) {
        onResolve = thenHandler;
        if (!isCalled && isFulfilled) {
            onResolve(value);
            isCalled = true;
        }
        return this;
    };
    this.catch = function (catchHandler){
        onReject = catchHandler;
        if (!isCalled && isRejected) {
            onReject(error);
            isCalled = true;
        }
        return this;
    };
    executor(resolve, reject);
}

// 7) Promise - race

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("error block"));
  }, 800);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("i am resolved after 500");
  }, 500);
});

const p3 = 20;

Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((val) => {
          resolve(val);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

Promise.myRace([p1, p2, p3]).then((val) => {
    console.log("resolved");
    console.log(val);
}).catch((err) => {
    console.log("rejected");
    console.log(err.message);
});

// 8) Promise - any

Promise.myAny = function (promises) {
    let rejectedPromises = 0;
    const error = new AggregateError([new Error("Error Occured")], "All promises were rejected");
    return new Promise((resolve, reject) => {
        if (promises.length === 0) {
            reject(error);
        }
        promises.forEach((promise) => {
            Promise.resolve(promise).then((val) => {
                resolve(val);
            }).catch(() => {
                rejectedPromises++;
                if (promises.length === rejectedPromises) {
                    reject(error);
                }
            })
        })
    })
}

// 8) Promise - all

Promise.myAll = function (promises) {
    const result = [];
    let promiseCompleted = 0;
    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            Promise.resolve(promise).then((val) => {
                promiseCompleted++;
                result[index] = val;
                if (promiseCompleted === promises.length) {
                    resolve(result);
                }
            }).catch((err) => {
                reject(err);
            })
        })
    })
}
