'use strict';

angular.module('fiebrePeques.controllers', [])

.controller('DosisCtrl', function($scope, Drugs) {
  $scope.drugs = Drugs.all();
})

.controller('FollowsCtrl', function($scope, Follows) {
  $scope.follows = Follows.all();
  $scope.remove = function(follow) {
    Follows.remove(follow);
  };
})

.controller('FollowDetailCtrl', function($scope, $stateParams, Follows) {
  $scope.follow = Follows.get($stateParams.followId);
});
