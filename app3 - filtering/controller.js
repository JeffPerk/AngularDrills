angular.module('thirdApp').controller('mainCtrl', function($scope, theService) {

  $scope.items = theService.getData();

})
