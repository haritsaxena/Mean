(function(){
	'use strict';
	var http = require('http');
	var url = require('url');
	var path = require('path');
	var fs = require('fs');

	var root = __dirname;
	var server = http.createServer(function(req, res){
		var rurl = url.parse(req.url);
		var filepath = path.join(root, rurl.pathname);
		console.log(filepath);

		fs.stat(filepath, function(err, stats){
			if (err)
			{
				res.end('file not found ');
			} 
			else
			{
				res.setHeader('content-length', stats.size);
				var stream = fs.createReadStream(filepath);
				stream.pipe(res);
				stream.on('error', function(err){
					res.statusCode = 500;
					res.end(err.Error);
				});
			}
		});
	});

	server.listen(3000, function(){
		console.log('server at 3000');
	});
}());