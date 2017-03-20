import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'

import { IAddressess } from './Address.module';
import { Subscription } from "rxjs/Subscription";
@Injectable()
export class AddressService {
     private baseURL = 'src/app/common/Address.json'
     constructor(private _http: Http) {
     }
     GetAddresses(): Observable<IAddressess[]> {
          return  this._http.get(this.baseURL)
               .map((response: Response) => <IAddressess[]>response.json())
               .do(data => console.log('All :' + JSON.stringify(data))).catch(this.handleError);
     }
     private handleError(error: Response) {
          console.error(error);
          return Observable.throw(error.json().error || 'Server error')
     }

}