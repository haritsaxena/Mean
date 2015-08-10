(function(){
	'use strict';
	var qs = require('querystring');	

	exports.parseReceivedData = function(req, cb){
		req.setEncoding('utf8');
		var body;
		req.on('data', function(chunk){
			body += chunk;
		});
		req.on('end', function(){
			console.log(body);
			var data = qs.parse(body);
			console.log(data);
			cb(data); 
		});

	};

	exports.add = function(db, req, res) {
		exports.parseReceivedData(req, function(work){
			db.query(
			"INSERT INTO work (hours, date, description) " + 
			" VALUES (?, ?, ?)",
			[work.hours, work.undefineddate, work.description], 
			function(err) {
				if (err) throw err;
				exports.show(db, res); 
			});
		});
	};

	exports.show = function(db, res, showArchived) {
		var query = "SELECT * FROM work " + 
		"WHERE archived=? " +
		"ORDER BY date DESC";
		var archiveValue = (showArchived) ? 1 : 0;
		console.log('inside' + archiveValue);
		db.query(
			query,
			[archiveValue], 
			function(err, rows) {
				if (err) throw err;
				var html = (showArchived)? '' : '<a href="/archived">Archived Work</a><br/>';
				html += exports.workHitlistHtml(rows); 
				html += exports.workFormHtml();
				console.log(html);
				exports.sendHtml(res, html); 
			});
	};

	exports.workHitlistHtml = function(rows) {
		var html = '<table>';
		for(var i in rows) { 
			html += '<tr>';
			html += '<td>' + rows[i].date + '</td>';
			html += '<td>' + rows[i].hours + '</td>';
			html += '<td>' + rows[i].description + '</td>';
			if (!rows[i].archived) { 
				html += '<td>' + exports.workArchiveForm(rows[i].id) + '</td>';
			}
			html += '<td>' + exports.workDeleteForm(rows[i].id) + '</td>';
			html += '</tr>';
		}
		html += '</table>';
		return html;
	};

	exports.workFormHtml = function() {
		var html = '<form method="POST" action="/">' + 
		'<p>Date (YYYY-MM-DD):<br/><input id="date" name="date" type="text"><p/>' +
		'<p>Hours worked:<br/><input name="hours" type="text"><p/>' +
		'<p>Description:<br/>' +
		'<textarea name="description"></textarea></p>' +
		'<input type="submit" value="Add" />' +
		'</form>';
		return html;
	};	

	exports.sendHtml = function(res, html) { 
		res.setHeader('Content-Type', 'text/html');
		res.setHeader('Content-Length', Buffer.byteLength(html));
		res.end(html);
	};

	exports.workArchiveForm = function(id) { 
  		return exports.actionForm(id, '/archive', 'Archive');
	};

	exports.workDeleteForm = function(id) { 
  		return exports.actionForm(id, '/delete', 'Delete');
	};

	exports.actionForm = function(id, path, label) { 
		var html = '<form method="POST" action="' + path + '">' +
		'<input type="hidden" name="id" value="' + id + '">' +
		'<input type="submit" value="' + label + '" />' +
		'</form>';
		return html;
	};
}());