var bl = require('bl');
var http = require('http');
var url = process.argv.slice(2, process.argv.length);
var results = [];
var count = 0;

function printResult () {
	for (var i = 0; i < 3; i++) {
		console.log(results[i]);
	}
}

function getHTTP(index){
	http.get(url[index], function(response) {
		response.pipe(bl(function(err, data) {
			if ( err ) {
				return console.error(err);
			}

			results[index] = data.toString();

			//console.log(results[index]);
			count++;

			if (count === 3) {
				printResult();
			}
		}))
		// response.setEncoding('utf8')
		// response.on('data', console.log)
		// response.on('error', console.log)
	});
};

getHTTP(0);
getHTTP(1);
getHTTP(2);

// console.log(results[0]);
// console.log(results[1]);
// console.log(results[2]);