function interval(cb, ms) {
    let a = {
        clear: function() {
            clearTimeout(a.timer);
        },
    };

    (function run() {
        cb();
        a.timer = setTimeout(run, ms);
    })();

    return a;
}

const test = () => {
    console.log("test");
};

const myInterval = interval(test, 1000);

setTimeout(() => {
    myInterval.clear();
}, 4000);