const obj = {
    name: 1,
    address: {
        street: {
            pin: 4,
            code: 5,
        }
    }
};

function flattenObject(input, prefix) {
    let output = {};
    for (let key in input) {
        if (input[key] && typeof input[key] === "object") {
            if (!Array.isArray(input[key])) {
                output = {
                    ...output,
                    ...flattenObject(input[key], prefix + "_" + key)
                }
            } else {
                output[prefix + "_" + key] = input[key];
            }
        } else {
            output[prefix + "_" + key] = input[key];
        }
    }
    return output;
}

console.log(flattenObject(obj, "user"));