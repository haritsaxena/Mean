(function(){
	'use strict';
	var fs = require('fs');
	var path = require('path');
	var filepath = '.';

	function getWordCount (data) {
		// body...
		console.log(data.toString());
	}

	function readFile (filename) {
		fs.readFile(filename, function(err, data){
			if (err) throw err;
			//console.log(data);
			getWordCount(data);			

		});

	}
	
	fs.readdir(filepath, function(err, files){
		if (err) throw err;
		for (var file in files) {
			if (path.extname(files[file]) === '.txt'){
				// console.log(files[file]);
				readFile(files[file]);
			}
		}
	});

}());