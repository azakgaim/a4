import { Component } from '@angular/core';

// services
import { AuthService } from '../services/auth.service';
import { EventsService } from '../services/events.service';

// models
import { ISession } from '../models/event.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent {
  // data members
  searchTerm = '';
  foundSessions: ISession[];

  // constructor
  constructor(private authService: AuthService,
              private eventService: EventsService) {}

  // DOM events
  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
    });
  }
}
