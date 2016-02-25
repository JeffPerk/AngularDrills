angular.module('secondApp').controller('mainCtrl', function($scope, arrServ) {
  $scope.people = arrServ.getData();
})
