var q = require('q');
var defer = q.defer();

function parsePromised(jsonString) {
	var result;

	try {
		result = JSON.parse(jsonString);
	} catch (e) {
		defer.reject(e);
	}

	defer.resolve(result);
	return defer.promise;
}

parsePromised(process.argv[2])
.then(console.log, console.log);