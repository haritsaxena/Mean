(function () {
	// body...
	'use strict';
 
	angular.
	module('myApp', []).
	controller('maincontroller', ['$scope', 'notify', function($scope, notify){
		$scope.message = 'sam';
		$scope.runalert = function(msg){
			notify(msg);
		};
	}])

	.factory('notify', ['$window', function(win){
		var msgs = [];
		return function notify(msg){
			msgs.push(msg);
			if (msgs.length == 3) {
				win.alert(msgs.join('\n'));
				msgs = [];
			}
		};
	}]);
}());