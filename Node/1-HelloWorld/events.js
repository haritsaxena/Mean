'use strict';
var fs = require('fs');

var stream = fs.createReadStream('./document.txt');
stream.on('data', function(chunk){
	console.log(chunk);	
});

stream.on('end', function(){
	console.log('end');
});
