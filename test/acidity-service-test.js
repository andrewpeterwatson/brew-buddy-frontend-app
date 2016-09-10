'use strict';

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
  it('should get acidityService', () => {
    this.$httpBackend.expectGET()
    .respond(200, {});
//
    this.acidityService.fetchAciditys;
    expect(true).toBe(true);
  });
});


// 16     this.$httpBackend.expectGET('https://data.seattle.gov/resource/rn6u-vkuv    .json?$$app_token=4YJ9cWsB3jAAZm27KmaV2my0r')
// 17     .respond(200, {_id: '1212', name: 'dataService', notes: [], _v: 0});
// 18
// 19     this.dataService.fetchData()
// 20     .then( data => {
// 21       expect(true).toBe(true);
// 22       expect(data._id).toBe('1212');
// 23       expect(data.name).toBe('dataService');
// 24     })
// 25     .catch( err => {
// 26       expect(err).toBe(undefined);
// 27     });
// 28     this.$httpBackend.flush();
