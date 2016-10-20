// sample angular code

(function() {

  'use strict';

  $(".button-collapse").sideNav();

  angular
    .module('lovely', [
      'ngRoute',
      'lovely.config',
      'lovely.components.main',
      'ui.materialize'
    ]);

})();
