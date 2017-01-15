(function () {
"use strict";

angular.module('public')
.directive('validatefav', ValidateFavDirective);

function ValidateFavDirective(){ 
    return {
        require: 'ngModel',
        scope: {
            dishes: '='
        },
        link: function(scope, elem, attr, ngModel) {
            ngModel.$parsers.unshift(function(value) {
                if(value==='') {
                    ngModel.$setPristine()
                    ngModel.$setValidity('validatefav', false );
                    return;
                }

                var up = value.toUpperCase()
                var item = scope.dishes.filter(d => d.short_name === up)[0]
                var valid = item !== undefined
                ngModel.$setValidity('validatefav', valid );
                return value;
            });
        }
    };
}

})();