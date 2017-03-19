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
@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    NavComponent,
    eventThumbnailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(Approutes)
  ],
  providers: [ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
