import { TestBed, inject } from '@angular/core/testing';

import { RouteMgrEffects } from './route-mgr-effects';

describe('RouteMgrEffectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteMgrEffects]
    });
  });

  it(
    'should be created',
    inject([RouteMgrEffects], (service: RouteMgrEffects) => {
      expect(service).toBeTruthy();
    })
  );
});
