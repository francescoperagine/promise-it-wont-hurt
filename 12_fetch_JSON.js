'use strict';

let HTTP = require("q-io/http");

HTTP.read("http://localhost:1337")
    .then((json) => console.log(JSON.parse(json)));