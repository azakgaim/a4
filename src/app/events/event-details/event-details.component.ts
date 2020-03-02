import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

// services
import { EventsService } from '../../services/events.service';

// models
import { IEvent, ISession } from '../../models/event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})

export class EventDetailsComponent implements OnInit {
  // data members
  event: IEvent;
  addMode = false;
  filterBy = 'all';
  sortBy = 'votes';

  // constructor
  constructor(private eventsService: EventsService,
              private activatedRoute: ActivatedRoute) {}

  // life cycle hoos
  ngOnInit() {
    // const id = +this.activatedRoute.snapshot.params['id'];
    // this.event = this.eventsService.getEvent(id);

    // to navigate to the same router we cannot use snapshot (search functionality)
    this.activatedRoute.params.forEach((params: Params) => {
      this.event = this.eventsService.getEvent(+params['id']);

      // reset all states to their default values;
      this.addMode = false;
      this.filterBy = 'all';
      this.sortBy = 'votes';
    });
  }

  // DOM event handlers
  addSession() {
    this.addMode = true;
  }

  saveNewSession(newSession: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    newSession.id = nextId + 1;
    this.event.sessions.push(newSession);

    this.eventsService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }
}
