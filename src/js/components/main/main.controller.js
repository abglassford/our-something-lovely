(function() {

  'use strict';

  angular
    .module('lovely.components.main', ['OSLS'])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope', 'lovelyService'];

  function mainController($scope, lovelyService) {
    /*jshint validthis: true */
    this.test = 'Something';
    this.serviceTest = lovelyService.test
  }

})();
