import { Component, OnInit } from '@angular/core';

import { IAddressess } from './Address.module';
import { AddressService } from './Address.service';

@Component({
  selector: 'app-Address',
  templateUrl: './Address.component.html',
  styleUrls: ['./Address.component.css']
})
export class AddressComponent implements OnInit {
  Address: IAddressess[]
  constructor(public Addresses: AddressService) { }

  ngOnInit() {
    this.Addresses.GetAddresses().subscribe(Address => { this.Address = Address })
  }

}