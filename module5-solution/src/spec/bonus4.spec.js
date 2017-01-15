describe('HerokuService', function () {

  var HerokuService
  var $httpBackend;
  var ApiBasePath

  beforeEach(function () {
    module('common', function($provide) {
        $provide.constant('HEROKUAPI', 'URI://');
        $provide.constant('CheckMenuItemPathHEROKU', 'heroku/{short_name}.json')
    });

    inject(function ($injector) {
      HerokuService = $injector.get('HerokuService');
      $httpBackend = $injector.get('$httpBackend');
      ApiBasePath = 'URI://heroku/'
    });
  });

  it('should return an item when getMenuItem', function() {
    $httpBackend.whenGET(ApiBasePath + 'SHORT_NAME.json').respond({data: 'yup'});
    HerokuService.getMenuItem('SHORT_NAME').then(function(response) {
      expect(response.data).toEqual('yup');
    });
    $httpBackend.flush();
  });

});
