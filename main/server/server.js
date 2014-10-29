var express = require('express');
var debug = require('debug')('My-Dota2-Stats');
var path = require('path');
var fs = require('fs');

var app = express();

app.use(express.static(path.join(__dirname, '/../client')));



//
// Routes
//

var basePath = path.join(__dirname, '/routes/');
fs.readdirSync(basePath).forEach(function(filename) {
	var basePathService = '/' + filename.replace(/\.js$/, '');
	var serviceDefinition = basePath + filename;
	app.use(basePathService, require(serviceDefinition)(io));
});

var port =  process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 9001; 
var ip =  process.env.OPENSHIFT_NODEJS_IP || process.env.IP || '0.0.0.0'; 

app.listen(port, ip, function () {
	debug('Application listening on http://' + ip + ':' + port);
});

module.exports = app;