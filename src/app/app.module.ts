import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { EventComponent } from './events/event-list.component';
import { NavComponent } from './nav/nav.component';
import { eventThumbnailComponent } from './events/event-thumbnail.component';
import { Approutes } from './routes';
import {BusyModule} from 'angular2-busy';
import { ToastrService } from './toastr.service';
import { RouterModule } from "@angular/router";
import { AddressComponent } from "app/Address/Address.component";
import { AddressService } from "app/Address/Address.service";
import { EventListComponent } from "app/Event-List/Event-List.component";
import { EventListService } from "app/Event-List/Event-List.service";
import { WelcomeComponent } from './welcome/welcome.component';
@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    NavComponent,
    eventThumbnailComponent,
    AddressComponent,
    EventListComponent,
    WelcomeComponent,
    
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BusyModule,
    RouterModule.forRoot(Approutes)
  ],
  providers: [ToastrService,AddressService,EventListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
