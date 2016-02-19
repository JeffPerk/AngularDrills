angular.module('fourthApp').service('apiService', function($http, $q) {
  var baseUrl = 'http://pokeapi.co/api/v2/';

  this.getPokemon = function() {
    var deferred = $q.defer();

    $http({
      method: 'GET',
      url: baseUrl + 'pokemon/bulbasaur'
    }).then(function(response) {
      deferred.resolve(response.data);
    })

    return deferred.promise;
  }

})
