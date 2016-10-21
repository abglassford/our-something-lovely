(function() {
  'use strict';

  angular
    .module('lovely.components.cart')
    .controller('cartController', CartController)

    CartController.$inject = []

    function CartController () {
      this.test = 'cart controller'
    }

}());
