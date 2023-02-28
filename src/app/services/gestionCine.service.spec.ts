import { TestBed } from '@angular/core/testing';

import { GestionCineService } from './gestionCine.service';

describe('GestionCineService', () => {
  let service: GestionCineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionCineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
