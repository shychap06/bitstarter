var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());


app.configure(function(){
    app.use(express.static(__dirname + "/img/site"));
    }
);


app.get('/', function(request, response) {
    response.send(fs.readFileSync('index.html').toString('utf8'));
});




var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
