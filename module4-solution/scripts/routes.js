'use strict';

(function () {

  ConfigureUIState.$inject = ['$stateProvider', '$urlRouterProvider']
  function ConfigureUIState($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/')

    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'templates/home.partial.html',
      ncyBreadcrumb: { label: 'Home' }
    })

    $stateProvider.state('categories', {
      url: '/categories',
      templateUrl: 'templates/loadcategories.partial.html',
      controller: 'CategoriesController',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) { 
          return MenuDataService.getAllCategories()
        }]
      },
      ncyBreadcrumb: { label: 'Categories', parent: 'home' }
    })

    $stateProvider.state('items', {
      url: '/items?id&name',
      templateUrl: 'templates/loaditems.partial.html',
      controller: 'ItemsController',
      resolve: {
        items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.id)
        }],
        category: ['$stateParams', function ($stateParams) {
          return { id: $stateParams.id, name: $stateParams.name }
        }]
      },
      ncyBreadcrumb: { label: 'Items', parent: 'categories' }  
    })
  }

  angular.module('MenuApp')
    .config(ConfigureUIState)
    
})()