/*
• Variable declarations within a block are implicitly hoisted to the top of their enclosing function.

• Redeclarations of a variable are treated as a single variable.

• Consider manually hoisting local variable declarations to avoid confusion.
*/

function test(){
  var x = "var", result = [];
  result.push(x);
  try{
    throw exception
  }
  //catch(x) // here x is redefined but its scope is in catch only
  catch(ex) // here ex is defined with catch scope x is used as function scope.
  {
    x = "ex";
  }
  result.push(x);
  return result;
}
test();
