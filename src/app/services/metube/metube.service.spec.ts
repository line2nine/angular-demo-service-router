import { TestBed } from '@angular/core/testing';

import { MetubeService } from './metube.service';

describe('MetubeService', () => {
  let service: MetubeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetubeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
