var destJson = [];

exports.esbEndpoints = function(cendpoint, name)
{
  //var cendpoint = "amqps://host=rabbitmq-int.lb.geicoddc.net:5671,vmws0998.geicoddc.net:5671,vmws1071.geicoddc.net:5671,vmws2076.geicoddc.net:5671;"
  var endpointsArr = cendpoint.split(',');
  //var name = "ESB"
  for (var i=0;i<endpointsArr.length; i++)
  {
    endpointsArr[i] = endpointsArr[i].replace("amqps://host=","");
    endpointsArr[i] = endpointsArr[i].replace(";","");
    var endpt = endpointsArr[i].split(':');

    var endpoint = {
        "Enabled": "T",
        "Name": name + (+i),
        "Url": endpt[0],
        "Port": endpt[1],
        "Method": "TCP"
    }
    destJson.push(endpoint);
  }
  return destJson;
  //console.log(destJson);
}
