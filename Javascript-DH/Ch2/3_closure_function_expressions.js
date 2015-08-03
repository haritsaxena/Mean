/*
Notice that this function expression is anonymous: It’s not even necessary to name the function since we are only evaluating it to
produce a new function value, but do not intend to call it locally. Function expressions can have names too.
*/
function sandwitchMaker(ingriedent){
  return function(filling){
    return ingriedent + " and " + filling;
  }
}
var maker = sandwitchMaker("Bread");
maker("Jam");
