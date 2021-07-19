import { TestBed } from '@angular/core/testing';

import { UploadsTeamService } from './uploads-team.service';

describe('UploadsTeamService', () => {
  let service: UploadsTeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadsTeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
