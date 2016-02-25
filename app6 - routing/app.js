angular.module('sixthApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

  //$httpProvider.interceptors.push('httpRequestInterceptor');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/homeTmpl.html',
      controller: 'controller'
    })
    .state('sign-up', {
      url: '/signup',
      templateUrl: 'views/signupTmpl.html'
    })
    .state('details', {
      url: '/details',
      templateUrl: 'views/detailsTmpl.html',
      controller: 'detailsCtrl',
      resolve: {
        smurfData: function(routerServ) {
          return routerServ.getSmurfs();

        }
      }
    })
})
