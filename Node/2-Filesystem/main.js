var fs = require("fs");

var readfile = function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
};

fs.readFile('input.txt', readfile);

console.log("Program Ended");