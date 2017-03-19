import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from '../toastr.service';
@Component({
  selector: 'event-thumbnail',
  templateUrl:'./event-thumbnail.component.html'
})
export class eventThumbnailComponent implements OnInit {
  constructor(public toastr: ToastrService) { }
  @Input() event: any
  ngOnInit() { }

  @Output() eventClick = new EventEmitter();
  handleClicked() {
    this.eventClick.emit(this.event.name)
  }
  logFoo() {
    console.log('Foo');
  }

}