import { TestBed } from '@angular/core/testing';

import { HttpSupplierService } from './http-supplier.service';

describe('HttpSupplierService', () => {
  let service: HttpSupplierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpSupplierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
