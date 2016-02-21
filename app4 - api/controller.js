angular.module('fourthApp').controller('mainCtrl', function($scope, apiServ) {
  apiServ.getPoke().then(function(response) {
    $scope.pokemon = response;
   })
})
