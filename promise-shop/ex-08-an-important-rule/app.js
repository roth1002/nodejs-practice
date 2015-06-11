var q = require('q');
//var defer = q.defer();

function throwMyGod() {
	return new Error('OH NOES');
}

function iterate(number) {
	console.log(number);
	return Number(++number);
}


q.fcall(iterate,1)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(throwMyGod)
.then(console.log, console.log);
