(function(){
	'use strict';
	var connect = require('connect');
	var favicon = require('serve-favicon');
	var cookieparser = require('cookie-parser');
	var cookiesession = require('cookie-session');

	var root = __dirname;

	var app = connect()
	.use(favicon(root + '/harit.ico'))
	.use(cookieparser('keyboard cat'))
	.use(cookiesession({
		name: 'session',
		keys: ['key1', 'key2']
	}))
	.use(function(req, res){
		var sess = req.session;
		// console.log(sess);
		// req.session.cookie.expires = new Date(Date.now() + 5000);
		// req.session.cookie.maxAge = 5000;
		// req.session.cookie.path = './';
		// req.session.cookie.httpOnly = false;

		// res.write('<p>views: ' + sess.views + '</p>');
		// res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>');
		// res.write('<p>httpOnly: ' + sess.cookie.httpOnly + '</p>');
		// res.write('<p>path: ' + sess.cookie.path + '</p>');
		// res.write('<p>domain: ' + sess.cookie.domain + '</p>');
		// res.write('<p>secure: ' + sess.cookie.secure + '</p>');
		if (sess.views) {
			res.setHeader('Content-Type', 'text/html');
			res.write('<p>views: ' + sess.views + '</p>');
			res.end();
			sess.views++;
		} else {
			sess.views = 1;
			res.end('welcome to the session demo. refresh!');
		}	
		res.end('hello');
	});

	app.listen(3000);

}());