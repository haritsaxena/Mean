(function() {
	'use strict';
	var id3 = require('id3js');
	var fs=require('fs'), path = require('path');

	var dir='/home/harit/Music/bollywood new/';

	fs.readdir(dir,function(err,files){
		if (err) throw err;
		var c=0;
		files.forEach(function(file){
			var filePath = path.join(dir, file);
			var stat = fs.statSync(filePath);
	        	// console.log(filePath);
	        	if (stat.isFile()){
	        		id3({ file: filePath, type: id3.OPEN_LOCAL }, function(err, tags) {
	        			if (err){
	        				return err;
	        			}
						//console.log(tags);
						replaceNullChars(tags.album, function(foldername,err){
							// console.log('old path:' + filePath + ' new path:' + dir + foldername + '/' + file);
							// console.log();

							ensureExists(dir + foldername, function(err){
								if (err) throw err;

								var newfile = dir + foldername + '/' + file;
								move(filePath, newfile, function(err){
									if (err){
										console.log('Process failed for ' + newfile);
										return err;
									}

								});	
							});

						});
						
					});

	        		c++;
	        	}
	        });
		console.log(c);
	});

	function ensureExists(path, cb) {
		fs.mkdir(path, function(err) {
			if (err) {
	            if (err.code == 'EEXIST') cb(null); // ignore the error if the folder already exists
	            else cb(err); // something else went wrong
	        } else cb(null); // successfully created folder
	    });
	}

	function move (oldPath, newPath, callback) {
		fs.rename(oldPath, newPath, function (err) {
			if (err) {
				if (err.code === 'EXDEV') {
					copy();
				} else {
					callback(err);
				}
				return;
			}
			callback();
		});
	}

	function copy () {
		var readStream = fs.createReadStream(oldPath);
		var writeStream = fs.createWriteStream(newPath);
		newPath = newPath.replace(' - Songspk.name', '');
		newPath = newPath.replace(' - Songspk.nam', '');
		newPath = newPath.replace(' - Songspk.na', '');
		
		readStream.on('error', callback);
		writeStream.on('error', callback);
		readStream.on('close', function () {
			fs.unlink(oldPath, callback);
		});

		readStream.pipe(writeStream);
	}

	function replaceNullChars(stringname,cb){
		var string = stringname.replace('\0', '');
		string = string.replace(/\0/g, '');
		cb(string);
	}
}());