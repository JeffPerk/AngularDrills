angular.module('secondApp').controller('mainCtrl', function($scope, arrayService) {
  $scope.items = arrayService.getData();
})
