(function(){
	'use strict';
	var connect = require('connect');
	var bodyParser = require('body-parser');

	connect()
	.use(bodyParser.json({ limit: '1kb' })) // limit size
	.use(bodyParser.urlencoded({
		extended: true
	}))
	.use(function(req, resp){
		var user = req.body.username;
		console.log(user);
		resp.end('received user name ' + user);
	}).listen(3000);	 	
}());