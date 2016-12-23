(function () {

    let TEXT_FRUGAL = 'Enjoy!'
    let TEXT_EXCESSIVE = 'Too much!'
    let TEXT_DEFAULT = 'Please enter data first'

    angular.module('LunchCheck', [])
        .constant('TEXT_FRUGAL', TEXT_FRUGAL)
        .constant('TEXT_EXCESSIVE', TEXT_EXCESSIVE)
        .constant('TEXT_DEFAULT', TEXT_DEFAULT)

})()