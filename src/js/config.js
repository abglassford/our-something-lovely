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
    .when('/shop', {
      templateUrl: 'js/components/shop/shop.cart.html',
      controller: 'ShopController',
      controllerAs: 'shopCtrl'
    })
    .otherwise('/');
  }

})();
