var express = require('express');
var debug = require('debug')('My-Dota2-Stats');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');


var app = express();


app.use(favicon(__dirname + '/../client/favicon.ico'));
app.use(express.static(path.join(__dirname, '/../client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Custom error handler
app.use(function(err, req, res, next) {
	if (err) {

		if (!err.statusCode || err.statusCode === 500) {
			console.error(err);
		}

		var errorJson = {
			err: err.err || err.code || 'server_error',
			des: err.des || err.message || err.name || 'unknown'
		};

		res.json(err.statusCode || 500, errorJson);

	} else {
		next();
	}
});

//
// Routes
//

var basePath = path.join(__dirname, '/routes/');
fs.readdirSync(basePath).forEach(function(filename) {
	var basePathService = '/' + filename.replace(/\.js$/, '');
	var serviceDefinition = basePath + filename;
	app.use(basePathService, require(serviceDefinition));
});

var port =  process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 9001; 
var ip =  process.env.OPENSHIFT_NODEJS_IP || process.env.IP || '0.0.0.0'; 

app.listen(port, ip, function () {
	debug('Application listening on http://' + ip + ':' + port);
});

module.exports = app;
