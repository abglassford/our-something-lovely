(function() {
  'use strict';

  angular
    .module('lovely.components.cart')
    .controller('cartController', CartController)

    CartController.$inject = ['lovelyService']

  function CartController (lovelyService) {

    this.edit = false
    this.total = lovelyService.subtotal
    this.cart = lovelyService.cart.list

    this.showEdit = (item) => {
      if (this.edit === true) {
        if (item.multiplier < item.count) {
          lovelyService.cart.count -= (item.count - item.multiplier)
          lovelyService.subtotal -= item.price * (item.count - item.multiplier)
          this.total = lovelyService.subtotal
          item.count = item.multiplier
        } else if (item.multiplier > item.count) {
          lovelyService.cart.count += (item.multiplier - item.count)
          lovelyService.subtotal += item.price * (item.multiplier - item.count)
          this.total = lovelyService.subtotal
          item.count = item.multiplier
        }
        this.edit = false
      } else {
        item.multiplier = item.count
        this.edit = true
      }
    }

    this.remove = (item) => {
      lovelyService.cart.list.splice(lovelyService.cart.list.indexOf(item), 1)
      lovelyService.cart.count -= item.count
      lovelyService.subtotal -= (item.count * item.price)
      this.total = lovelyService.subtotal
    }
  }

}());
