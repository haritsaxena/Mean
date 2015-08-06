(function(){
	'use strict';
	var fs = require('fs');
	var completedTasks = 0;
	var tasks = [];
	var wordCounts = {};
	var filesDir = './text';

	function checkIfComplete() {
		completedTasks++;
		if (completedTasks == tasks.length) {
			for(var index in wordCounts) { 
				console.log(index +': ' + wordCounts[index]);
			}
		}
	}

	function countWordsInText(text) {
		var words = text
		.toString()
		.toLowerCase()
		.split(/\W+/)
		.sort();
		for(var index in words) { 
			var word = words[index];
			if (word) {
				wordCounts[word] = (wordCounts[word]) ? wordCounts[word] + 1 : 1;
			}
		}
	}

	var task = function(file) { 
				return function() {
					fs.readFile(file, function(err, text) {
						if (err) throw err;
						countWordsInText(text);
						checkIfComplete();
					});
				};
			};

	fs.readdir(filesDir, function(err, files) { 
		if (err) throw err;
		for(var index in files) {
			var path = filesDir + '/' + files[index];
			tasks.push(task(path)); 
		}

		for(var task_item in tasks) { 
			tasks[task_item]();
		}
	});	
}());