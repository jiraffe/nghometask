import { TestBed, inject } from '@angular/core/testing';

import { HotelsService } from './hotels.service';

describe('HotelsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HotelsService]
    });
  });

  it('should be created', inject([HotelsService], (service: HotelsService) => {
    expect(service).toBeTruthy();
  }));
});
