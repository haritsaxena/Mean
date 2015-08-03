function wrapElements(elements){
  var result = [];
  for(var i=0; i <= elements.length; i++){
    (function() {
      var j =i;
      result[i] = function() {
        return elements[j];
      };
    })();
  }
    return result;
}

var a = wrapElements([10,20,30,40]);
a;
a[0];
var f = a[0];
f();
