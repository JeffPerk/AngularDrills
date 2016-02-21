angular.module('thirdApp').controller('mainCtrl', function($scope, arrayService) {
  $scope.items = arrayService.getData();
})
