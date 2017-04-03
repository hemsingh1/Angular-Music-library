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
      var options ={limit:2};
      
      Spotify.search($scope.searchartist, 'artist', options).then(function (data) {
        
      
              
              $scope.artists1 = data.data.artists.items;
        
        console.log($scope.artists1);
         
             });
        
          
         
        Spotify.search($scope.searchartist, 'album', options).then(function (data) {
                   
        $scope.artists2 = data.data.albums.items;
          console.log($scope.artists2);
          
      });
      
      var ar = [];
        
    
     $scope.artists = angular.extend($scope.artists1, $scope.artists2);
      
       console.log('ll', $scope.artists);
      
      
      
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
