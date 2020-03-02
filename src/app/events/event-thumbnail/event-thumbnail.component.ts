import { Component, Input } from '@angular/core';

// models
import { IEvent, ISession } from '../../models/event.model';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})

export class EventThumbnailComponent {
  // data members
  @Input() event: IEvent;

  // functions
  getStartTimeClass() {
    // one way
    const isEarly = this.event && this.event.time === '8:00 am';
    return {'green': isEarly, 'bold': isEarly};

    // anather way
    // if (this.event && this.event.time === '8:00 am') {
    //   return ' green bold';
    // };
    // return '';

    // and another way
    // if (this.event && this.event.time === '8:00 am') {
    //   return ['green', 'bold'];
    // };
    // return [];
  }
}
