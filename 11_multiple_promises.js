'use strict';


function all(arg1, arg2) {
    let out = [];
    let counter = 0;
    return new Promise((fulfill, reject) => {
        arg1.then((result) => {
            out[0] = result;
            counter++;
            if(counter >= 2) {
                fulfill(out);
            }
        });
        arg2.then((result) => {
            out[1] = result;
            counter++;
            if(counter >= 2) {
                fulfill(out);
            }
        });
    });

}

all(getPromise1(), getPromise2()).then(console.log);