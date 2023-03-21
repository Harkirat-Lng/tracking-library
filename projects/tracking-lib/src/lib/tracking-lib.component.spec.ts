import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingLibComponent } from './tracking-lib.component';

describe('TrackingLibComponent', () => {
  let component: TrackingLibComponent;
  let fixture: ComponentFixture<TrackingLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackingLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
