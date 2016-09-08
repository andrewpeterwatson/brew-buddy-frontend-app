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
  it('should get acidityService: GET', () => {
    this.$httpBackend.expectGET(`${testUrl}/api/acidity`)
    .respond(200, {_id: '1212', name: 'dataService', notes: [], _v: 0});

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
  it('should get acidityService: POST', () => {
    this.$httpBackend.expectPOST(`${testUrl}/api/acidity`)
    .respond(200, {_id: '1212', name: 'dataService', notes: [], _v: 0});

    this.acidityService.postAcidity()
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
});
