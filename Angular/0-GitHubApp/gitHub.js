(function (){
	'use strict';

	var userService = function($http,$log){
		//http://chariotsolutions.com/blog/post/angularjs-corner-using-promises-q-handle-asynchronous-calls/
		//http://www.peterbe.com/plog/promises-with-$http

		/*var usersAsync = function(username){
			var deferred = $q.defer();
			$http({
		      method: 'JSONP',
		      url: 'https://api.github.com/users/' + username
		    }).success(function(data){
		    	return deferred.resolve(data);
		    });

			return deferred.promise;
		};*/

		var usersAsync = function(username){
			return $http.get('https://api.github.com/users/' + username)
					.then(function(response){
						return response.data;
					});
		};

		var reposAsync = function(repoUrl){
			$log.log(repoUrl);
			return $http.get(repoUrl).
				then(function(response){
					return response.data;
			});
		};

		return {
			getUser: usersAsync,
			getRepos: reposAsync
		};
	};
	
	angular.module('GithubViewer')
	.factory('gitHub', ['$http', '$log', userService]);
}());