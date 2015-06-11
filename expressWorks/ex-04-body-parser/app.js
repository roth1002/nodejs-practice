var express = require('express');
var bodyparser = require('body-parser');
var app = express();

app.use(bodyparser.urlencoded({extended: false}))

app.get('/home', function(request, response) {
	response.end('Hello World!');
});

app.post('/form', function(request, response) {
	response.end(request.body.str.split('').reverse().join(''));
});

app.listen(process.argv[2]);