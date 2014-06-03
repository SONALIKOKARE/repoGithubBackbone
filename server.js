/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');
var path = require('path');
var fs = require('fs');
var convertor = require('node-xml2json');
var app = express();

// all environments
app.set('port', process.env.PORT || 5000);
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'src')));

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

//SERVICE CALLS;
app.use(function(request, response, next) {
	var file;
	switch (request.url) {
		case '/template/':
			file = path.join(__dirname, '/service/data/categoryList.json');
			break;
		case '/read/':
			file = path.join(__dirname, '/service/data/categoryList.json');
			break;
		case '/audioTiming?audioId=au008866':
			file = path.join(__dirname, '/service/data/cuePoint_au008866.json');
			break;
		case '/audioTiming?audioId=au008867':
			file = path.join(__dirname, '/service/data/cuePoint_au008867.json');
			break;
		case '/audioTiming?audioId=au008868':
			file = path.join(__dirname, '/service/data/cuePoint_au008868.json');
			break;
	}
	//if(!file) return;
	fs.readFile(file, 'utf8', function(err, data) {
		try {
			response.send(data);
		} catch (e) {console.log(e)}
	});
});

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});
