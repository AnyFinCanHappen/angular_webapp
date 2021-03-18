import { TestBed } from '@angular/core/testing';

import { WeatherSerivceService } from './weather-serivce.service';

describe('WeatherSerivceService', () => {
  let service: WeatherSerivceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherSerivceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
