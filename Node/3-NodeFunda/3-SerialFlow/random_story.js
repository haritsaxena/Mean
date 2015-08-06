(function(){
  'use strict';

  var fs = require('fs');
  var request = require('request');
  var htmlparser = require('htmlparser');
  var configFilename = './rss_feeds.txt';

  function checkForRSSFile () {
    fs.exists(configFilename, function(exists) {
      if (!exists)
        return next(new Error('Missing RSS file: ' + configFilename));

      next(null, configFilename);
    });
  }

  function readRSSFile (configFilename) {
    fs.readFile(configFilename, function(err, feedList) {
      if (err) return next(err);

      feedList = feedList
      .toString()
      .replace(/^\s+|\s+$/g, '')
      .split('\n');
      //console.log(feedList);
      var random = Math.floor(Math.random()*feedList.length);
      next(null, feedList[random]);
    });
  }

  function downloadRSSFeed (feedUrl) {
    request({uri: feedUrl}, function(err, res, body) {
      if (err) return next(err);
      if (res.statusCode != 200)
        return next(new Error('Abnormal response status code'));

      next(null, body);
    });
  }

  function parseRSSFeed (rss) {
    var handler = new htmlparser.RssHandler();
    var parser = new htmlparser.Parser(handler);
    parser.parseComplete(rss);
    //console.log(rss);
    // we get an rss feed here but failing in reading the xml.
    if (!handler.dom.items.length)
      return next(new Error('No RSS items found'));
     //console.log(rss);
    var item = handler.dom.items.shift();
    console.log(item.title);
    console.log(item.link);
  }

  var tasks = [ checkForRSSFile,
  readRSSFile,
  downloadRSSFeed,
  parseRSSFeed ];

  function next(err, result) {
    if (err) throw err;

    var currentTask = tasks.shift();
    //console.log(currentTask);

    if (currentTask) {
      //console.log(result);
      currentTask(result);
    }
  }

  next();
}());
