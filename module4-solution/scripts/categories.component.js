'use strict';

(function () {

  var CategoriesComponent = {
    templateUrl: 'templates/categories.partial.html',
    bindings: {
      categories: '<src'
    }
  }

  angular.module('MenuApp')
    .component('categories', CategoriesComponent)
    
})()