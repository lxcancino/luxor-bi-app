import { TestBed } from '@angular/core/testing';

import { LineasService } from './lineas.service';

describe('LineasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LineasService = TestBed.get(LineasService);
    expect(service).toBeTruthy();
  });
});
