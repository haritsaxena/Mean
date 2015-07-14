// Code goes here
(function() {
  var myapp = angular.module("App",[]);
  
  var mainController = function($scope){
    $scope.name = "default";
    var updateclock = function(){
      $scope.currenttime = new Date();
    };
    var timer = setInterval(function(){
      $scope.$apply(updateclock, 1000);
    });
  };
  
  myapp.controller("MainController", ["$scope", mainController]);
}());

