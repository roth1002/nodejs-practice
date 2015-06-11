var fs = require('fs')
var path = require('path')

function Readdir (dirName, extStr, callback) {

  fs.readdir(dirName, function (err, list) {
    if (err)
      return callback(err)

    list = list.filter(function (file) {
      return path.extname(file) === '.' + extStr
    })

    callback(null, list)
  })
}

module.exports = Readdir;