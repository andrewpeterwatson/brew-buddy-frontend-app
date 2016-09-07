'use strict';

const testUrl = 'http://localhost:3000';

describe('testing brew-buddy-frontend-app auth-service', function() {
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
    const data = {username: 'Booyahton', password: 'letmein'};
    const token = 'ahhahhaha';
    const headers = {
      'Accept':'application/json',
      'Authorization': `Bearer ${authString}`
    };

    this.$httpBackend.expectGET(`${testUrl}/api/signin`,data, headers)
    .respond(200, token);

    this.authService.signin(data)
    .then(_token => {
      expect(_token).toBe(token);
    });

  });

  it('should post a user and get a token', () => {
    const exampleData = {username: 'Booyahton', password: 'letmein'};
    const token = 'ahhahhaha';
    const headers = {
      'Accept':'application/json',
      'Content-Type': 'application/json'
    };

    console.log('exampleData', exampleData);

    this.$httpBackend.expectPOST(`${testUrl}/api/signup`, exampleData, headers)
    .respond(200, token);

    this.authService.signup(exampleData)
    .then(_token => {
      expect(_token).toBe(token);
    });
    this.$httpBackend.flush();
  });
});
