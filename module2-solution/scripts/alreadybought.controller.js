(function(){
    angular.module('ShoppingCartCheckOff')
        .controller('AlreadyBoughtController', AlreadyBoughtController)

    AlreadyBoughtController.$inject = ['$scope','ShoppingListCheckOffService']
    function AlreadyBoughtController($scope, ShoppingListCheckOffService) {
      $scope.getJoiner = ShoppingListCheckOffService.getJoiner

      var bought = this
      
      bought.items = ShoppingListCheckOffService.getItems(bought)

      //ShoppingListCheckOffService.addItems(bought, { quantity: 10, description: 'cookies'})
      
    }

})()