(function() {
  'use strict';

  angular
    .module('OSLS', [])
    .service('lovelyService', LovelyService)

    function LovelyService () {
      this.test = "Lovely"
    }
}());
