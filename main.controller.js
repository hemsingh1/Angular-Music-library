var app = angular.module('musicApp', ['ngRoute','spotify']);

  app.config(function (SpotifyProvider) {
    SpotifyProvider.setClientId('c9ba2fa643a14871b1facf69e9ac8672');
    
    SpotifyProvider.setRedirectUri('https://hemsingh1.github.io/Angular-Music-library/callback.html');
    SpotifyProvider.setScope('user-read-private playlist-read-private playlist-modify-private playlist-modify-public');
    
  })
  app.controller('MainController', ['$scope', 'Spotify', function ($scope, Spotify) {

    $scope.searchArtist = function () {
      Spotify.search($scope.searchartist, 'artist').then(function (data) {
        
      console.log('=================== Search results ===================');
         console.log(data);
        $scope.artists = data.artists.items;
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

    // search an album
   Spotify.search('Nirvana', 'artist').then(function (data) {
    
      console.log('=================== search results ===================');
  console.log(data);
});


    Spotify.getAlbumTracks('41MnTivkwTO3UUJ8DrqEJJ').then(function (data) {
      console.log('=================== Album Tracks - ID ===================');
      console.log(data);
    });
    Spotify.getAlbumTracks('spotify:album:41MnTivkwTO3UUJ8DrqEJJ').then(function (data) {
      console.log('=================== Album Tracks - Spotify URI ===================');
      console.log(data);
    });



    //Artist
    Spotify.getArtist('0LcJLqbBmaGUft1e9Mm8HV').then(function (data) {
      console.log('=================== Artist - Id ===================');
      console.log(data);
    });
    Spotify.getArtist('spotify:artist:0LcJLqbBmaGUft1e9Mm8HV').then(function (data) {
      console.log('=================== Artist - Spotify URI ===================');
      console.log(data);
    });

    Spotify.getArtistAlbums('0LcJLqbBmaGUft1e9Mm8HV').then(function (data) {
      console.log('=================== Artist Albums - Id ===================');
      console.log(data);
    });

    Spotify.getArtistAlbums('spotify:artist:0LcJLqbBmaGUft1e9Mm8HV').then(function (data) {
      console.log('=================== Artist Albums - Spotify URI ===================');
      console.log(data);
    });

    Spotify.getArtistTopTracks('0LcJLqbBmaGUft1e9Mm8HV', 'AU').then(function (data) {
      console.log('=================== Artist Top Tracks Australia ===================');
      console.log(data);
    });

    Spotify.getRelatedArtists('0LcJLqbBmaGUft1e9Mm8HV').then(function (data) {
      console.log('=================== Get Releated Artists ===================');
      console.log(data);
    });


    //Tracks
    Spotify.getTrack('0eGsygTp906u18L0Oimnem').then(function (data) {
      console.log('=================== Track ===================');
      console.log(data);
    });

    Spotify.getTracks('0eGsygTp906u18L0Oimnem,1lDWb6b6ieDQ2xT7ewTC3G').then(function (data) {
      console.log('=================== Tracks - String ===================');
      console.log(data);
    });

    Spotify.getTracks(['0eGsygTp906u18L0Oimnem','1lDWb6b6ieDQ2xT7ewTC3G']).then(function (data) {
      console.log('=================== Tracks - Array ===================');
      console.log(data);
    });

  }]);
