var express = require('express'),
    path = require('path'),
    fs = require('fs');

var app = express();
var staticRoot = __dirname + '/';

app.set('port', (process.env.PORT || 3000));

app.use(express.static(staticRoot));

app.get('/', function(req, res) {
    res.sendfile(__dirname+'/index1.html')

});

app.listen(app.get('port'), function() {
    console.log('app running on port', app.get('port'));
    console.log('static root is ', staticRoot);
});