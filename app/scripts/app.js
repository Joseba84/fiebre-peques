'use strict';
// mobile app FiebrePeques

angular.module('fiebrePeques', ['ionic', 'fiebrePeques.controllers', 'fiebrePeques.services','fiebrePeques.directives'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dosis', {
    url: '/dosis',
    views: {
      'tab-dosis': {
        templateUrl: 'templates/tab-dosis.html',
        controller: 'DosisCtrl'
      }
    }
  })

  .state('tab.follows', {
      url: '/follows',
      views: {
        'tab-follows': {
          templateUrl: 'templates/tab-follows.html',
          controller: 'FollowsCtrl'
        }
      }
    })
    .state('tab.follow-detail', {
      url: '/follows/:followId',
      views: {
        'tab-follows': {
          templateUrl: 'templates/follow-detail.html',
          controller: 'FollowDetailCtrl'
        }
      }
    });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dosis');

});
