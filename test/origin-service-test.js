'use strict';

const testUrl = 'http://localhost:3000';

describe('testing brew-buddy-frontend-app origin-service', () => {
  beforeEach(() => {
    angular.mock.module('brewBuddy');
    angular.mock.inject((originService, authService, $httpBackend) => {
      this.authService = authService;
      this.originService = originService;
      this.$httpBackend = $httpBackend;

    });

    afterEach(() => {
      this.$httpBackend.verifyNoOutstandingRequest();
      this.$httpBackend.verifyNoOutstandingExpectation();
    });
  });

  it('should get some origin', () => {
    const authString = this.authService.getToken();
    const headers = {
      'Accept':'application/json',
      'Authorization': `Bearer ${authString}`
    };

    this.$httpBackend.expectGET(`${testUrl}/api/origin`, headers)
    .respond(200, {status: 'ok', data: [
      {country: 'Stumptown'},
      {country: 'Hackerton'}
    ]});

    this.originService.fetchOrigins()
    .then(res => {
      expect(res.status).toBe(200);
      expect(Array.isArray(res.data)).toBe(true);
    });
  });

  it('should post an origin', () => {
    const authString = this.authService.getToken();
    const post = {country: 'Booyahton'};
    const headers = {
      'authorization': `Bearer ${authString}`,
      'Accept':'application/json, text/plain, */*',
      'Content-Type':'application/json;charset=utf-8'
    };

    this.$httpBackend.expectPOST(`${testUrl}/api/origin`, post,headers)
    .respond(200, {status: 'ok', data:[
      {country: 'Stumptown'},
      {country: 'Hackerton'},
      {country: 'Booyahton'}
    ]});


    this.originService.createOrigin(post)
    .then(res => {
      expect(res.status).toBe(200);
      expect(Array.isArray(res.data)).toBe(true);
    });
  });
});
