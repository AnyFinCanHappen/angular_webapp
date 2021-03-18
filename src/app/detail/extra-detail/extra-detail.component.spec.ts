import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraDetailComponent } from './extra-detail.component';

describe('ExtraDetailComponent', () => {
  let component: ExtraDetailComponent;
  let fixture: ComponentFixture<ExtraDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
