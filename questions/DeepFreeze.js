const obj2 = {
    value1: "Test",
    value2: {
        internal: {
            a: null,
        },
    },
};

const deepFreeze = (obj) => {
    for (var key in obj) {
        if (obj[key] && typeof obj[key] === "object") {
            if (!Array.isArray(obj[key])) {
                deepFreeze(obj[key]);
            }
        }
    }
    return Object.freeze(obj);
};

deepFreeze(obj2);