// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'CrowdJockey' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'CrowdJockey.services' is found in services.js
// 'CrowdJockey.controllers' is found in controllers.js
var app = angular.module('CrowdJockey', [
  'ionic', 
  'CrowdJockey.controllers', 
  'CrowdJockey.services'
]);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/', templateUrl: 'templates/home.html', controller: 'HomeController'
  });
  $stateProvider.state('create', {
    url: '/create', templateUrl: 'templates/create.html', controller: 'CreateController'
  });
  $stateProvider.state('trending', {
    url: '/trending', templateUrl: 'templates/trending.html', controller: 'TrendingController'
  });
  $stateProvider.state('chat', {
    url: '/:name', templateUrl: 'templates/crowdchat.html', controller: 'ChatroomController'
  });
  $stateProvider.state('test', {
    url: '/test', templateUrl: 'templates/test.html', controller: 'TestController'
  });

  $urlRouterProvider.otherwise("/");
});
