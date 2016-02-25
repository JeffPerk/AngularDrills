angular.module('fourthApp').service('apiServ', function($http, $q) {
  var baseUrl = 'http://pokeapi.co/api/v2/';

  this.getPokemon = function() {
    var deferred = $q.defer();

    $http({
      method: 'GET',
      url: baseUrl + 'pokemon/rapidash'
    }).then(function(response) {
      deferred.resolve(response.data);
      console.log(response.data);
    })

    return deferred.promise;
  }
})
