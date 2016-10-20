// sample angular code

(function() {

  'use strict';

  $('.button-collapse').sideNav();

  angular
    .module('lovely', [
      'ngRoute',
      'ui.materialize',
      'lovely.config',
      'lovely.components.main',
      'lovely.components.shop'
    ]);

})();
