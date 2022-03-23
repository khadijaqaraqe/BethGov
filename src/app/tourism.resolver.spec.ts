import { TestBed } from '@angular/core/testing';

import { TourismResolver } from './tourism.resolver';

describe('TourismResolver', () => {
  let resolver: TourismResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TourismResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
