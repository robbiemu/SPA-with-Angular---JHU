(function(){
    angular.module('ShoppingCartCheckOff')
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

    function ShoppingListCheckOffService() {
        var service = this;

        var items = {}
        items.tobuy = new ItemBin()
        items.bought = new ItemBin()

        service.getItems = function (context) {
            switch (context.constructor.name) {
                case 'AlreadyBoughtController':
                    return items.bought
                case 'ToBuyController':
                    return items.tobuy    
            }
        }

        service.buyItem = function(context, itemIndex) {
            switch (context.constructor.name) {
                case 'AlreadyBoughtController':
                    console.error('[ShoppingListCheckOffService] - attempt to buy item from AlreadyBoughtController')
                    break
                case 'ToBuyController':
                    items.bought.push(items.tobuy[itemIndex])
                    items.tobuy.splice(itemIndex, 1)
            }
        }

        service.addItems = function () {
            let context = Array.prototype.shift.apply(arguments)
            let addItems = Array.prototype.slice.call(arguments)

            switch (context.constructor.name) {
                case 'AlreadyBoughtController':
                    addItems.forEach(i => items.bought.push(i))
                    break
                case 'ToBuyController':
                    addItems.forEach(i => items.tobuy.push(i))
            }
        }

        service.getJoiner = function(item) { return item.joiner || ' ' }
    }

    class ItemBin extends Array {
        isEmpty() {
            return this.length>0
        }
    }

})()