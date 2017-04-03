var app = angular.module('musicApp', ['ngRoute','spotify']);

  app.config(function (SpotifyProvider) {
    SpotifyProvider.setClientId('c9ba2fa643a14871b1facf69e9ac8672');
    
    SpotifyProvider.setRedirectUri('https://hemsingh1.github.io/Angular-Music-library/callback.html');
    SpotifyProvider.setScope('user-read-private playlist-read-private playlist-modify-private playlist-modify-public');
    
  })
  app.controller('MainController', ['$scope', 'Spotify', function ($scope, Spotify) {

    $scope.searchArtist = function () {
      
      $scope.ab = $scope.searchartist;
     // alert($scope.ab);
      Spotify.search($scope.searchartist, 'artist').then(function (data) {
        
      
              
              $scope.artists1 = data.data.artists.items;
         
             });
        
          
         
        Spotify.search($scope.searchartist, 'album').then(function (data) {
                   
        $scope.artists2 = data.data.albums.items;
          
      });
        
    
     
      
       
      
      
      
    };

    $scope.login = function () {
      Spotify.login().then(function (data) {
        console.log(data);
        alert("You are now logged in");
      }, function () {
        console.log('didn\'t log in');
      })
    };

  }]);
