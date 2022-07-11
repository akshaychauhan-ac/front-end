const arr = [1, 2, 3, 4, 5];

Array.prototype.myMap = function(callback, thisArgs) {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(callback.call(thisArgs, this[i], i, this));
    }
    return result;
}

console.log(arr.myMap(item => item * 10));

Array.prototype.myFilter = function(callback, thisArgs) {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        if (callback.call(thisArgs, this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
}

console.log(arr.myFilter(item => item > 2));

Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator;
    let firstIndex = 0;

    if (arguments.length === 1) {
        accumulator = this[0];
        firstIndex = 1;
    } else {
        accumulator = initialValue;
    }

    for (let i = firstIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
}

console.log(arr.myReduce((acc, item) => acc + item, 0));