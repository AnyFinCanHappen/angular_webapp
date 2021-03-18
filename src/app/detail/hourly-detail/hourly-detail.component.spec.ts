import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyDetailComponent } from './hourly-detail.component';

describe('HourlyDetailComponent', () => {
  let component: HourlyDetailComponent;
  let fixture: ComponentFixture<HourlyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HourlyDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
