'use strict';

let arg = process.argv[2];

function parsePromised(json) {
    return new Promise((fulfill, reject) => {
        try {
            fulfill(JSON.parse(json));
        } catch (e){
            reject(e);
        }
    })
}

function onReject(error) {
    console.log(error.message);
}

parsePromised(arg).then(null, onReject);