angular.module('fourthApp').service('apiServ', function($q, $http) {
  var baseUrl = 'http://pokeapi.co/api/v2/';

  this.getPokemon = function() {

    return $http({
      method: 'GET',
      url: baseUrl + 'pokemon/pikachu'
    }).then(function(response) {
      return response.data;
    })
  }
})
