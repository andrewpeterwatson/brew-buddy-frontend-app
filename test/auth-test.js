'use strict';

const testUrl = 'http://localhost:3000';

describe('testing brew-buddy-frontend-app auth-service', () => {
  beforeEach(() => {
    angular.mock.module('brewBuddy');
    angular.mock.inject((authService, $httpBackend) => {
      this.authService = authService;
      this.$httpBackend = $httpBackend;

    });

    afterEach(() => {
      this.$httpBackend.verifyNoOutstandingRequest();
      this.$httpBackend.verifyNoOutstandingExpectation();
    });
  });

  it('should get a token and signin', () => {
    const authString = this.authService.getToken();
    const post = {username: 'Booyahton', password: 'letmein'};
    const headers = {
      'Accept':'application/json',
      'Authorization': `Bearer ${authString}`
    };

    this.$httpBackend.expectGET(`${testUrl}/api/signin`,post, headers)
    .respond(200, {status: 'ok', data: [
      {token: 'token'}
    ]});

    this.authService.signin()
    .then(res => {
      expect(res.status).toBe(200);
      expect(res.data.token).toBe('token');
    });
  });

  it('should post a user and get a token', () => {
    const authString = this.authService.getToken();
    const post = {username: 'Booyahton', password: 'letmein'};
    const headers = {
      'Accept':'application/json',
      'Authorization': `Bearer ${authString}`,
      'Content-Type':'application/json;charset=utf-8'
    };

    this.$httpBackend.expectPOST(`${testUrl}/api/signup`, post, headers)
    .respond(200, {status: 'ok', data:[
      {token: 'token'}
    ]});


    this.authService.signup(post)
    .then(res => {
      expect(res.status).toBe(200);
      expect(res.data.token).toBe(true);
    });
  });
});
