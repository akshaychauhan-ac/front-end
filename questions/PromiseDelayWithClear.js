function promiseDelay(delay) {
    let timeout;
    let resolveMethod;
    const result = new Promise((resolve, reject) => {
        resolveMethod = resolve;
        timeout = setTimeout(() => {
            resolve();
        }, delay);
    });
    result.clear = function() {
        if (timeout) {
            clearTimeout(timeout);
            resolveMethod();
        }
    };
    return result;
}
result = promiseDelay(5000);
// result.clear();