import { TestBed } from '@angular/core/testing';

import { RestTorneoService } from './rest-torneo.service';

describe('RestTorneoService', () => {
  let service: RestTorneoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestTorneoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
