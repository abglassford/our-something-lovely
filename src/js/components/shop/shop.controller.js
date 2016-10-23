(function() {
  'use strict';

  angular
    .module('lovely.components.shop')
    .controller('ShopController', ShopController)

    ShopController.$inject = ['$location', 'ShopService']

    function ShopController ($location, ShopService) {
      this.cartCount = () => ShopService.cart.count
      this.categories = ShopService.categories
      this.inventory = ShopService.inventory
      this.priceSort = (price) => {
        this.price = price
      }
      this.categoryFilter = (category) => {

        this.category = category
      }
      this.addToCart = (item) => {
        if (!ShopService.cart.list.includes(item)) {
          item.count = item.multiplier
          ShopService.cart.list.push(item)
        } else {
          item.count += item.multiplier
        }
        ShopService.cart.count += item.multiplier
        ShopService.subtotal += item.price * item.multiplier
        item.multiplier = 1
      }
    }
}());
