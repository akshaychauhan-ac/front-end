const a = new Promise((res, rej) => {
    res(1);
});
const b = new Promise((res, rej) => {
    res(2);
});
const c = new Promise((res, rej) => {
    rej(3);
});
const d = new Promise((res, rej) => {
    res(4);
});
const e = new Promise((res, rej) => {
    res(5);
});

const execute = async (...args) => {
    let result = [];

    for (let i = 0; i < args.length; i++) {
        try {
            const res = await args[i];
            console.log(res);
        } catch (err) {
            console.log("err" + err);
            args[2] = new Promise((res, rej) => {
                res(3);
            });
            execute(...args);
            break;
        }
    }
}
execute(a, b, c, d, e);