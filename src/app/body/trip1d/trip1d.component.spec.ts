import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trip1dComponent } from './trip1d.component';

describe('Trip1dComponent', () => {
  let component: Trip1dComponent;
  let fixture: ComponentFixture<Trip1dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Trip1dComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Trip1dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
