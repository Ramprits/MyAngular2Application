import { Routes } from '@angular/router';
import { EventListComponent } from './events/event-list.component';
export const Approutes: Routes = [
  { path: 'Events', component: EventListComponent },
  { path: '', redirectTo: '/Events', pathMatch: 'full' }
];

