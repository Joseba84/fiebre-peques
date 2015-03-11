'use strict';

angular.module('fiebrePeques.controllers', [])

.controller('DosisCtrl', function($scope, Drugs) {
  $scope.drugs = Drugs.all();
})

.controller('FollowCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('FollowDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
});
