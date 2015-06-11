function countArgv () {
	var count = 0;
	if (process.argv.length <= 2) {
		return 0;
	}
	for ( var i = 2; i < process.argv.length; i+=1 ){
		if ( !isNaN(parseInt(process.argv[i])) ) {
			count = count + parseInt(process.argv[i]);
		}
	}
	console.log(count);
}

countArgv();
