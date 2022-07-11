function add2(num) {
    return num + 2;
}

function multiply2(num) {
    return num * 2;
}

function pipe(functions) {
    return function(num) {
        return functions.reduce((currentValue, currentFunction) => {
            return currentFunction(currentValue);
        }, num);
    }
}
console.log(pipe([add2, multiply2])(5))

function compose(functions) {
    return function(num) {
        return functions.reduceRight((currentValue, currentFunction) => {
            return currentFunction(currentValue);
        }, num);
    }
}
console.log(compose([add2, multiply2])(5))

3. compose([fn1, fn2])()

Number.prototype.compose = function(...functions) {
    const value = this;
    return function() {
        return functions.reduceRight((currentValue, currentFunction) => currentFunction(currentValue), value);
    };
}