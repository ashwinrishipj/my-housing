import { TestBed } from '@angular/core/testing';

import { FetchAddressService } from './fetch-address.service';

describe('FetchAddressService', () => {
  let service: FetchAddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchAddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
