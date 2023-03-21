import { TestBed } from '@angular/core/testing';

import { TrackingLibService } from './tracking-lib.service';

describe('TrackingLibService', () => {
  let service: TrackingLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackingLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
