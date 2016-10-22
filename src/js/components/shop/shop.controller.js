(function() {
  'use strict';

  angular
    .module('lovely.components.shop')
    .controller('ShopController', ShopController)

    ShopController.$inject = ['$location', 'ShopService']

    function ShopController ($location, ShopService) {
      this.inventory = ShopService.inventory
      this.sortBy = function (selection) {
        this.priceSort = selection
      }

    }
}());
