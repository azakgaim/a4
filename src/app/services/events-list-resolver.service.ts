
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

// services
import { EventsService } from './events.service';

@Injectable()
export class EventsListResolverService implements Resolve<any> {
  // constructor
  constructor(private eventsService: EventsService) {}

    // Resolve interface implementation
    resolve() {
      return this.eventsService.getEvents().map(events => events);
    }
}
