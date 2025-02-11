import { Component } from '@angular/core';
import { BusBookingService } from '../bus-booking.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-bus-booking-form',  // এটি কম্পোনেন্টটির HTML ট্যাগ নাম
  templateUrl: './bus-booking-form.component.html',  // কম্পোনেন্টের HTML টেমপ্লেট ফাইল
  styleUrls: ['./bus-booking-form.component.css']  // CSS স্টাইল ফাইল (যদি থাকে)
})
export class BusBookingFormComponent {


  bookingData: FormGroup = new FormGroup({
    fromLocation: new FormControl(''),
    toLocation:new FormControl('') ,
    journeyDate: new FormControl(''),
    journeyTime: new FormControl(''),
    seats:new FormControl(''),
    busClass: new FormControl(''),
    passengerName: new FormControl(''),
    phone: new FormControl(''),
    email:new FormControl(''),
    ageGroup: new FormControl(''),
    discountCode: new FormControl(''),
    fare: new FormControl(''),
    terms:new FormControl(''),
    returnDate: new FormControl(''),
    returnTime: new FormControl(''),
    tripType: new FormControl('')
  });

  // bookingData = {
  //   fromLocation: '',
  //   toLocation: '',
  //   journeyDate: '',
  //   journeyTime: '',
  //   seats: 1,
  //   busClass: '',
  //   passengerName: '',
  //   phone: '',
  //   email: '',
  //   ageGroup: '',
  //   discountCode: '',
  //   fare: 0,
  //   terms:'',
  //   returnDate:'',
  //   returnTime:'',
  //   tripType:''
  // };

  constructor(private busBookingService: BusBookingService) { }

  onSubmit() {
    
    console.log(this.bookingData.value);
    
    this.busBookingService.createBooking(this.bookingData.value).subscribe(response => {
      console.log('Booking successful:', response);
      alert('Booking successful!');
    }, error => {
      console.error('Error creating booking:', error);
      alert('Error creating booking.');
    });
  }
}







