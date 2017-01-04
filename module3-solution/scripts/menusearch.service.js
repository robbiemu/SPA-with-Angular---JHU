(function () {
  angular.module('NarrowItDownApp')
    .service('MenuSearchService', MenuSearchService)

  MenuSearchService.$inject = ['$http', 'RESTAURANT_API_URL']
  function MenuSearchService($http, RETAUARANT_API_URL) {
    var service = this
    
    service.getMatchedMenuItems = function (searchTerm) {
      let skip = []
      skip.isSkippingSearch = true
      
      return (searchTerm === undefined || /^\s*$/.test(searchTerm)) ?
        new Promise((resolve) => { resolve(skip) }) :
        $http.get(RETAUARANT_API_URL).then(function (result) {
          let r = new RegExp(searchTerm)

          let matchedItems = result.data.menu_items
            .filter(item => r.test(item.description))
                
            return matchedItems;
        });
    }
  }
  
})()