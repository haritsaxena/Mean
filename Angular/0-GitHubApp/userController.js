(function () {
	'use strict';

	var userController = function($scope,$routeParams,gitHub){
		
		var onUserComplete = function(data){
			//$scope.repos = response.data.repos_url;
			$scope.User = data;
			gitHub.getRepos(data.repos_url).then(onReposComplete, onError);
		};

		var onError = function(reason){
			$scope.error = "Could not fetch data";
		};

		var onReposComplete = function(data){
			//$scope.repoUrl = data.repos_url;
			$scope.repos = data;
		};
		

		$scope.username = $routeParams.username;
		$scope.sortorder = "name";
				//github.getRepos('https://api.github.com/users/haritsaxena/repos').then(onUserComplete);
		gitHub.getUser($scope.username).then(onUserComplete, onError);
	};

	angular.module('GithubViewer')
	.controller('userController', ['$scope','$routeParams', 'gitHub', userController]);
}());