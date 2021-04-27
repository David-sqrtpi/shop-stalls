import { TestBed } from '@angular/core/testing';

import { HttpServicesService } from './services.service';

describe('ServicesService', () => {
  let service: HttpServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
