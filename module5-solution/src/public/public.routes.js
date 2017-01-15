(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      absract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.signup', {
      url: '/',
      templateUrl: 'src/public/signup/signup.html',
      controller: 'SignupController',
      controllerAs: 'signupCtrl',
      resolve: {
        menuItems: ['HerokuService', function (HerokuService) {
          return HerokuService.getAllMenuItems();
        }]
      }
    })
    .state('public.myinfo', {
      url: '/',
      templateUrl: 'src/public/myinfo/myinfo.html',
      controller: 'MyInfoController',
      controllerAs: 'myinfoCtrl',
      resolve: {
        user: ['HerokuService', function (HerokuService) {
          return HerokuService.getCurrentUser()
        }],
        favorite: ['user', 'HerokuService', function (user, HerokuService) {
          let short_name = user.favorite.toUpperCase()
          return HerokuService.getMenuItem(short_name).then(data => {
            data.image = HerokuService.getMenuItemImagePath(short_name)
            return data
          })
        }]
      }
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    });
}
})();
