var q = require('q');

var defer = q.defer();

defer.promise.then(null, function(e){
	console.log(e.message);
});
setTimeout(defer.reject, 300, new Error("REJECTED!"));