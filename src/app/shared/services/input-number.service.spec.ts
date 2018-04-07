import { TestBed, inject } from '@angular/core/testing';

import { InputNumberService } from './input-number.service';

describe('InputNumberService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InputNumberService]
    });
  });

  it('should be created', inject([InputNumberService], (service: InputNumberService) => {
    expect(service).toBeTruthy();
  }));
});
