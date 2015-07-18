// Code goes here
(function() {
  var myapp = angular.module("App",[]);
  
  var mainController = function($scope){
    $scope.name = "default";
  };
  
  myapp.controller("MainController", ["$scope", mainController]);
}());