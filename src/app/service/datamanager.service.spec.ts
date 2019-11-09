import { TestBed } from '@angular/core/testing';

import { DatamanagerService } from './datamanager.service';

describe('BootstrapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatamanagerService = TestBed.get(DatamanagerService);
    expect(service).toBeTruthy();
  });
});
