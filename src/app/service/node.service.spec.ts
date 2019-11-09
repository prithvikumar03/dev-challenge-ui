import { TestBed } from '@angular/core/testing';

import { GetConnectionsService } from './node.service';

describe('GetConnectionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetConnectionsService = TestBed.get(GetConnectionsService);
    expect(service).toBeTruthy();
  });
});
