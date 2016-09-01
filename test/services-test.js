'use strict';

const testUrl = 'http://localhost:3000';

describe('testing brew-buddy-frontend-app services', () => {
  beforeEach(() => {
    angular.mock.module('brewBuddy');
    angular.mock.inject((originService, methodService,  flavorService, authService, $httpBackend) => {
      this.originService = originService;
      this.methodService = methodService;
      this.flavorService = flavorService;

      this.authService = authService;
      this.$httpBackend = $httpBackend;

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

    this.$httpBackend.expectPOST(`${testUrl}/api/origin`, post, headers)
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
  it('should update an origin', () => {
    const authString = this.authService.getToken();
    const put = {country: 'korea'};
    const headers = {
      'authorization': `Bearer ${authString}`,
      'Accept':'application/json, text/plain, */*',
      'Content-Type':'application/json;charset=utf-8'
    };

    this.$httpBackend.expectPUT(`${testUrl}/api/origin`, put, headers)
    .respond(200, {status: 'ok', data:[
      {country: 'korea'}
    ]});


    this.originService.updateOrigin(put)
    .then(res => {
      expect(res.status).toBe(200);
      expect(Array.isArray(res.data)).toBe(true);
    });
  });

  it('should delete an origin', () => {
    const authString = this.authService.getToken();
    const originId = this.originId;
    const headers = {
      'authorization': `Bearer ${authString}`,
      'Accept':'application/json, text/plain, */*',
      'Content-Type':'application/json;charset=utf-8'
    };

    this.$httpBackend.expectDELETE(`${testUrl}/api/origin`, originId, headers)
    .respond(204, {status: 'no content'});


    this.originService.deleteOrigin(originId)
    .then(res => {
      expect(res.status).toBe(204);
      expect(Array.isArray(res.data)).toBe(true);
    });
  });

  describe('testing brew-buddy-frontend-app method-service', () => {

    it('should get some method', () => {
      const authString = this.authService.getToken();
      const headers = {
        'authorization': `Bearer ${authString}`,
        'Accept':'application/json, text/plain, */*'

      };

      this.$httpBackend.expectGET(`${testUrl}/api/method`, headers)
      .respond(200, {status: 'ok', data: [
        {title: 'cold brewer', recipe: 'grounds', brewRatio: 2.75, brewTimer: 3600},
        {title: 'Mr. coffee', recipe: '1 cup', brewRatio: 4, brewTimer: 24}
      ]});

      this.methodService.fetchMethods()
      .then(res => {
        expect(res.status).toBe(200);
        expect(Array.isArray(res.data)).toBe(true);
      });
    });

    it('should post an method', () => {
      const authString = this.authService.getToken();
      const post = {title: 'korean coffee', recipe: 'instant', brewRatio: 1, brewTimer: 3};
      const headers = {
        'authorization': `Bearer ${authString}`,
        'Accept':'application/json, text/plain, */*',
        'Content-Type':'application/json;charset=utf-8'
      };

      this.$httpBackend.expectPOST(`${testUrl}/api/method`, post,headers)
      .respond(200, {status: 'ok', data:[
        {title: 'cold brewer', recipe: 'grounds', brewRatio: 2.75, brewTimer: 3600},
        {title: 'Mr. coffee', recipe: '1 cup', brewRatio: 4, brewTimer: 24},
        {title: 'korean coffee', recipe: 'instant', brewRatio: 1, brewTimer: 3}
      ]});


      this.methodService.createMethod(post)
      .then(res => {
        expect(res.status).toBe(200);
        expect(Array.isArray(res.data)).toBe(true);
      });
    });

    it('should update an method', () => {
      const authString = this.authService.getToken();
      const put = {title: 'Java', recipe: '1 cup', brewRatio: 2, brewTimer: 22};
      const headers = {
        'authorization': `Bearer ${authString}`,
        'Accept':'application/json, text/plain, */*',
        'Content-Type':'application/json;charset=utf-8'
      };

      this.$httpBackend.expectPUT(`${testUrl}/api/method`, put, headers)
      .respond(200, {status: 'ok', data:[
      {title: 'Java', recipe: '1 cup', brewRatio: 2, brewTimer: 22}
      ]});


      this.methodService.updateMethod(put)
      .then(res => {
        expect(res.status).toBe(200);
        expect(Array.isArray(res.data)).toBe(true);
      });
    });

    it('should delete an method', () => {
      const authString = this.authService.getToken();
      const methodId = this.methodId;
      const headers = {
        'authorization': `Bearer ${authString}`,
        'Accept':'application/json, text/plain, */*',
        'Content-Type':'application/json;charset=utf-8'
      };

      this.$httpBackend.expectDELETE(`${testUrl}/api/method`, methodId, headers)
      .respond(204, {status: 'no content'});


      this.methodService.deleteMethod(methodId)
      .then(res => {
        expect(res.status).toBe(204);
        expect(Array.isArray(res.data)).toBe(true);
      });
    });
    
    describe('testing brew-buddy-frontend-app flavor-service', () => {

      it('should get some flavor', () => {
        const authString = this.authService.getToken();
        const headers = {
          'authorization': `Bearer ${authString}`,
          'Accept':'application/json, text/plain, */*'

        };

        this.$httpBackend.expectGET(`${testUrl}/api/flavor`, headers)
        .respond(200, {status: 'ok', data: [
          {category: 'Fruits and Florals', flavorType: 'Vanilla', title: 'Vanilla'},
          {category: 'Fruits and Florals', flavorType: 'Black Tea', title: 'Earl Grey'}
        ]});

        this.flavorService.fetchFlavors()
        .then(res => {
          expect(res.status).toBe(200);
          expect(Array.isArray(res.data)).toBe(true);
        });
      });

      it('should post an flavor', () => {
        const authString = this.authService.getToken();
        const post = {category: 'Fruits and Florals', flavorType: 'Floral', title: 'Chamomile'};
        const headers = {
          'authorization': `Bearer ${authString}`,
          'Accept':'application/json, text/plain, */*',
          'Content-Type':'application/json;charset=utf-8'
        };

        this.$httpBackend.expectPOST(`${testUrl}/api/flavor`, post,headers)
        .respond(200, {status: 'ok', data:[
          {category: 'Fruits and Florals', flavorType: 'Vanilla', title: 'Vanilla'},
          {category: 'Fruits and Florals', flavorType: 'Black Tea', title: 'Earl Grey'},
          {category: 'Fruits and Florals', flavorType: 'Floral', title: 'Chamomile'}
        ]});


        this.flavorService.createFlavor(post)
        .then(res => {
          expect(res.status).toBe(200);
          expect(Array.isArray(res.data)).toBe(true);
        });
      });
    });
  });
});
