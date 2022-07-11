Promise.myAny = function(promises) {
    return new Promise((resolve, reject) => {
        const error = new AggregateError([new Error("Error occured")], "All promises were rejected");
        let errorCount = 0;
        promises.forEach(promise => {
            Promise.resolve(promise).then(val => {
                resolve(val);
            }).catch(err => {
                errorCount++;
                if (promises.length === errorCount) {
                    reject(error);
                }
            });
        });
    });
}