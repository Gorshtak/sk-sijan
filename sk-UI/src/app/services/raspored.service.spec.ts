import { TestBed, inject } from '@angular/core/testing';

import { RasporedService } from './raspored.service';

describe('RasporedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RasporedService]
    });
  });

  it('should be created', inject([RasporedService], (service: RasporedService) => {
    expect(service).toBeTruthy();
  }));
});
