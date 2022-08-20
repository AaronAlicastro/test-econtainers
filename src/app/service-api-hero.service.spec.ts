import { TestBed } from '@angular/core/testing';

import { ServiceApiHeroService } from './service-api-hero.service';

describe('ServiceApiHeroService', () => {
  let service: ServiceApiHeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceApiHeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
