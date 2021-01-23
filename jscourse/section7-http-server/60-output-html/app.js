var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var html = fs.readFileSync(__dirname + '/index.html','utf-8');
    html = html.replace('{Message}', 'Hello world')
    res.end(html)
}).listen(3000, '127.0.0.1');