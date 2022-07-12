function interval(callback, delay) {
    let timer;

    (function run() {
        callback();
        timer = setTimeout(run, delay);
    })();

    return {
        clear: function() {
            clearTimeout(timer);
        }
    };
}

const test = () => {
    console.log("test");
};

const myInterval = interval(test, 1000);

setTimeout(() => {
    myInterval.clear();
}, 4000);