const arr = [1, 2, [3, 4, [5]],
    [6, 7]
];

function flattenArray(input, res = []) {
    input.forEach(item => {
        if (Array.isArray(item)) {
            flattenArray(item, res);
        } else {
            res.push(item);
        }
    });
    return res;
}

console.log(flattenArray(arr));