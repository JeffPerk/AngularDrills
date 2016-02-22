angular.module('thirdApp').controller('mainCtrl', function($scope, arrayServ) {
  $scope.items = arrayServ.getData();
})
