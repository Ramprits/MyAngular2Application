import { Component, OnInit } from '@angular/core';
import { EventListService } from './Event-List.service';
@Component({
  selector: 'app-Event-List',
  templateUrl: './Event-List.component.html',
  styleUrls: ['./Event-List.component.css']
})
export class EventListComponent implements OnInit {
  eventList: any[]
  constructor(private _EventListService: EventListService) { }

  GetEventLists() {

  }
  ngOnInit() {
    this.eventList = this._EventListService.GetEventList()
  }

}