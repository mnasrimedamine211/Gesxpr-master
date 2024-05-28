import { TestBed } from '@angular/core/testing';

import { CrudprofilStagiaireService } from './crudprofil-stagiaire.service';

describe('CrudprofilStagiaireService', () => {
  let service: CrudprofilStagiaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudprofilStagiaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
