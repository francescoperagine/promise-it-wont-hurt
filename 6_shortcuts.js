'use strict';

const catchted = new Promise((fulfill, reject) => {
    reject(new Error('I DID NOT FIRE'));
}).catch((error) => console.log(error.message));

const rejected = new Promise.reject(new Error('I DID NOT FIRE EITHER'));


const resolve = new Promise.resolve('THIS AND THAT');