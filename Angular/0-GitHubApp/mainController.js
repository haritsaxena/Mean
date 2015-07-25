(function() {
	
	'use strict';
	angular.module('GithubViewer')
	.controller('mainController', ['$scope','$interval','$location', 
	function($scope, $interval, $location){
		
		var counter;
		var decrementcounter = function(){
			$scope.countdown -= 1;			
			if ($scope.countdown < 1){
				$scope.search($scope.username);
		}

		};

		var startcountdown = function(){
		 	counter = $interval(decrementcounter, 1000);
		};

		$scope.search = function(username){
			if (counter)
			{
				$interval.cancel(counter);
				$scope.countdown = null;
					
			}
			$location.path('/user/' + username);
		};
		
		$scope.countdown = 5;
		$scope.username = 'angular';
		startcountdown();
	}]);
}());