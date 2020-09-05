var p = new Promise(function (resolve, reject) {
    const x = "shantanu";
    const y = "shantnu";

    if (x === y) {
        resolve();
    } else {
        reject();
    }
});

p.then(function () { console.log('same') }).catch(function () { console.log('not same') });

