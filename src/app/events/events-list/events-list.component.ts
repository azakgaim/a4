import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// services
import { EventsService } from '../../services/events.service';
// import { ToastrService } from '../../services/toastr.service';

// models
import { IEvent, ISession } from '../../models/event.model';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})

export class EventsLitComponent implements OnInit {
  // data members
  events: IEvent[];

  // constructor
  constructor(private eventsService: EventsService,
              private activatedRoute: ActivatedRoute) {}

  // life cycle hooks
  ngOnInit() {
    // this.eventsService.getEvents().subscribe((events) => { this.events = events; });
    this.events = this.activatedRoute.snapshot.data['events'];
  }

  // DOM events
}
