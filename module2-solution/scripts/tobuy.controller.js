(function(){
    angular.module('ShoppingCartCheckOff')
        .controller('ToBuyController', ToBuyController)

    ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService']
    function ToBuyController($scope, ShoppingListCheckOffService) {
        $scope.getJoiner = ShoppingListCheckOffService.getJoiner
        
        var buy = this
        
        buy.items = ShoppingListCheckOffService.getItems(buy)
        
        buy.buy = function (itemIndex) {
            ShoppingListCheckOffService.buyItem(buy, itemIndex)
        }

        ShoppingListCheckOffService.addItems(buy,
            { quantity: 10, description: 'cookies' },
            { quantity: 2, description: 'butter cake' },
            { quantity: '33 packages', description: 'm & m\'s', joiner: ' of ' },
            { quantity: 'uno', description: 'convite al azar' },
            { quantity: 5, description: 'candy canes' }
        )
    }

})()