import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// models
import { ISession } from '../../../models/event.model';

// functions
import { restrictedWords } from '../../../shared/restricted-words.validator';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})

export class CreateSessionComponent implements OnInit {
  // data members
  @Output() saveNewSession = new EventEmitter();
  @Output() cancelAddSession = new EventEmitter();

  createSessionForm: FormGroup;

  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;

  // constructor
  constructor() {}

  // life cycle hooks
  ngOnInit() {
    this.name = new FormControl('', [Validators.required]);
    this.presenter = new FormControl('', [Validators.required]);
    this.duration = new FormControl('', [Validators.required]);
    this.level = new FormControl('', [Validators.required]);
    this.abstract = new FormControl('', [
                                          Validators.required,
                                          Validators.maxLength(20),
                                          // this.restrictedWords   -> for a single word
                                          restrictedWords(['foo', 'bar']) // for multiple words
                                        ]);

     this.createSessionForm = new FormGroup({
       name: this.name,
       presenter: this.presenter,
       duration: this.duration,
       level: this.level,
       abstract: this.abstract
     });
  }

  // DOM events
  saveSession(formData) {
    const session: ISession = {
      id: undefined,
      name: formData.name,
      presenter: formData.presenter,
      duration: +formData.duration,
      level: formData.level,
      abstract: formData.abstract,
      voters: []
    };

    this.saveNewSession.emit(session);
  }

  cancel() {
    this.cancelAddSession.emit();
  }

  // validation
  nameIsValid() {
    return this.name.valid || this.name.untouched;
  }
  presenterIsValid() {
    return this.presenter.valid || this.presenter.untouched;
  }
  durationIsValid() {
    return this.duration.valid || this.duration.untouched;
  }
  levelIsValid() {
    return this.level.valid || this.level.untouched;
  }
  abstractIsValid() {
    return this.abstract.valid || this.abstract.untouched;
  }

  // a single word
  // private restrictedWords(control: FormControl): {[key: string]: any} {
  //   return control.value.includes('foo')
  //             ? {'restrictedWords': 'foo'}
  //             : null;
  // }

  // multiple words
  // private restrictedWords(words) {
  //   return (control: FormControl): {[key: string]: any} => {
  //
  //     if (!words) { return null; }
  //
  //     const invalidWords = words.map(w => control.value.includes(w) ? w : null)
  //                               .filter(w => w != null);
  //
  //     return invalidWords && invalidWords.length > 0
  //               ? {'restrictedWords': invalidWords.join(', ')}
  //               : null;
  //   };
  // }
}
