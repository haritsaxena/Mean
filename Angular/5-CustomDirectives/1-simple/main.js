(function() {
	'use strict';

	angular.module('App', [])	
	.controller('mainController', ['$scope', function($scope){
		$scope.customer = { name: 'naimo', address: '700 montroe street'};
	}])

	// use camel case for directive name
	.directive('myCustomer', function(){
		// Runs during compile
		return {
			// name: '',
			// priority: 1,
			// terminal: true,
			// scope: {}, // {} = isolate, true = child, false/undefined = no change
			// controller: function($scope, $element, $attrs, $transclude) {},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
			template: 'Name : {{customer.name}} address: {{customer.address}}'
			// templateUrl: '',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			
		};
	});
}());
