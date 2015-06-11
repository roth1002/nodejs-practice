var fs = require('fs')

function sumFileNumber () {

	var sum = 0;
	var context_arr = fs.readFileSync(process.argv[2]).toString().split('\n');
	console.log(context_arr.length-1);
	// for ( var i = 0; i < context_arr.length; i++ ) {
	// 	if ( !isNaN(parseInt(context_arr[i])) ) {
	// 		sum = sum + parseInt(context_arr[i]);
	// 	}
	// }
	// console.log(sum);
}

sumFileNumber();