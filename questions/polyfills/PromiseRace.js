Promise.myRace = function(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            Promise.resolve(promise).then(val => {
                resolve(val);
            }).catch(err => {
                reject(err);
            });
        });
    });
}