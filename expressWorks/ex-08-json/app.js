var express = require('express');
var fs = require('fs');
var app = express();

app.get('/books', function(request, response) {
	var obj;
	fs.readFile(process.argv[3], function(e, str){
		obj = JSON.parse(str);
		response.json(obj);
	});
	//response.json(obj);
});

app.listen(process.argv[2]);