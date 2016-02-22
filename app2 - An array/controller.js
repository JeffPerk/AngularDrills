angular.module('secondApp').controller('mainCtrl', function($scope, arrayServ) {
  $scope.items = arrayServ.getData();
})
