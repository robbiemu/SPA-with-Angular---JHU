(function () {

    var RESTAURANT_API_URL = 'https://davids-restaurant.herokuapp.com/menu_items.json'  

    angular.module('NarrowItDownApp', [])
      .constant('RESTAURANT_API_URL', RESTAURANT_API_URL)
})()