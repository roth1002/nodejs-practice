var express = require('express');
var app = express();

app.get('/home', function(request, response) {
	response.end('Hello World!');
});

app.put('/message/:id', function(req,res){
	var id = req.params.id
	var result_str = require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + id)
      .digest('hex');
    res.end(result_str);
});

app.listen(process.argv[2]);