var express = require('express'),
    path = require('path'),
    fs = require('fs');

var app = express();
var staticRoot = __dirname + '/';

app.set('port', (process.env.PORT || 3000));

app.use(express.static(staticRoot));

app.use(function(req, res, next){

    

    fs.createReadStream(staticRoot + 'index.html').pipe(res);

});

app.all('*', function (req, res) { res.status(200).sendFile(path.join(__dirname, '/index.html')); });

app.get('*', function(req, res, next) {
  res.sendfile("index.html");
});

app.listen(app.get('port'), function() {
    console.log('app running on port', app.get('port'));
    console.log('static root is ', staticRoot);
});