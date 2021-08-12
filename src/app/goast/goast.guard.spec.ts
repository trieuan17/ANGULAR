import { TestBed } from '@angular/core/testing';

import { GoastGuard } from './goast.guard';

describe('GoastGuard', () => {
  let guard: GoastGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GoastGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
