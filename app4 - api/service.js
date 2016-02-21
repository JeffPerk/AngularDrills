angular.module('fourthApp').service('apiServ', function($q, $http) {
  var baseUrl = 'http://pokeapi.co/api/v2/';

  this.getPoke = function() {
    var deferred = $q.defer();

    $http({
      method: 'GET',
      url: baseUrl + 'pokemon/mew'
    }).then(function(response) {
      deferred.resolve(response.data)
    })

    return deferred.promise;
  }



})
