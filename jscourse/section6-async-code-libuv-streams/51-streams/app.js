var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greet.txt',{encoding: 'utf-8', highWaterMark:10 * 1024});

var writeable = fs.createWriteStream(__dirname + '/greet_copy.txt')

readable.on('data', function(chunk){
    console.log(chunk);
    writeable.write(chunk);
});

