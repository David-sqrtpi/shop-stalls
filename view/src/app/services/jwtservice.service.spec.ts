import { TestBed } from '@angular/core/testing';

import { JWTserviceService } from './jwtservice.service';

describe('JWTserviceService', () => {
  let service: JWTserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JWTserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
