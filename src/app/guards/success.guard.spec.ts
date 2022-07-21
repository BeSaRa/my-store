import { TestBed } from '@angular/core/testing';

import { SuccessGuard } from './success.guard';

describe('SuccessGuard', () => {
  let guard: SuccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SuccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
