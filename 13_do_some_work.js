'use strict';

let HTTP = require("q-io/http");

HTTP.read({url: "http://localhost:7000", method: "GET"})
    .then((userID) => HTTP.read({url: `http://localhost:7001/${userID}`, method: "GET"}))
    .then((user) => console.log(JSON.parse(user)))
    .then(null, console.log);

