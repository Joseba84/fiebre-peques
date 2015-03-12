'use strict';

angular.module('fiebrePeques.directives', [ ] )
 .directive('drugItem', function(){
  return {
    restrict : 'E',
    templateUrl : '../templates/partials/drug-item.html'
};
})
.directive('range', function(){
  return {
    restrict :'E',
    templateUrl : '../templates/partials/range.html'
  };
});
