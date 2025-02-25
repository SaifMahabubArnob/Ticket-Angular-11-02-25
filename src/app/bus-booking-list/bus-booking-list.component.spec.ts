import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusBookingListComponent } from './bus-booking-list.component';

describe('BusBookingListComponent', () => {
  let component: BusBookingListComponent;
  let fixture: ComponentFixture<BusBookingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusBookingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusBookingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
