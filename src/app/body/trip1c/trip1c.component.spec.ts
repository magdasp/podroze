import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trip1cComponent } from './trip1c.component';

describe('Trip1cComponent', () => {
  let component: Trip1cComponent;
  let fixture: ComponentFixture<Trip1cComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Trip1cComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Trip1cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
