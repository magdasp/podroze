import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trip1eComponent } from './trip1e.component';

describe('Trip1eComponent', () => {
  let component: Trip1eComponent;
  let fixture: ComponentFixture<Trip1eComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Trip1eComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Trip1eComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
