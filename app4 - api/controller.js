angular.module('fourthApp').controller('mainCtrl', function($scope, apiService) {

    apiService.getPokemon().then(function(response) {
      $scope.pokemon = response;
    });

})
