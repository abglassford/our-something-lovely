(function() {
  'use strict';

  angular
    .module('lovely.components.cart')
    .controller('cartController', CartController)

    CartController.$inject = ['ShopService']

  function CartController (ShopService) {

    this.edit = false
    this.total = ShopService.subtotal
    this.cart = ShopService.cart.list

    this.showEdit = (item) => {
      if (this.edit === true) {
        if (item.multiplier < item.count) {
          ShopService.cart.count -= (item.count - item.multiplier)
          ShopService.subtotal -= item.price * (item.count - item.multiplier)
          this.total = ShopService.subtotal
          item.count = item.multiplier
        } else if (item.multiplier > item.count) {
          ShopService.cart.count += (item.multiplier - item.count)
          ShopService.subtotal += item.price * (item.multiplier - item.count)
          this.total = ShopService.subtotal
          item.count = item.multiplier
        }
        this.edit = false
      } else {
        item.multiplier = item.count
        this.edit = true
      }
    }

    this.remove = (item) => {
      ShopService.cart.list.splice(ShopService.cart.list.indexOf(item), 1)
      ShopService.cart.count -= item.count
      ShopService.subtotal -= (item.count * item.price)
      this.total = ShopService.subtotal
    }
  }

}());
