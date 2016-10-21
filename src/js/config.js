(function() {

  'use strict';

  angular
    .module('lovely.config', [])
    .config(appConfig);

  function appConfig($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'js/components/main/main.html',
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when('/shop', {
      templateUrl: 'js/components/shop/shop.html',
      controller: 'ShopController',
      controllerAs: 'vm'
    })
    .when('/cart', {
      templateUrl: 'js/components/cart/cart.html',
      controller: 'cartController',
      controllerAs: 'vm'
    })
    .otherwise('/');
  }

})();
