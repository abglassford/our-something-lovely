(function() {

  'use strict';

  angular
    .module('lovely.config', [])
    .config(appConfig);

  function appConfig($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'js/components/main/main.home.html',
      controller: 'mainController',
      controllerAs: 'mainCtrl'
    })
    .otherwise('/')
  }

})();
