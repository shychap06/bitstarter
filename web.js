var express = require('express');
var fs = require('fs');
var buffer = new Buffer(128);
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    fs.readFileSync("index.html", buffer);
    response.send(buffer.toString('utf8');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
