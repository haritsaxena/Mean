function wrapElements(elements){
  var i, n, result = [];
  for(i=0; i <= elements.length; i++){
    result[i] = function() {
      return elements[i];
    }
  }
  return result;
}
var a = wrapElements([10,20,30,40]);
a;
var f =a[1];
a[1];
f();
