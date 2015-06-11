var q = require('q');
var defer = q.defer();

function attachTitle(fileName) {
	return 'DR. ' + fileName;
}

defer.promise
.then(attachTitle)
.then(console.log);

defer.resolve('MANHATTAN');