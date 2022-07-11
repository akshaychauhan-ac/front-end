Promise.myAll = function(promises) {
    return new Promise((resolve, reject) => {
        let successCount = 0;
        let resolved = [];
        promises.forEach((promise, i) => {
            Promise.resolve(promise).then(val => {
                resolved[i] = val;
                successCount++;
                if (promises.length === successCount) {
                    resolve(resolved);
                }
            }).catch(err => {
                reject(error);
            });
        })
    });
}