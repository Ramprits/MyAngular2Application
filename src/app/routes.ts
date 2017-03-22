import { Routes } from '@angular/router';
import { EventComponent } from './events/event-list.component';
import { AddressComponent } from './Address/Address.component';
import { EventListComponent } from "app/Event-List/Event-List.component";
import { WelcomeComponent } from "app/welcome/welcome.component";

export const Approutes: Routes = [
  { path: 'Events', component: EventComponent },
  { path: 'Address', component: AddressComponent },
  { path: 'EventList', component: EventListComponent },
  { path: 'Welcome', component: WelcomeComponent },
  { path: '', redirectTo: '/Welcome', pathMatch: 'full' }
];

