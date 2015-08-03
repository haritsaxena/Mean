(function(){
	'use strict';
	var events = require('events');
	var net = require('net');
	var colors = require('colors');

	var channel = new events.EventEmitter();
	channel.clients = {};
	channel.subscriptions = {};
	channel.on('join', function(id, client){
		console.log('Joined' + id);
		
		this.clients[id] = client;

		this.subscriptions[id] = function(senderId, msg){
			if (id != senderId) { 
				this.clients[id].write(msg);
			}
		};

		// console.log(this.clients);
		// console.log(this.subscriptions);
		

		this.on('broadcast', this.subscriptions[id]);

		this.on('leave', function(senderId){
			this.removeListener('broadcast', this.subscriptions[senderId]);
			console.log(senderId + 'left');
		});

		this.on('shutdown', function(senderId){
			this.removeAllListeners('broadcast', this.subscriptions[senderId]);
			console.log(senderId + 'shutting down');
		});
	});
	

	// channel.on('broadcast', function(id, msg){
	// 	console.log(msg + 'from' + id);
	// });


	var server = net.createServer();
	server.on('connection', function(socket) {

		var id = socket.remoteAddress + ":" + socket.remotePort;
		channel.emit('join', id, socket);

		socket.on('data', function(msg){
			var message = msg.toString();
			if (message.indexOf('shutdown') > 0){
				channel.emit('shutdown', id);
			}

			channel.emit('broadcast', id, msg.toString()); // broadcast is arbitary string
			
		});

		socket.on('close', function(msg){
			channel.emit('leave', id); // 
		});
	});	

	//telnet 127.0.0.1 8888
	server.listen(8888, function(){
		console.log("started listening");
	});
}());