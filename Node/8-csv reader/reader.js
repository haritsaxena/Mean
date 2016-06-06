var fs = require("fs");
var csv = require("fast-csv");
var stream = fs.createReadStream("./insite.csv");
var esbsplitter = require('./esbsplit.js');
var dict = {};


// Adds elements to endpoint node and finally write to file.
JsonBuilder = function(file){
//function JsonBuilder (){
	var jsonfile = require('jsonfile');
	var basejson = JSON.parse('{"Configuration":{"EndPoints":{"EndPoint":[]}}}');

	jsonfile.spaces = 2;
	file += ".json"
	//var basejson = JSON.parse(setup);

	//{"Configuration":{"EndPoints":{"EndPoint":[]}}}
	this.insert = function(ele) {
		var enabled = (ele.URL !== '') ? "T" : "F";
		var endpoint;

		// check if esb endpoints.
		if (ele.URL.indexOf("amqps://") > -1)
		{
				endpoint = esbsplitter.esbEndpoints(ele.URL,ele.ExternalSystem);
		}
		// normal endpoint
		else
		{
			endpoint = {
				"Enabled": enabled,
				"Name": ele.ExternalSystem,
				"Url": ele.URL,
				"Method": "GET"
			}
		}
		basejson.Configuration.EndPoints.EndPoint.push(endpoint);
	};

	this.build = function()
	{
		//var result =  '{"Configuration":{"EndPoints":' + JSON.stringify(basejson) + '}}';
		//var finalJson = JSON.parse(result);
		jsonfile.writeFile(file, basejson, function (err) {
			if (err !== null)
				console.log(err)
		})
		return ;
		//return basejson ;
	};
};


csv
 .fromStream(stream, {headers : true, ignoreEmpty: true})
 .on("data", function(data){

	var builder;
	var envname = data.EnvName.toLowerCase();
	if (dict[envname] == undefined)
	{
		builder = new JsonBuilder(envname);
	}
	else
	{
		builder = dict[envname]
	}
	builder.insert(data);
	dict[envname] = builder;
	console.log(data);
 })
 .on("end", function(){
    console.log("done");

	// call build on each element (JsonBuilder) in dict
	for (var item in dict) {
		dict[item].build();
	}
 });
