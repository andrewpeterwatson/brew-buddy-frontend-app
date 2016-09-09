'use strict';

const testUrl = 'http://localhost:3000';

describe('testing acidity-service', function(){
  beforeEach(() => {
    angular.mock.module('brewBuddy');
    angular.mock.inject((acidityService, $httpBackend) => {
      this.acidityService = acidityService;
      this.$httpBackend = $httpBackend;
    });
    afterEach(()=> {
      this.$httpBackend.verifyNoOutstandingRequest();
      this.$httpBackend.verifyNoOutstandingExpectation();
    });
  });
  it('TEST: fetchAciditys', () => {
    this.$httpBackend.expectGET(`${testUrl}/api/acidity`)
    .respond(200, `${testUrl}/api/acidity`);

    this.acidityService.fetchAciditys()
    .then( data => {
      expect(true).toBe(true);
      expect(Array.isArray(data)).toBe(false);
      // expect(data).toBe('Object');
    })
    .catch (err => {
      expect(err).toBe(null);
    });
    this.$httpBackend.flush();
  });
  //
  it('TEST: createAcidity', () => {
    this.$httpBackend.expectPOST(`${testUrl}/api/acidity`)
    .respond(200, `${testUrl}/api/acidity`});

    this.acidityService.
  });
});
