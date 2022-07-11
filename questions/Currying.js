function add(...args) {
    const sum = args.reduce((acc, num) => acc + num, 0);
    return function(...args2) {
        const sum2 = args.reduce((acc, num) => acc + num, 0);
        if (args2.length) {
            return add(sum + sum2);
        }
        return sum;
    }
}

const curry = (func) => {
    return function insideCurry(...args) {
        if (args.length >= func.length) {
            return func(...args);
        } else {
            return function(...remainingArgs) {
                return insideCurry(...args, ...remainingArgs);
            };
        }
    };
};