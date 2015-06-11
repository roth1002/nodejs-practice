var fs = require('fs');

function callLS () {

	var dirName = process.argv[2];
	var fileExtension = process.argv[3];
	var dir_arr = fs.readdir(dirName, function(err, files){
		for ( var i = 0; i <= files.length - 1; i++) {
			//console.log(files[i]);
			if (files[i].split('.').length === 1 || ( files[i].split('.').length === 2 && files[i].split('.')[1] !== fileExtension) ){
				//console.log(files[i]);
			} else {
				console.log(files[i]);
			}
		}
		//console.log(files);
	});
}

callLS();