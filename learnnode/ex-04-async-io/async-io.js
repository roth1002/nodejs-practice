var fs = require('fs')

function sumFileNumber () {

    var file = process.argv[2]

    fs.readFile(file, function (err, contents) {
      var lines = contents.toString().split('\n').length - 1
      console.log(lines)
    })

}

sumFileNumber();