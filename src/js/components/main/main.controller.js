(function() {

  'use strict';

  angular
    .module('lovely.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope'];

  function mainController($scope) {
    /*jshint validthis: true */
    this.test = 'Something';
  }

})();
