import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trip1Component } from './trip1.component';

describe('Trip1Component', () => {
  let component: Trip1Component;
  let fixture: ComponentFixture<Trip1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Trip1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Trip1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
