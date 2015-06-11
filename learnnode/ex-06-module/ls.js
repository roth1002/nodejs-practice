var Readdir = require('./readdir');
var dirName = process.argv[2];
var fileExtension = process.argv[3];

Readdir ( dirName, fileExtension, function (err, list) {
  if (err)
    return console.log('There was an error:', err);

  list.forEach(function (file) {
    console.log(file)
  });
});