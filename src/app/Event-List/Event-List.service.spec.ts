/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EventListService } from './Event-List.service';

describe('Service: EventList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventListService]
    });
  });

  it('should ...', inject([EventListService], (service: EventListService) => {
    expect(service).toBeTruthy();
  }));
});