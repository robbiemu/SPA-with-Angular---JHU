(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['user', 'favorite'];
function MyInfoController(user, favorite) {
  var $ctrl = this
  $ctrl.user = user
  $ctrl.favorite = favorite
  console.dir(favorite)
}

})();
