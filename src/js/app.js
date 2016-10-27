// sample angular code

(function() {

  'use strict';

  $('.button-collapse').sideNav();
  $('select').material_select();
  $(".dropdown-button").dropdown();


  angular
    .module('lovely', [
      'ngRoute',
      'ui.materialize',
      'lovely.config',
      'lovely.services',
      'lovely.components.main',
      'lovely.components.shop',
      'lovely.components.cart'
    ])
    .filter('monetize', function () {
      return function (price) {
        return price * .01
      }
    })

})();
