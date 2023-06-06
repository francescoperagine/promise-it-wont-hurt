'use strict';

function attachTitle(arg) {
    return `DR. ` + arg;
}

const secondPromise = new Promise((fulfill, reject) => {
        fulfill(`MANHATTAN`);
    });

secondPromise.then(attachTitle).then(console.log);