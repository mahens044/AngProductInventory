import { TestBed } from '@angular/core/testing';

import { AwayGuardGuard } from './away-guard.guard';

describe('AwayGuardGuard', () => {
  let guard: AwayGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AwayGuardGuard);
  });

  // it('should be created', () => {
  //   expect(guard).toBeTruthy();
  // });
});
