import { TestBed, inject } from '@angular/core/testing';

import { CardetailsService } from './cardetails.service';

describe('CardetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardetailsService]
    });
  });

  it('should be created', inject([CardetailsService], (service: CardetailsService) => {
    expect(service).toBeTruthy();
  }));
});
