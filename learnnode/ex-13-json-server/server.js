var http = require('http');
var url = require('url');
var port = Number(process.argv[2]);

var server = http.createServer(function (req, res) {
	var parseUrl = url.parse(req.url, true);
	var time = new Date(parseUrl.query.iso);
	//console.log(parseUrl.query.iso);
	var result;
	if ( req.url.match(/^\/api\/parsetime/) ) {
		console.log('FUCK');
		result = parsetime(time);
	} else if ( req.url.match(/^\/api\/unixtime/) ) {
		console.log('SHIT');
		result = unixtime(time);
	} else {
		console.log('WTF');
	}

	if (result) {
	    res.writeHead(200, { 'Content-Type': 'application/json' });
	    res.write(JSON.stringify(result));
	} else {
	    res.writeHead(404);
	}
	res.end()
});

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime : time.getTime() }
}

server.listen(port);