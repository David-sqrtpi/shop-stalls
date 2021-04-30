import { TestBed } from '@angular/core/testing';

import { HttpServicesService } from './http.service';

describe('HttpServicesService', () => {
  let service: HttpServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
