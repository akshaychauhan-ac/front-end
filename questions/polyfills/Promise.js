function MyPromise(executer) {
    let onResolve;
    let onReject;
    let isCalled = false;
    let isFulfilled = false;
    let isRejected = false;
    let value;
    let error;

    function resolve(val) {
        isFulfilled = true;
        value = val;
        if (!isCalled && typeof onResolve === "function") {
            onResolve(val);
            isCalled = true;
        }
    }

    function reject(err) {
        isRejected = true;
        error = err;
        if (!isCalled && typeof onReject === "function") {
            onReject(val);
            isCalled = true;
        }
    }

    this.then = function(thenHandler) {
        onResolve = thenHandler;
        if (!isCalled && isFulfilled) {
            onResolve(value);
            isCalled = true;
        }
        return this;
    };

    this.catch = function(catchHandler) {
        onReject = catchHandler;
        if (!isCalled && isRejected) {
            onReject(error);
            isCalled = true;
        }
    };

    executer(resolve, reject);
}