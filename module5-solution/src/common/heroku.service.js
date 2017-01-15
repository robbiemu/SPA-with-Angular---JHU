(function () {
"use strict";

angular.module('common')
.service('HerokuService', HerokuService);


HerokuService.$inject = ['$http', '$q', 'HEROKUAPI', 
'AllMenuItemsPathHEROKU', 'CheckMenuItemPathHEROKU', 'MenuItemImagePathHEROKU'];
function HerokuService($http, $q, HEROKUAPI, 
AllMenuItemsPathHEROKU, CheckMenuItemPathHEROKU, MenuItemImagePathHEROKU) {
  var service = this;
  service.users = []

  service.getAllMenuItems = function () {
    return $http.get(HEROKUAPI + AllMenuItemsPathHEROKU)
        .then((txr) => txr.data.menu_items)
  }

  service.isValidMenuItem = function (short_name) {
      let path = CheckMenuItemPathHEROKU.replace('{short_name}', short_name)
      return $http.get(HEROKUAPI + path).then(txr => true).catch(e => false)
  }

  service.getMenuItem = function (short_name) {
      let path = CheckMenuItemPathHEROKU.replace('{short_name}', short_name)
      console.log('getting ' + HEROKUAPI + path)
      return $http.get(HEROKUAPI + path).then(txr => txr.data)
  }

  service.getMenuItemImagePath = function (short_name) {
      return HEROKUAPI + MenuItemImagePathHEROKU.replace('{short_name}', short_name)
  }

  service.push = function (user) {
      //$http.push(...)
      console.log('saving user', user)
      service.users.push(user)
  }

  service.getCurrentUser = function (/*...*/) {
      //$http.get(...)
      console.log('loading user', service.users)
      return $q.when(service.users[service.users.length - 1])
  }

}

})();
