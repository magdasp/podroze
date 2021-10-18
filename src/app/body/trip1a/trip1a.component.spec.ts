import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trip1aComponent } from './trip1a.component';

describe('Trip1aComponent', () => {
  let component: Trip1aComponent;
  let fixture: ComponentFixture<Trip1aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Trip1aComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Trip1aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
