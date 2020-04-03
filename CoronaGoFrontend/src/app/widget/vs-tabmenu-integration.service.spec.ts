import { TestBed } from '@angular/core/testing';

import { VsTabmenuIntegrationService } from './vs-tabmenu-integration.service';

describe('VsTabmenuIntegrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VsTabmenuIntegrationService = TestBed.get(VsTabmenuIntegrationService);
    expect(service).toBeTruthy();
  });
});
