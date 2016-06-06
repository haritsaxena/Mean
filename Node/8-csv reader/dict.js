var dict = {};

var point = function(x,y){
 this.x = x;
 this.y = y;
};

var point1 = new point(10,20);
var point2 = new point(100,200);

dict['point1'] = point1;
dict['point2'] = point2;

if (dict['point1'] == undefined)
{
	console.log('not found')
}

dict['point3'] = new point (150,250);
console.log(dict);

for (var item in dict) {
  console.log('key:' + item + ' value: x,y ' + dict[item].x, dict[item].y);
  // Output
  // key:key value:value
  // key:anotherKey value:anotherValue
}
