// Fibonacci Sequence

const memoFib = (n, cached = {}) => {
    let result;
    if (n in cached) {
        return cached[n];
    }
    if (n <= 2) {
        result = 1;
    } else {
        result = memoFib(n - 1, cached) + memoFib(n - 2, cached);
    }
    cached[n] = result;
    return result;
};
const n = 45;

console.log(`fibonacci number of ${n} is ${memoFib(n)}`);

// Memoize a function
const memoize = (func) => {
    const cache = {};

    return function(...args) {
        const argsIndex = JSON.stringify(args);

        if (!cache[argsIndex]) {
            cache[argsIndex] = func(...args);
        }
        return cache[argsIndex];
    };
}
const clumsysquare = (num1, num2) => {
    for (let i = 1; i <= 100000000; i++);
    return num1 * num2;
};
const result = memoize(clumsysquare);

console.time("First call");
console.log(result(1234, 5678));
console.timeEnd("First call");

console.time("Second call");
console.log(result(1234, 5678));
console.timeEnd("Second call");