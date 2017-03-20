import { Component, OnInit } from '@angular/core';

import { IAddressess } from './Address.module';
import { AddressService } from './Address.service';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-Address',
  templateUrl: './Address.component.html',
  styleUrls: ['./Address.component.css']
})
export class AddressComponent implements OnInit {
    busy: Subscription;
  Address: IAddressess[]
  constructor(public Addresses: AddressService) { }

  ngOnInit() {
  this.busy =  this.Addresses.GetAddresses().subscribe(Address => { this.Address = Address })
  }

}