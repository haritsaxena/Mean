(function(){
	'use strict';
	var http = require('http');
	var mysql = require('mysql');
	var work = require('./lib/timetrack');

	var db = mysql.createConnection({
		host:     '127.0.0.1',
		user:     'root',
		password: 't2nm2y',
		database: 'timetrack'
	});

	var server = http.createServer(function(req, res){
		switch(req.method)
		{
			case 'GET':
			switch(req.url) {
				case '/':
				work.show(db, res);
				break;
				
				case '/archived':
				work.showArchived(db, res);
				break;
      		}
			break;
			
			case 'POST':
			switch(req.url) {
				case '/':
				work.add(db, req, res);
				break;
			}
			break;
		}
		// res.end();
	});

	// server.listen(3000, function(){
	// 	console.log('server started: 3000');
	// });	
	

	var sqlquery = 'CREATE TABLE IF NOT EXISTS work (' +
		' id INT(10) NOT NULL AUTO_INCREMENT,' +
		' hours DECIMAL(5,2) DEFAULT 0,' +
		' date DATE,' +
		' archived INT(1) DEFAULT 0,' +
		' description LONGTEXT,' +
		' PRIMARY KEY(id))';

	db.query(sqlquery, function(err) { 
			if (err) throw err;
			console.log('Server started...');
			server.listen(3000, '127.0.0.1'); 
	});
}());