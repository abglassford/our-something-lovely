(function() {

  'use strict';

  angular
    .module('lovely.components.main')
    .controller('mainController', mainController);

  mainController.$inject = ['$scope', 'lovelyService'];

  function mainController($scope, lovelyService) {
    /*jshint validthis: true */
    this.test = "test"
  }

})();
