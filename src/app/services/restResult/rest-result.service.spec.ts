import { TestBed } from '@angular/core/testing';

import { RestResultService } from './rest-result.service';

describe('RestResultService', () => {
  let service: RestResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
