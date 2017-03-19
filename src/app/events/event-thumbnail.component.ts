import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from '../toastr.service';
@Component({
     templateUrl: './events.component.html'
})
export class eventThumbnailComponent implements OnInit {
     constructor(public toastr: ToastrService) { }
     @Input() event: any
     ngOnInit() { }


}