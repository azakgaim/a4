import { Component } from '@angular/core';
import { Router } from '@angular/router';
// services
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-crate-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})

export class CreateEventComponent {
  // data members
  isDirty = true;

  // constructor
  constructor(private router: Router,
              private eventService: EventsService) {}

  // DOM events
  saveEvent(eventData) {
    this.isDirty = false;
    this.eventService.createEvent(eventData);
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
