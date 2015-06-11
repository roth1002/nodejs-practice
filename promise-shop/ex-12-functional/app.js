var qhttp = require('q-io/http');
var lodash = require('lodash');
var cachePath = "http://localhost:7000/";
var dbPath = "http://localhost:7001/";

var buildDbPath = lodash.bind(String.prototype.concat, dbPath);

qhttp.read(cachePath)
.then(lodash.compose(qhttp.read, buildDbPath))
.then(lodash.compose(console.log, JSON.parse))
.then(null, console.error)
.done();

//console.log(buildDbPath);