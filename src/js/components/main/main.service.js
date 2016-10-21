(function() {
  'use strict';

  angular
    .module('main', [])
    .service('lovelyService', LovelyService);

  function LovelyService () {
    this.test = 'Lovely';
  }
}());
