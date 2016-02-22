angular.module('fourthApp').controller('mainCtrl', function($scope, apiServ) {

  apiServ.getPokemon().then(function(response) {
    $scope.pokemon = response;
  })
})
