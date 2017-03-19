import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../toastr.service';
@Component({
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventListComponent implements OnInit {

  constructor(public toastr: ToastrService) { }
  handleClickMe() {
    this.toastr.success('This is toastr test messege', 'Toastr')
    console.log('Clicked')
  }
  ngOnInit() {
  }
  event = {
    id: 1,
    name: 'Angular connect',
    date: '02/02/2017',
    time: '10:02 AM',
    price: 50000,
    image: 'app/Image/ramprit.png',
    location: {
      address: 'Mumbai Borivali East',
      city: 'Mumbai',
      country: 'India'
    }
  }

}