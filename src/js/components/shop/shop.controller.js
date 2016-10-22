(function() {
  'use strict';

  angular
    .module('lovely.components.shop')
    .controller('ShopController', ShopController)

    ShopController.$inject = ['$location', 'ShopService']

    function ShopController ($location, ShopService) {
      this.categories = ShopService.categories
      this.inventory = ShopService.inventory
      this.priceSort = (price) => {
        this.price = price
      }
      this.categoryFilter = (category) => {
        this.category = category
      }
      this.addToCart = (item, quantity) => {
        if (ShopService.cart.list.includes(item)) {
          console.log('quantity', quantity);
          item.quantity++
          // console.log(ShopService.cart.list);
        } else {
          item.quantity = 1
          ShopService.cart.list.push(item)
          // console.log(ShopService.cart.list);
        }
      }
    }
}());
