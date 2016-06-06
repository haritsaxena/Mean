/*
Functions that keep track of variables from their containing scopes are known as closures
 */

function sandwitchMaker() {
	"use strict";
	var specialIngredient = "Jam";
	function make(filling) {
		return specialIngredient + " and " + filling;
	}
	return make;
}
var makeSandwich = sandwitchMaker();
console.log(makeSandwich("bread"));
makeSandwich("butter");

function DishMaker(magicIngredient) {
	function make(filling) {
		return magicIngredient + " and " + filling;
	}
	return make;
}
var hamAnd = DishMaker("ham");
hamAnd("cheese"); // "ham and cheese"
hamAnd("mustard"); // "ham and mustard"
var turkeyAnd = DishMaker("turkey");
turkeyAnd("Swiss"); // "turkey and Swiss"
turkeyAnd("Provolone"); // "turkey and Provolone"
