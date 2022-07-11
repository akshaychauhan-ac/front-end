const arr = [1, 2, [3, 4, [5]],
    [6, 7]
];

function flattenSum(input, res = 0) {
    input.forEach(item => {
        if (Array.isArray(item)) {
            res = flattenSum(item, res);
        } else {
            res += item;
        }
    });
    return res;
}

console.log(flattenSum(arr));