
import { Component, Input, OnChanges } from '@angular/core';

// models
import { ISession } from '../../../models/event.model';

// services
import { AuthService } from '../../../services/auth.service';
import { VotingService } from '../../../services/voting.service';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})

export class SeesionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions: ISession[] = [];

  // sequence of life cycle hooks
  /*
  ngOnChanges()
     Respond when Angular (re)sets data-bound input properties. The method receives a
     SimpleChanges object of current and previous property values.
     Called before ngOnInit() and whenever one or more data-bound input properties change.
  ngOnInit()
     Initializes the directive/component after Angular first displays the data-bound
     properties and sets the directive/component's input properties.
     Called once, after the first ngOnChanges().
  ngDoCheck()
  ngAfterContentInit()
  ngAfterContentChecked()
  ngAfterViewInit()
  ngAfterViewChecked()
  ngOnDestroy()
  */

  constructor(private authService: AuthService,
              private votingService: VotingService) {}

  // life cycle hooks
  ngOnChanges() {
    if (this.sessions) {
      // filtering
      this.filterSessions(this.filterBy);

      // sorting
      this.sortBy === 'name'
            ? this.visibleSessions.sort(this.sortByNameAsc)
            : this.visibleSessions.sort(this.sortByVotesDesc);
    }
  }

  // filtering function
  filterSessions(filter: string) {
    if (filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter((sessions) => {
        return sessions.level.toLocaleLowerCase() === filter;
      });
    }
  }

  // sorting functions
  sortByNameAsc(s1: ISession, s2: ISession) {
    if (s1.name > s2.name) {
      return 1;
    } else if (s1.name === s2.name) {
      return 0;
    } else {
      return -1;
    }
  }

  sortByVotesDesc(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length;
  }

  toggleVote(session: ISession) {
    if (this.userHasVoted(session)) {
      this.votingService.deleteVoter(session, this.authService.currentUser.userName);
    } else {
      this.votingService.addVoter(session, this.authService.currentUser.userName);
    }

    if (this.sortBy === 'votes') {
      this.visibleSessions.sort(this.sortByVotesDesc);
    }
  }

  userHasVoted(session: ISession) {
    return this.votingService.userHasVoted(session, this.authService.currentUser.userName);
  }
}
