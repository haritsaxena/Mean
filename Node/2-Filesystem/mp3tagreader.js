(function() {
	'use strict';
	var id3 = require('id3js');
	id3({ file: '/home/harit/Music/bollywood new/01 Aaj Dil Shaayraana - Songspk.name.mp3', type: id3.OPEN_LOCAL }, function(err, tags) {
		if (err){
			return err;
		}
		//console.log(tags);
		console.log(tags);
		console.log();
		replaceNullChars(tags.album, function(foldername, err){
			console.log(foldername);	
		});
		

	});

	function replaceNullChars(stringname,cb){
		var string = stringname.replace('\0', '');
		string = string.replace(/\0/g, '');
		console.log(string);
		cb(string);
	}
}());