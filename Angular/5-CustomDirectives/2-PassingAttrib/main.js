(function(){
	'use strict';
	angular.module('myApp', [])
	.controller('mainController', ['$scope', function($scope){
		$scope.customer = {
			name: 'niaomi',
			address: '700 main st'
		};
	}])

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
			// template: '',
			// templateUrl: '',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			template: function(iElm, iAttrs) {
				return iAttrs.type + iElm;
			}
		};
	});
}());