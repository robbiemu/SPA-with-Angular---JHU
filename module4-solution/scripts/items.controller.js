'use strict';

(function () {

  angular.module('MenuApp')
    .controller('ItemsController', ItemsController)
  
  ItemsController.$inject = ['$scope', 'category', 'items']
  function ItemsController($scope, category, items) {
    $scope.category = category
    $scope.items = items
    console.dir($scope)
  }
    
})()