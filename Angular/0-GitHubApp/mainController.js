(function() {
	
	'use strict';
	angular.module('GithubViewer')
	.controller('mainController', ['$scope','$interval', function($scope, $interval){
		
		var counter;
		var decrementcounter = function(){
			$scope.countdown -= 1;			
			if ($scope.countdown < 1){
				$interval.cancel(counter);
				$scope.countdown = null;
			}

		};

		var startcountdown = function(){
		 	counter = $interval(decrementcounter, 1000);
		};

		$scope.countdown = 5;
		startcountdown();
	}]);
}());