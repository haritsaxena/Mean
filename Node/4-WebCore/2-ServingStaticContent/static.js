(function(){
	'use strict';
	var http = require('http');
	var parse = require('url').parse;
	var fs = require('fs');
	var path = require('path');
	// var join = require('path').join;
	
	var root = __dirname;
	var server = http.createServer(function(req, res){
		// var rPath = root + req.url;
		var url = parse(req.url);	
		var rpath = path.join(root, url.pathname);
		var stream;
		console.log(url.pathname);
		
		if (path.extname(rpath) != '.ico'){
			console.log(rpath);
			stream = fs.createReadStream(rpath);
			//console.log(stream.length);
			stream.pipe(res);

			stream.on('error', function(err) {
				res.statusCode = 500;
				console.log(err);
				res.end('internal error');
			});
		
		}

		// // This will wait until we know the readable stream is actually valid before piping
		// stream.on('open', function () {
		// // This just pipes the read stream to the response object (which goes to the client)
		// 	stream.pipe(res);
		// });

		// This catches any errors that happen while creating the readable stream (usually invalid names)
		
		//res.end();
		
	});
	
	server.listen(3000, function(){
		console.log('server started at port 3000');
	});
}());