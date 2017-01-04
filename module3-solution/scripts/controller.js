(function(){
    angular.module('NarrowItDownApp')
        .controller('NarrowItDownController', NarrowItDownController)

    NarrowItDownController.$inject = ['$scope', 'MenuSearchService']
    function NarrowItDownController($scope, MenuSearchService) {
      let self = this

      self.found = []
      self.searched = false

      self.removeItem = function (itemIndex) {
            self.found.splice(itemIndex, 1);
      };

      self.noItemsFound = function () {
        console.log('noItemsFound called')
        return self.searched && self.found.length === 0
      }

      $scope.searchAPI = function () {
        MenuSearchService.getMatchedMenuItems($scope.searchTerm)
          .then(function (data) {
            self.searched = true
            self.found = data
          })
      }

    }

})()