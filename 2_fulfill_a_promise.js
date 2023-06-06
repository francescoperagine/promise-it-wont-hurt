'use strict';

const promise = new Promise((fulfill) => {
    setTimeout(() => {
        fulfill('FULFILLED!');
    }, 300);
}).then(console.log);