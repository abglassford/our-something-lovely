(function() {
  'use strict';

  angular
    .module('lovely.components.shop')
    .directive('cart', ShopDirective)

    ShopDirective.$inject = []

    function ShopDirective () {
      return {
      restrict: 'E',
      template: '<i class="material-icons">shopping_cart</i>',
      controller: 'ShopController',
      link: function (scope, element, attrs, ctrl, transcludeFn) {
        element.on('click', function () {
          console.log('Directive');
        })
      }
    }
  }
}());
