'use strict';

(function () {

  var ItemsComponent = {
    templateUrl: 'templates/items.partial.html',
    bindings: {
      category: '<',
      items: '<'
    }
  }

  angular.module('MenuApp')
    .component('items', ItemsComponent)
    
})()