'use strict';

(function () {

  angular.module('data')
    .service('MenuDataService', MenuDataService)
  
  MenuDataService.$inject = ['$http', 'RESTAURANT_API_CONTRACT']
  function MenuDataService($http, RESTAURANT_API_CONTRACT) {
    let mdservice = this

    mdservice.getAllCategories = function () {
      return $http.get(RESTAURANT_API_CONTRACT.getAllCategories.compile())
        .then(function (result) {
          return result.data
        })
    }

    mdservice.getItemsForCategory = function (category) {
      let options = { category: category }
      return $http.get(RESTAURANT_API_CONTRACT.getItemsForCategory.compile(options))
        .then(function (result) {
          return result.data.menu_items
        })
    }

  }
  
})()