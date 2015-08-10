(function(){
	'use strict';
	var connect = require('connect');
	var query = require('connect-query');
	
	connect()
	.use(query())
	.use(function(req, res){
		res.end('received query string' + JSON.stringify(req.query));
	}).listen(3000);

}());