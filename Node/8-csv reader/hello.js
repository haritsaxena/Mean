/* Hello, World! program in node.js */
console.log("Hello, World!")
var rocker = require('./esbsplit.js');
console.log(rocker.esbEndpoints("amqps://host=rabbitmq-int.lb.geicoddc.net:5671,vmws0998.geicoddc.net:5671,vmws1071.geicoddc.net:5671,vmws2076.geicoddc.net:5671;","ESB"));
