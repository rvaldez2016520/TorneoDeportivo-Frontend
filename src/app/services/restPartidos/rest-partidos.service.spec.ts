import { TestBed } from '@angular/core/testing';

import { RestPartidosService } from './rest-partidos.service';

describe('RestPartidosService', () => {
  let service: RestPartidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestPartidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
