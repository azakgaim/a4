import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collapsable-well',
  template: `
  <div (click)="toggleContent()" class="well pointable hoverwell">
    <h3>
       <ng-content select="[well-title]"></ng-content>
     </h3>

    <ng-content *ngIf="visible" select="[well-body]"></ng-content>
  </div>
  `,
  styles: [

  ]
})

export class CollapsableWellComponent {
  // data members
  visible = true;

  // DOM events
  toggleContent() {
    this.visible = !this.visible;
  }
}
