/*
Functions that keep track of variables from their containing scopes are known as closures
*/
function makeSandwich() {
  "use strict"
  var magicIngredient = "peanut butter";
  // The make function is a closure whose code refers to two outer variables:
  // magicIngredient and filling.
  function make(filling) {
    return magicIngredient + " and " + filling;
  }
  return make("jelly")
}
makeSandwich(); // "peanut butter and jelly"
