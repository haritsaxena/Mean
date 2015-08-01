(function(){
'use strict';

var http = require('http');
var fs  = require('fs');
var path = require('path');
var mime = require('mime');
var cache = {};


//taskkill /IM node.exe - kills node - windows
// killall node - linux
var send404 = function(response){
	response.writeHead(404, {'Content-Type': 'text/plain'});
	response.write('Error: 404 file not found');
	response.end();
};

var sendFile = function(response, filePath, fileContents){
	response.writeHead(200, { 'content-type': mime.lookup(path.basename(filePath))});
	response.end(fileContents);
};

var serveStatic = function(response, cache, absPath){
	if (cache[absPath]) {
		sendFile(response, absPath, cache[absPath]);
	} else {
		fs.exists(absPath, function(exists) {
			if (exists) {
				fs.readFile(absPath, function(err, data) {
					if (err) {
						send404(response);
					} else {
						cache[absPath] = data;
						sendFile(response, absPath, data);
					}
				});
			} else {
				send404(response);
			}
		});
	}
};

var server = http.createServer(function(req, res){
	var filepath;
	if (req.url === '/')
	{
		filepath = './public/index.html';
	}
	else
	{
		filepath = './public' + req.url;
	}
	serveStatic(res, cache, filepath);
}); 
server.listen(9000, function() {
	console.log('Server listening on port 9000.');
});

var chatServer = require('./lib/chat_server');
chatServer.listen(server);
}());