import { TestBed } from '@angular/core/testing';

import { VsMenuService } from './vs-menu.service';

describe('VsMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VsMenuService = TestBed.get(VsMenuService);
    expect(service).toBeTruthy();
  });
});
