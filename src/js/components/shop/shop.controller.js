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
    }
}());
