(function () {

	'use strict';
	var app = angular.module('GithubViewer', ['ngRoute']);

	app.config(['$routeProvider',function($routeProvider) {
		$routeProvider
			.when('/main', {
				templateUrl: 'main.html',
				controller: 'mainController'
			})
			.otherwise({redirectTo:'/main'});
	}]);
}());