(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://ychaikin-course5.herokuapp.com')
.constant('HEROKUAPI', 'https://jhu-angular-module5.herokuapp.com')
.constant('AllMenuItemsPathHEROKU', '/menu_items.json')
.constant('CheckMenuItemPathHEROKU', '/menu_items/{short_name}.json')
.constant('MenuItemImagePathHEROKU', '/images/{short_name}.jpg')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
