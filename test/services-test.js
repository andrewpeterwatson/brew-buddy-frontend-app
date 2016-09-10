'use strict';

const testUrl = 'http://localhost:3000';

describe('testing brew-buddy-frontend-app services', function() {
  beforeEach(() => {
    angular.mock.module('brewBuddy');
    angular.mock.inject((originService, methodService, flavorService, entryService, authService, $httpBackend) => {
      this.originService = originService;
      this.methodService = methodService;
      this.flavorService = flavorService;
      this.entryService = entryService;
      this.authService = authService;
      // this.aromaService = aromaService;
      // this.acidityService = acidityService;
      this.$httpBackend = $httpBackend;
    });
  });

  it('should post an origin', () => {
    const authString = this.authService.getToken();
    const post = {
      country: 'Booyahton'
    };
    const headers = {
      'authorization': `Bearer ${authString}`,
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json;charset=utf-8'
    };

    this.$httpBackend.expectPOST(`${testUrl}/api/origin`, post, headers)
      .respond(200, {
        status: 'ok',
        data: [{
          country: 'Stumptown'
        }, {
          country: 'Hackerton'
        }, {
          country: 'Booyahton'
        }]
      });

    this.originService.createOrigin(post)
      .then(res => {
        expect(res.status).toBe(200);
        expect(Array.isArray(res.data)).toBe(true);
      });
  });

  it('should update an origin', () => {
    const authString = this.authService.getToken();
    const put = {
      country: 'korea'
    };
    const headers = {
      'authorization': `Bearer ${authString}`,
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json;charset=utf-8'
    };
    this.$httpBackend.expectPUT(`${testUrl}/api/origin`, put, headers)
      .respond(200, {
        status: 'ok',
        data: [{
          country: 'korea'
        }]
      });
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
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json;charset=utf-8'
    };

    this.$httpBackend.expectDELETE(`${testUrl}/api/origin`, originId, headers)
      .respond(204, {
        status: 'no content'
      });


    this.originService.deleteOrigin(originId)
      .then(res => {
        expect(res.status).toBe(204);
        expect(Array.isArray(res.data)).toBe(true);
      });
  });
//
  describe('testing brew-buddy-frontend-app method-service', () => {

    it('should get some method', () => {
      const authString = this.authService.getToken();
      const headers = {
        'authorization': `Bearer ${authString}`,
        'Accept': 'application/json, text/plain, */*'

      };

      this.$httpBackend.expectGET(`${testUrl}/api/method`, headers)
        .respond(200, {
          status: 'ok',
          data: [{
            title: 'cold brewer',
            recipe: 'grounds',
            brewRatio: 2.75,
            brewTimer: 3600
          }, {
            title: 'Mr. coffee',
            recipe: '1 cup',
            brewRatio: 4,
            brewTimer: 24
          }]
        });

      this.methodService.fetchMethods()
        .then(res => {
          expect(res.status).toBe(200);
          expect(Array.isArray(res.data)).toBe(true);
        });
    });

    it('should post an method', () => {
      const authString = this.authService.getToken();
      const post = {
        title: 'korean coffee',
        recipe: 'instant',
        brewRatio: 1,
        brewTimer: 3
      };
      const headers = {
        'authorization': `Bearer ${authString}`,
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=utf-8'
      };

      this.$httpBackend.expectPOST(`${testUrl}/api/method`, post, headers)
        .respond(200, {
          status: 'ok',
          data: [{
            title: 'cold brewer',
            recipe: 'grounds',
            brewRatio: 2.75,
            brewTimer: 3600
          }, {
            title: 'Mr. coffee',
            recipe: '1 cup',
            brewRatio: 4,
            brewTimer: 24
          }, {
            title: 'korean coffee',
            recipe: 'instant',
            brewRatio: 1,
            brewTimer: 3
          }]
        });


      this.methodService.createMethod(post)
        .then(res => {
          expect(res.status).toBe(200);
          expect(Array.isArray(res.data)).toBe(true);
        });
    });

    it('should update an method', () => {
      const authString = this.authService.getToken();
      const put = {
        title: 'Java',
        recipe: '1 cup',
        brewRatio: 2,
        brewTimer: 22
      };
      const headers = {
        'authorization': `Bearer ${authString}`,
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=utf-8'
      };

      this.$httpBackend.expectPUT(`${testUrl}/api/method`, put, headers)
        .respond(200, {
          status: 'ok',
          data: [{
            title: 'Java',
            recipe: '1 cup',
            brewRatio: 2,
            brewTimer: 22
          }]
        });


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
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=utf-8'
      };

      this.$httpBackend.expectDELETE(`${testUrl}/api/method`, methodId, headers)
        .respond(204, {
          status: 'no content'
        });


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
          'Accept': 'application/json, text/plain, */*'

        };

        this.$httpBackend.expectGET(`${testUrl}/api/flavor`, headers)
          .respond(200, {
            status: 'ok',
            data: [{
              category: 'Fruits and Florals',
              flavorType: 'Vanilla',
              title: 'Vanilla'
            }, {
              category: 'Fruits and Florals',
              flavorType: 'Black Tea',
              title: 'Earl Grey'
            }]
          });

        this.flavorService.fetchFlavors()
          .then(res => {
            expect(res.status).toBe(200);
            expect(Array.isArray(res.data)).toBe(true);
          });
      });

      it('should post an flavor', () => {
        const authString = this.authService.getToken();
        const post = {
          category: 'Fruits and Florals',
          flavorType: 'Floral',
          title: 'Chamomile'
        };
        const headers = {
          'authorization': `Bearer ${authString}`,
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json;charset=utf-8'
        };

        this.$httpBackend.expectPOST(`${testUrl}/api/flavor`, post, headers)
          .respond(200, {
            status: 'ok',
            data: [{
              category: 'Fruits and Florals',
              flavorType: 'Vanilla',
              title: 'Vanilla'
            }, {
              category: 'Fruits and Florals',
              flavorType: 'Black Tea',
              title: 'Earl Grey'
            }, {
              category: 'Fruits and Florals',
              flavorType: 'Floral',
              title: 'Chamomile'
            }]
          });


        this.flavorService.createFlavor(post)
          .then(res => {
            expect(res.status).toBe(200);
            expect(Array.isArray(res.data)).toBe(true);
          });
      });
      it('should update an flavor', () => {
        const authString = this.authService.getToken();
        const put = {
          category: 'Poultry',
          flavorType: 'Bouillon',
          title: 'Fried Chicken'
        };
        const headers = {
          'authorization': `Bearer ${authString}`,
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json;charset=utf-8'
        };

        this.$httpBackend.expectPUT(`${testUrl}/api/flavor`, put, headers)
          .respond(200, {
            status: 'ok',
            data: [{
              category: 'Poultry',
              flavorType: 'Bouillon',
              title: 'Fried Chicken'
            }]
          });

        this.flavorService.updateFlavor(put)
          .then(res => {
            expect(res.status).toBe(200);
            expect(Array.isArray(res.data)).toBe(true);
          });
      });

      it('should delete an flavor', () => {
        const authString = this.authService.getToken();
        const flavorId = this.flavorId;
        const headers = {
          'authorization': `Bearer ${authString}`,
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json;charset=utf-8'
        };

        this.$httpBackend.expectDELETE(`${testUrl}/api/flavor`, flavorId, headers)
          .respond(204, {
            status: 'no content'
          });


        this.flavorService.deleteFlavor(flavorId)
          .then(res => {
            expect(res.status).toBe(204);
            expect(Array.isArray(res.data)).toBe(true);
          });
      });
      describe('testing brew-buddy-frontend-app entry-service', () => {

        it('should get some entry', () => {
          const authString = this.authService.getToken();
          const headers = {
            'authorization': `Bearer ${authString}`,
            'Accept': 'application/json, text/plain, */*'
          };

          this.$httpBackend.expectGET(`${testUrl}/api/entry`, headers)
            .respond(200, {
              status: 'ok',
              data: [{
                date: 8 - 30 - 16,
                aromas: 'strawberry',
                acidity: 'sour',
                body: 'soft',
                finish: 'rich',
                experience: 'weird',
                rating: 2,
                username: 'Buddy',
                methodId: 123,
                originId: 234,
                flavorId: 345
              }, {
                date: 8 - 30 - 16,
                aromas: 'strawberry',
                acidity: 'sour',
                body: 'fleshy',
                finish: 'meaty',
                experience: 'rank',
                rating: 1,
                username: 'Buddy',
                methodId: 1234,
                originId: 2345,
                flavorId: 3456
              }]
            });

          this.entryService.fetchEntry()
            .then(res => {
              expect(res.status).toBe(200);
              expect(Array.isArray(res.data)).toBe(true);
            });
        });

        it('should post an entry', () => {
          const authString = this.authService.getToken();
          const post = {
            date: 8 - 30 - 16,
            aromas: 'beefy',
            acidity: 'umame',
            body: 'fleshy',
            finish: 'meaty',
            experience: 'rank',
            rating: 4,
            username: 'Buddy',
            methodId: 12345,
            originId: 23456,
            flavorId: 34567
          };
          const headers = {
            'authorization': `Bearer ${authString}`,
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json;charset=utf-8'
          };

          this.$httpBackend.expectPOST(`${testUrl}/api/entry`, post, headers)
            .respond(200, {
              status: 'ok',
              data: [{
                date: 8 - 30 - 16,
                aromas: 'strawberry',
                acidity: 'sour',
                body: 'soft',
                finish: 'rich',
                experience: 'weird',
                rating: 2,
                username: 'Buddy',
                methodId: 123,
                originId: 234,
                flavorId: 345
              }, {
                date: 8 - 30 - 16,
                aromas: 'strawberry',
                acidity: 'sour',
                body: 'fleshy',
                finish: 'meaty',
                experience: 'rank',
                rating: 1,
                username: 'Buddy',
                methodId: 1234,
                originId: 2345,
                flavorId: 3456
              }, {
                date: 8 - 30 - 16,
                aromas: 'beefy',
                acidity: 'umame',
                body: 'fleshy',
                finish: 'meaty',
                experience: 'rank',
                rating: 4,
                username: 'Buddy',
                methodId: 12345,
                originId: 23456,
                flavorId: 34567
              }]
            });

          this.entryService.createEntry(post)
            .then(res => {
              expect(res.status).toBe(200);
              expect(Array.isArray(res.data)).toBe(true);
            });
        });

        it('should update an entry', () => {
          const authString = this.authService.getToken();
          const put = {
            date: 8 - 30 - 16,
            aromas: 'beefy',
            acidity: 'umame',
            body: 'fleshy',
            finish: 'meaty',
            experience: 'rank',
            rating: 4,
            username: 'Buddy',
            methodId: 12345,
            originId: 23456,
            flavorId: 34567
          };
          const headers = {
            'authorization': `Bearer ${authString}`,
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json;charset=utf-8'
          };

          this.$httpBackend.expectPUT(`${testUrl}/api/entry`, put, headers)
            .respond(200, {
              status: 'ok',
              data: [{
                date: 8 - 30 - 16,
                aromas: 'beefy',
                acidity: 'umame',
                body: 'fleshy',
                finish: 'meaty',
                experience: 'rank',
                rating: 4,
                username: 'Buddy',
                methodId: 12345,
                originId: 23456,
                flavorId: 34567
              }]
            });

          this.entryService.updateEntry(put)
            .then(res => {
              expect(res.status).toBe(200);
              expect(Array.isArray(res.data)).toBe(true);
            });
        });

        it('should delete an entry', () => {
          const authString = this.authService.getToken();
          const entryId = this.entryId;
          const headers = {
            'authorization': `Bearer ${authString}`,
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json;charset=utf-8'
          };

          this.$httpBackend.expectDELETE(`${testUrl}/api/entry`, entryId, headers)
            .respond(204, {
              status: 'no content'
            });

          this.entryService.deleteEntry(entryId)
            .then(res => {
              expect(res.status).toBe(204);
              expect(Array.isArray(res.data)).toBe(true);
            });
        });
      });
    });
  });

});
