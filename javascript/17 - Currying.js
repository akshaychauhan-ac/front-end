// Currying

function add (...args) {
    let sum = args.reduce((acc, num) => num + acc, 0);
    return function (...args2) {
        let innerSum = args2.reduce((acc, num) => num + acc, 0);

        if (args2.length) {
            return add(sum + innerSum);
        }
        return sum;
    };
}

add(1,2,3)(1,2,3)(5)(1,1,1)(); // 20
