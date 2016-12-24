(function(){
    angular.module('LunchCheck')
        .controller('LunchCheckController', LunchCheckController)

    LunchCheckController.$inject = ['$scope', 'TEXT_FRUGAL', 'TEXT_EXCESSIVE', 'TEXT_DEFAULT']
    function LunchCheckController ($scope, TEXT_FRUGAL, TEXT_EXCESSIVE, TEXT_DEFAULT) {
        $scope.noFoods = 0;
        $scope.rawFoods = '';

        $scope.changeFoods = function () {
            countFoods()
        }

        function countFoods () {
            /* -- from the instructions:
            BONUS (OPTIONAL AND NOT GRADED)

Implement this case item 1, item2,,item3 or this case item 1, item2, ,item3 as not counting an 'empty' item towards the count of how many items there are in the list. Please make sure to put a comment somewhere next to the input textbox stating that you do NOT consider and empty item, i.e., , , as an item towards to the count, so whoever is grading your assignment doesn't erroneously mark that as an error.
            */
            let rx = /(\s*?[^\,\s]+(?:\s[^\,])*\s*?)/g;
            $scope.noFoods = ($scope.rawFoods.match(rx) || []).length
        }

        $scope.foodsCheck = function () {
            $scope.highlight=true
            if ($scope.noFoods === 0) {
                $scope.msg = TEXT_DEFAULT
                $scope.nowarn=false
            } else {
                $scope.msg = ($scope.noFoods > 3)?
                    TEXT_EXCESSIVE: TEXT_FRUGAL
                $scope.nowarn=true
            }
        }
    }
})()