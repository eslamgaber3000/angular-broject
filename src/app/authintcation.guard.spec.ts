import { TestBed } from '@angular/core/testing';

import { AuthintcationGuard } from './authintcation.guard';

describe('AuthintcationGuard', () => {
  let guard: AuthintcationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthintcationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
