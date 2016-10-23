(function() {
  'use strict';

  angular
    .module('lovely.components.cart')
    .controller('cartController', CartController)

    CartController.$inject = ['ShopService']

    function CartController (ShopService) {
      this.total = 10000
      this.edit = false;
      this.showEdit = () => {
        if (this.edit === true) {
          this.edit = false
        } else {
          this.edit = true
        }
        console.log(this.edit);
      }
      this.cart = () => ShopService.cart.list
      this.test = 'cart controller'
    }

}());
