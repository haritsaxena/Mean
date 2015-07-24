(function(){
	// body...
	'use strict';
	
	angular.module('myApp', [])
	.controller('maincontroller', ['$scope', 'githubsvc', function($scope, githubsvc){
		$scope.name1 = 'test';
		$scope.notfound = false;

		$scope.getdetails = function(name){
			githubsvc(name).success(function(events){
				var allevents = events.data;
				if (allevents.message){
					$scope.notfound = true;
				}
				else{
					$scope.notfound = false;
					$scope.dataelem = events.data;	
				}
			}).error(function(){
				$scope.dataelem = 'oops error occurred';
			});
		};
	}])
	
	.factory('githubsvc', ['$http', function($http){
		return function githubsvc(username){
			return $http ({
				method: 'JSONP',
				url: 'https://api.github.com/users/' + username + '/events?callback=JSON_CALLBACK'
			});
		};
	}]);

}());