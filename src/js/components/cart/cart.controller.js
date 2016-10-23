(function() {
  'use strict';

  angular
    .module('lovely.components.cart')
    .controller('cartController', CartController)

    CartController.$inject = ['ShopService']

  function CartController (ShopService) {
    this.total = ShopService.total
    this.edit = false;
    this.cart = ShopService.cart.list
    this.showEdit = (item) => {
      if (this.edit === true) {
        item.count = item.multiplier
        this.edit = false
      } else {
        item.multiplier = item.count
        this.edit = true
      }
    }
    this.remove = (item) => {
      ShopService.cart.list.splice(ShopService.cart.list.indexOf(item), 1)
    }
  }

}());
