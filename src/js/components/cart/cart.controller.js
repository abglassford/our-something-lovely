(function() {
  'use strict';

  angular
    .module('lovely.components.cart')
    .controller('cartController', CartController)

    CartController.$inject = ['ShopService']

  function CartController (ShopService) {

    this.edit = false;
    this.total = ShopService.subtotal
    this.cart = ShopService.cart.list

    // this.getTotal = () => {
    //   this.total = this.cart.reduce((prev, curr) => {
    //     return prev.price * prev.count + curr.price * curr.count
    //   })
    // }

    // console.log(this.getTotal());


    // this.categories = Array.from(new Set(this.inventory.reduce((prev, curr) => [...prev, ...curr.categories], [])))

    this.showEdit = (item) => {
      if (this.edit === true) {
        item.count = item.multiplier
        this.edit = false
      } else {
        item.multiplier = item.count
        this.edit = true
      }
    }
    this.edit = (item) => {
      item.count = item.multiplier
    }
    this.remove = (item) => {
      ShopService.cart.list.splice(ShopService.cart.list.indexOf(item), 1)
      ShopService.cart.count -= item.count
      ShopService.subtotal -= (item.count * item.price)
      this.total = ShopService.subtotal
    }
  }

}());
