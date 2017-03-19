import { Routes } from '@angular/router';
import { EventListComponent } from './events/event-list.component';
import { AddressComponent } from './Address/Address.component';

export const Approutes: Routes = [
  { path: 'Events', component: EventListComponent },
  { path: 'Address', component: AddressComponent },
  { path: '', redirectTo: '/Events', pathMatch: 'full' }
];

