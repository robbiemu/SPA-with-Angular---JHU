(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['menuItems', 'HerokuService'];
function SignupController(menuItems, HerokuService) {
  var $ctrl = this;
  $ctrl.dishes = menuItems;
  $ctrl.rx = {
      name: /\w/,
      email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      telephone: /\d{0,2}?(?:\s|-)?\(?\d{3}\)?(?:\s|-)?\d{3}(?:\s|-)?\d{4}/
  }
  $ctrl.signup = {
      name: {
          first: '',
          last: ''
      },
      email: '',
      telephone: '',
      favorite: ''
  }

  $ctrl.submitForm = function(isValid) {
    let favorite = $ctrl.signup.favorite.toUpperCase()
    HerokuService.isValidMenuItem(favorite)
    .then(res => {
      if(res) {
        HerokuService.push($ctrl.signup)
      } else {
        $ctrl.warnInvalidFav = true
      }
    })
  }

  $ctrl.checkValid = function (form) {
    if (form.$invalid)
      return (form.firstname.$invalid || form.lastname.$invalid || form.email.$invalid || form.telephone.$invalid )
    return false
  }

  $ctrl.noteFavChange = function() {
    $ctrl.warnInvalidFav = false
  }

}


})();
