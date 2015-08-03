/*
* Functions can refer to variables defined in outer scopes.

• Closures can outlive the function that creates them.

• Closures internally store references to their outer variables, and can both read and update their stored variables.
*/

function box(){
  var localStorage = undefined
  return {
    set: function(value){
      localStorage = value;
    },
    get: function(){
    return localStorage;
    },
    type: function(){
      return typeof localStorage;
    },
  }
}
var b = box();
b.type();
b.set(98.6);
b.type();
b.set("98.6");
b.type();
b.get();
