import { TestBed } from '@angular/core/testing';

import { BaseQRService } from './base-qr.service';

describe('BaseQRService', () => {
  let service: BaseQRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseQRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
