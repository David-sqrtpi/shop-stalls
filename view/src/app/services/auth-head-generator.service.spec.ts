import { TestBed } from '@angular/core/testing';

import { AuthHeadGeneratorService } from './auth-head-generator.service';

describe('AuthHeadGeneratorService', () => {
  let service: AuthHeadGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthHeadGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
