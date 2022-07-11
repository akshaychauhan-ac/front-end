const obj = {
    a: 1,
    b: {
        c: {
            d: 4,
            e: 5
        }
    }
};

function flattenObject(input, res = {}) {
    for (let key in input) {
        if (input[key] && typeof input[key] === "object") {
            if (!Array.isArray(input[key])) {
                flattenObject(input[key], res);
            } else {
                res[key] = input[key];
            }
        } else {
            res[key] = input[key];
        }
    }
    return res;
}

console.log(flattenObject(obj));