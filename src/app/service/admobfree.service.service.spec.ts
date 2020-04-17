import { TestBed } from '@angular/core/testing';

import { AdmobFreeService } from './admobfree.service.service';

describe('Admobfree.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdmobFreeService = TestBed.get(AdmobFreeService);
    expect(service).toBeTruthy();
  });
});
