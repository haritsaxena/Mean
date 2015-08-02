(function(){
	'use strict';
	var events = require('events');
	var net = require('net');

	var channel = new events.EventEmitter();
	channel.on('join', function(id, client){
		console.log('Joined' + id);
	});
	
	channel.on('broadcast', function(id, msg){
		console.log(msg + 'from' + id);
	});


	var server = net.createServer();
	server.on('connection', function(socket) {
		 
		var id = socket.remoteAddress + ":" + socket.remotePort;
		channel.emit('join', id, socket);

		socket.on('data', function(msg){
			channel.emit('broadcast', id, msg.toString()); // broadcast is arbitary string
		});
	});	

	//telnet 127.0.0.1 8888
	server.listen(8888, function(){
		console.log("started listening");
	});
}());