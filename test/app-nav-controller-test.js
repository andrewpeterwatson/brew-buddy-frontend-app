'use strict';

describe('testing app-nav-controller', function(){
  beforeEach(() => {
    angular.mock.module('brewBuddy');
    angular.mock.inject(($controller, $httpBackend) => {
      this.$httpBackend = $httpBackend;
      this.appNavModalCtrl = new $controller('AppNavModalController');
    });
    afterEach(() => {
      this.$httpBackend.verifyNoOutstandingRequest();
      this.$httpBackend.verifyNoOutstandingExpectation();
    });
  });
  it('should get appNavModalCtrl', () => {
    expect(typeof this.appNavModalCtrl).toBe('object');
    expect(this.appNavModalCtrl.name).toBe('tester');
    expect(true).toBe(true);
    // this.$httpBackend.flush();
  });
});
