angular.module('sixthApp').service('routerServ', function($http, $q) {

  this.getSmurfs = function() {
    var baseUrl = 'http://pokeapi.co/api/v2/';
    return $http({
      method: 'GET',
      url: baseUrl + 'pokemon/charmander'
    }).then(function(response) {
      return response.data;
    })
  }
});
