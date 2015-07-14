// Code goes here
(function() {

  var myapp = angular.module("App", []);
  
  var mainController = function($scope, $http) {
     var apiKey = 'MDE5ODI5MDExMDE0MzY0Mzk0NjY2NDVhNQ001', nprUrl = 'http://api.npr.org/query?id=61&fields=relatedLink,title,byline,text,audio,image,pullQuote,all&output=JSON';
     
    var onsuccess = function(data, status) {
      $scope.programs = data.list.story;
    };

    var onfailure = function(data, status) {
      //$scope.programs = data.list.story;
    };
    
    $http({
      method: "JSONP",
      url: nprUrl + '&apiKey=' + apiKey + '&callback=JSON_CALLBACK'
    }).success(onsuccess).error(onfailure);
    
    $scope.name ='default';
  };

  myapp.controller("MainController", ["$scope", "$http", mainController]);
}());