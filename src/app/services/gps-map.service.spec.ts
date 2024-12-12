import { TestBed } from '@angular/core/testing';

import { GpsMapService } from './gps-map.service';

describe('GpsMapService', () => {
  let service: GpsMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GpsMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
