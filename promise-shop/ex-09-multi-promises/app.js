var q = require('q');
var defer1 = q.defer();
var defer2 = q.defer();

function all(promise1, promise2){
	var groupDef = q.defer();
	var count = 0;
	var value1;
	var value2;

	promise1
	.then(function (result) {
	    val1 = result;
	    ++count;
	    if (count >=2) {
			groupDef.resolve([val1, val2]);
		}
	})
	.then(null, groupDef.reject)
	.done();

	promise2
	.then(function (result) {
	    val2 = result;
	    ++count;
	    if (count >=2) {
	    	groupDef.resolve([val1, val2]);
		}
	})
	.then(null, groupDef.reject)
	.done();
	//Todo
	//
	return groupDef.promise;
}

all(defer1.promise, defer2.promise)
.then(console.log)
.done();

setTimeout(function () {
  defer1.resolve("PROMISES");
  defer2.resolve("FTW");
}, 200);