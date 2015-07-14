// Code goes here
(function() {
  var myapp = angular.module("App",[]);
  
  var mainController = function($scope){
    $scope.name = "default";
    
    $scope.logitem = function(){
      console.log("called controller");
    };
  };
  
  myapp.controller("MainController", ["$scope", mainController]);
}());