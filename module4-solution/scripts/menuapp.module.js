'use strict';

(function () {

  var RESTAURANT_API_CONTRACT = {
    getAllCategories: new MiniURI({
      baseURI: 'https://davids-restaurant.herokuapp.com/categories.json'
    }),
    getItemsForCategory: new MiniURI({
      baseURI: 'https://davids-restaurant.herokuapp.com/menu_items.json',
    })
  };

  angular.module('MenuApp', ['data', 'ui.router', 'ncy-angular-breadcrumb'])
    .constant('RESTAURANT_API_CONTRACT', RESTAURANT_API_CONTRACT)
  
})()