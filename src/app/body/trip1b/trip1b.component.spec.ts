import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trip1bComponent } from './trip1b.component';

describe('Trip1bComponent', () => {
  let component: Trip1bComponent;
  let fixture: ComponentFixture<Trip1bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Trip1bComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Trip1bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
