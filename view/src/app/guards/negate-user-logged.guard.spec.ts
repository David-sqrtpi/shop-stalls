import { TestBed } from '@angular/core/testing';

import { NegateUserLoggedGuard } from './negate-user-logged.guard';

describe('NegateUserLoggedGuard', () => {
  let guard: NegateUserLoggedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NegateUserLoggedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
