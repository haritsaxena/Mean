
JsonBuilder = function(){
//function JsonBuilder (){
	var jsonfile = require('jsonfile')
	var file = 'data.json'
	
	jsonfile.spaces = 4;
	
	var basejson = JSON.parse('{"EndPoint":[]}');
	//var basejson = JSON.parse(setup);
	
	//{"Configuration":{"EndPoints":{"EndPoint":[]}}}
	this.insert = function(ele) {
		basejson['EndPoint'].push(ele);
	};
	
	this.build = function()
	{
		var result =  '{"Configuration":{"EndPoints":' + JSON.stringify(basejson) + '}}';
		//console.log(result)
		var finalJson = JSON.parse(result);
		jsonfile.writeFile(file, finalJson, function (err) {
		  if (err !== null)
				console.log(err)
		})
		return ;
		//return basejson ;
	};
};

var jbuild = new JsonBuilder();

jbuild.insert('{ "ExternalSystem": "Insite Discount",  "EnvName": "loadtest",  "URL": "http://172.18.38.56:9085" }');
jbuild.insert('{ "ExternalSystem": "Insite Discount",  "EnvName": "loadtest",  "URL": "http://172.18.38.56:9086" }');
jbuild.insert('{ "ExternalSystem": "Insite Discount",  "EnvName": "loadtest",  "URL": "http://172.18.38.56:9087" }');
jbuild.insert('{ "ExternalSystem": "Insite Discount",  "EnvName": "loadtest",  "URL": "http://172.18.38.56:1111" }');
jbuild.build();

/*
var jsonStr = '{"Configuration":{"EndPoints":{"theTeam":[]}}}';

var obj = JSON.parse(jsonStr);
obj['Configuration.EndPoints.theTeam'].push({"teamId":"4","status":"pending"});

function buildJson(){
	
	var basejson = '{
		"Configuration": {
		"EndPoints": {
			"EndPoint": []
		}
		}
	}'
	return function(ele) {
		var json = {
				"Enabled": "T",
				"Name": ele.ExternalSystem,
				"Url": ele.URL,
				"Method": "GET"
			}
	}
}

*/


/*
var add5 = buildJson('');
add5 = add5('{ "ExternalSystem": "Insite Discount",  "EnvName": "loadtest",  "URL": "http://172.18.38.56:9085" }');
//add5 = add5('{ "ExternalSystem": "Insite Discount",  "EnvName": "loadtest",  "URL": "http://172.18.38.56:9085" }')
//add5 = add5('{ "ExternalSystem": "Insite Discount",  "EnvName": "loadtest",  "URL": "http://172.18.38.56:9085" }')
add5 = add5('{ "ExternalSystem": "Insite Discount",  "EnvName": "loadtest",  "URL": "http://172.18.38.56:9086" }');
console.log(add5);

console.log(obj);
*/