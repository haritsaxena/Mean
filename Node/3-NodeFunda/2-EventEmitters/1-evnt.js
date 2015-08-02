(function(){
	'use strict';
	// var Evnt = require('events').EventEmitter;
	// var channel = new Evnt(); 

	var Evnt = require('events');
	var channel = new Evnt.EventEmitter(); 
	channel.on('join1', function(){
		console.log('Welcome');
	});

	channel.emit('join1');
}());