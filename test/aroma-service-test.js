'use strict';

const testUrl = 'http://localhost:3000';

describe('testing aroma-service', function(){
  beforeEach(() => {
    angular.mock.module('brewBuddy');
    angular.mock.inject((aromaService, $httpBackend) => {
      this.aromaService = aromaService;
      this.$httpBackend = $httpBackend;
    });
    afterEach(()=> {
      this.$httpBackend.verifyNoOutstandingRequest();
      this.$httpBackend.verifyNoOutstandingExpectation();
    });
  });
  it('should get aromaService', () => {
    this.$httpBackend.expectGET(`${testUrl}/api/aroma`)
    .respond(200, {_id: '1212', name: 'dataService', notes: [], _v: 0});

    this.aromaService.fetchAromas()
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
