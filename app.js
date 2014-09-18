var express = require('express');

var app = express();

app.get('/', function(req, res) {
  var size = parseInt(process.env.EXCLAMATION_COUNT) + 1;
  var exclamations = Array(size).join('!');

  res.send('Success' + exclamations);
});

var port = 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
