(function() {
	
	'use strict';
	angular.module('GithubViewer')
	.controller('mainController', ['$scope','$interval', function($scope, $interval){
		
		var decrementcounter = function(){
			$scope.countdown -= 1;			
		};

		var startcountdown = function(){
			$interval(decrementcounter, 1000);
		};

		$scope.countdown = 5;
		startcountdown();
	}]);
}());