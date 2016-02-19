angular.module('secondApp').controller('mainCtrl', function($scope, theService) {
  $scope.data = theService.getData();
})
