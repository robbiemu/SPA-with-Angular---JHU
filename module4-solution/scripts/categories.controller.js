'use strict';

(function () {

  angular.module('MenuApp')
    .controller('CategoriesController', CategoriesController)
  
  CategoriesController.$inject = ['$scope', 'categories']
  function CategoriesController($scope, categories) {
    $scope.categories = categories
  }
    
})()