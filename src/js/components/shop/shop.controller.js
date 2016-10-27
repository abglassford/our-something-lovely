(function() {
  'use strict';

  angular
    .module('lovely.components.shop')
    .controller('ShopController', ShopController)

    ShopController.$inject = ['$location', 'lovelyService']

    function ShopController ($location, lovelyService) {
      this.cartCount = () => lovelyService.cart.count
      this.categories = lovelyService.categories
      this.inventory = lovelyService.inventory
      this.priceSort = (price) => {
        this.price = price
      }
      this.categoryFilter = (category) => {

        this.category = category
      }
      this.addToCart = (item) => {
        if (!lovelyService.cart.list.includes(item)) {
          item.count = item.multiplier
          lovelyService.cart.list.push(item)
        } else {
          item.count += item.multiplier
        }
        lovelyService.cart.count += item.multiplier
        lovelyService.subtotal += item.price * item.multiplier
        item.multiplier = 1
      }
    }
}());
