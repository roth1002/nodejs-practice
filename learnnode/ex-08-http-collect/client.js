var bl = require('bl');
var http = require('http');
var url = process.argv[2];

http.get(url, function(response) {
	response.pipe(bl(function(err, data) {
		if ( err ) {
			return console.log(err);
		}
		data = data.toString();
		console.log(data.length);
		console.log(data);

	}))
	// response.setEncoding('utf8')
	// response.on('data', console.log)
	// response.on('error', console.log)
});
