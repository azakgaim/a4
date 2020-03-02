
import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';

import { JQUERY_TOKEN } from '../services/jquery.service';

@Directive({
  // square brackets indicate that this is an attribute, not an element
  // selector: '[appBootstrapMoalTrigger]'
  selector: '[modal-trigger]'
})

/*
Pupose:
  when this directive is created we want to attach a click event handler
  to whatever element it is created on
How to get a reference to an element the directed belongs to
  1. Indject() JQUERY_TOKEN
  2. create a reference to an element the directive is on
     a. Import ElementRef
     b. make a reference to the element in constructor
*/
// export class ModalBootstrapTriggerDirective implements OnInit {
export class ModalTriggerDirective implements OnInit {
  // data members
  private el: HTMLElement;
  @Input('modal-trigger') modalId: string;

  // constructor
  //  ref: ElementRef means: when this directive is constructed, I want to get a
  //  reference to an element it is on
  constructor(ref: ElementRef, @Inject(JQUERY_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }

  // ============ life cycle hooks ====================== \\
  ngOnInit() {
    // create event handler for a click event
    this.el.addEventListener('click', e => {
      this.$('#' + this.modalId).modal({});
    });
  }
}
