import { Component, EventEmitter, Input, Output, OnChanges }  from "@angular/core";

// services
import { VotingService } from '../../services/voting.service';

@Component({
  selector: 'upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})

export class UpvoteComponent implements OnChanges {
  @Input() count: number;

  // this is a second way to watch for changes of a variable and react on the change
  // @Input() voted: boolean;
  @Input() set voted(val) { this.iconColor = val === true ? 'red' : 'white'; }

  @Output() vote = new EventEmitter();

  iconColor: string;

  constructor(private votingService: VotingService) {}

  onClick() {
    this.vote.emit({});
  }

  // this is one way to change color of an element: watch for changes on a variable
  ngOnChanges() {
    // if (this.voted) {
    //   this.iconColor = 'red';
    // } else {
    //   this.iconColor = 'white';
    // }
  }
}
