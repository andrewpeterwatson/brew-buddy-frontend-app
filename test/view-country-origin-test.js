'use strict';

// const testUrl = 'http://localhost:3000';

describe('testing view-country of Origin-service', function(){
  beforeEach(() => {
    angular.mock.module('brewBuddy');
    angular.mock.inject(($controller, $httpBackend) => {
      this.countryOfOriginCtrl = new $controller('CountryOfOriginController');
      this.$httpBackend = $httpBackend;
    });
    afterEach(()=> {
      this.$httpBackend.verifyNoOutstandingRequest();
      this.$httpBackend.verifyNoOutstandingExpectation();
    });
  });
  it('should hit CountryOfOriginController', () => {
    expect(true).toBe(true);
    expect(typeof this.countryOfOriginCtrl).toBe('object');
  });
});
