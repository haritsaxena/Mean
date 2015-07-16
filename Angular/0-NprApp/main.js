// Code goes here
(function() {

  'use strict';
  var myapp = angular.module('App', []);
  
  var mainController = function($scope, $http) {
    var apiKey = 'MDE5ODI5MDExMDE0MzY0Mzk0NjY2NDVhNQ001', 
    nprUrl = 'http://api.npr.org/query?id=61&fields=relatedLink,title,byline,text,audio,image,pullQuote,all&output=JSON';
    
    $scope.audio = document.createElement('audio');
    $scope.playing = false;

    var onsuccess = function(data) {
      $scope.programs = data.list.story;
    };
    
    $http({
      method: 'JSONP',
      url: nprUrl + '&apiKey=' + apiKey + '&callback=JSON_CALLBACK'
    }).success(onsuccess);
    
    $scope.play = function(program){
      if ($scope.playing) 
      {
        $scope.audio.pause();
        $scope.playing = false;
        return;
      }
      var url = program.audio[0].format.mp4.$text;
      $scope.audio.src = url;
      $scope.audio.play();
      // Store the state of the player as playing
      $scope.playing = true;

    };
    
    $scope.name='default';
  };
  
  myapp.controller('MainController', ['$scope', '$http', mainController]);
}());
