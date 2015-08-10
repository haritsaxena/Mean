(function(){
	'use strict';

	var fs = require('fs');
	var path = require('path');
	var filepath = '.';
	var uniqWords = {};
	var tasks = [];
	var counter = 0;

	function checkComplete() {
		// body...
		counter++;
		console.log(counter);

		if (tasks.length === counter) {
			console.log(uniqWords);
		}
	}

	function getWordCount (data) {
		// body...
		//console.log(data.toString());
		var filewords = data
		.toString()
		.toLowerCase()
		.split(/\W/);
		
		// for (var word in filewords) {
		// 	// words[word] = filewords[word] ?  filewords[word] + 1 : 1;
		// 	//console.log(filewords[word]);
		// 	if (uniqWords[filewords[word]])
		// 		uniqWords[filewords[word]] = uniqWords[filewords[word]] + 1;
		// 	else
		// 		uniqWords[filewords[word]] = 1;
		// }


		for (var i = 0, len = filewords.length; i < len; i++) {
		 	var file = filewords[i];
		 	if (uniqWords[file])
				uniqWords[file] = uniqWords[file] + 1;
			else
				uniqWords[file] = 1;
		}
		// checkComplete(); // will work correctly here also
	}

	// function readFile (filename) {
	// 	fs.readFile(filename, function(err, data){
	// 		if (err) throw err;
	// 		//console.log(data);
	// 		getWordCount(data);			
	// 	});
	// }

	// var readFile = function(filename) {
	function readFile (filename) {
		return function(){
			fs.readFile(filename, function(err, data){
				if (err) throw err;
			//console.log(data);
			getWordCount(data);
			checkComplete(); // will work correctly
		});
		};
	}
	
	fs.readdir(filepath, function(err, files){
		if (err) throw err;
		
		for (var i = 0; i < files.length; i++) {
			//console.log(files[i]);
			if (path.extname(files[i]) === '.txt'){
				//console.log(files[i]);
				tasks.push(readFile(files[i]));
			}
		}

		// }
		// for (var file in files) {
		// 	if (path.extname(files[file]) === '.txt'){
		// 		// console.log(files[file]);
		// 		tasks.push(readFile(files[file]));
		// 	}
		// }


	
		for (var j = 0; j < tasks.length; j++) {
			tasks[j]();
			// checkComplete(); won't work here as the calls are asynchronus, will find no elements
		}
		
	});

}());