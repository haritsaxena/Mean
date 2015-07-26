(function(){
	'use strict';

	var repoController = function($scope, $routeParams,gitHub){
		$scope.userName = $routeParams.username;
		$scope.repoName = $routeParams.reponame;

		var OnRepoComplete = function(data){
			$scope.IssueCount = data.open_issues_count;
			gitHub.get(data.contributors_url).then(onContribComplete, OnError);
		};

		var onContribComplete = function(data){
			$scope.contributors = data;
		};

		var OnError = function(reason){
			$scope.error = reason;
		};

		gitHub.getRepo($scope.repoName, $scope.userName).then(OnRepoComplete, OnError);
	};

	angular.module('GithubViewer')
	.controller('repoController', ['$scope','$routeParams', 'gitHub', repoController]);
}());