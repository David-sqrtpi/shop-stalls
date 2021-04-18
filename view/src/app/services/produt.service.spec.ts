import { TestBed } from '@angular/core/testing';

import { HttpProdutService } from './produt.service';

describe('ProdutService', () => {
  let service: HttpProdutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpProdutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
