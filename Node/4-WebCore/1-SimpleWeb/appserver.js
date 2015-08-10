(function(){
	'use strict';
	var http = require('http');
	var items = [];
	var server = http.createServer(function(req, res){
		var item = '';
		switch (req.method)
		{
			case 'POST':
			req.setEncoding('utf-8');
			req.on('data', function(data){
				item += data;
			});
			req.on('end', function(){
				items.push(item);
				res.end();
			});
			break;

			case 'GET':
			var body = '';
			for (var i = 0; i < items.length; i++) {
				body += (items[i]);
			}
			// var body = items.map(function(item, i){
			// 	return i + ') ' + item;
			// }).join('\n'= );
			res.setHeader('Content-Length', Buffer.byteLength(body));
			res.setHeader('Content-Type', 'text/plain; charset="utf-8"');
			console.log(body);
			res.end(body);
			break;
		}


	});

	server.listen(3000, function(){
		console.log('application started at 3000');
	});

}());