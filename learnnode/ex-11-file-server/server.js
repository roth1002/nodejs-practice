var http = require('http');
var port = Number(process.argv[2]);
var fs = require('fs');
var fileName = process.argv[3];

var server = http.createServer(function (req, res) {
	res.writeHead(200, {
		'content-type': 'text/plain'
	});

	fs.createReadStream(process.argv[3]).pipe(res);

});

server.listen(port);