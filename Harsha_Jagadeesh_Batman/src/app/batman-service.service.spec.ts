import { TestBed } from '@angular/core/testing';

import { BatmanServiceService } from './batman-service.service';

describe('BatmanServiceService', () => {
  let service: BatmanServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatmanServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
