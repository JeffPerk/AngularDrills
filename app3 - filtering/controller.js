angular.module('thirdApp').controller('mainCtrl', function($scope, arrServ) {
  $scope.people = arrServ.getData();
})
