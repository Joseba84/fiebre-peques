'use strict';
// mobile app FiebrePeques

angular.module('fiebrePeques', ['ionic', 'fiebrePeques.controllers', 'fiebrePeques.services'])

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

  .state('tab.follow', {
      url: '/follow',
      views: {
        'tab-follow': {
          templateUrl: 'templates/tab-follow.html',
          controller: 'FollowCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dosis');

});
