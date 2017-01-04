(function () {
    angular.module('NarrowItDownApp')
      .directive('foundItems', FoundItemsDirective)

    function FoundItemsDirective() {
      return {
        templateUrl: '/templates/foundItems.template.html',
        restrict: 'E',
        replace: true,
        scope: {
          found: '<foundItems',
          onRemove: '&',
          noItemsFound: '&'
        },
        controller: FoundItemsDirectiveController,
        controllerAs: 'fic',
        bindToController: true
      }
    }
  
    function FoundItemsDirectiveController() {
      var self = this
    }
  
})()