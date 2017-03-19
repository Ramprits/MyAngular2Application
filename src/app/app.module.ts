import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { EventListComponent } from './events/event-list.component';
import { NavComponent } from './nav/nav.component';
import { eventThumbnailComponent } from './events/event-thumbnail.component';
import { Approutes } from './routes';
import { ToastrService } from './toastr.service';
import { RouterModule } from "@angular/router";
import { AddressComponent } from "app/Address/Address.component";
import { AddressService } from "app/Address/Address.service";
@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    NavComponent,
    eventThumbnailComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(Approutes)
  ],
  providers: [ToastrService,AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
