import { Component, Input, ViewChild, ElementRef, Inject } from '@angular/core';

import { JQUERY_TOKEN } from '../../services/jquery.service';

@Component({
  selector: 'app-bootstrap-modal',
  templateUrl: './bootstrap-modal.component.html',
  styleUrls: ['./bootstrap-modal.component.css']
})

export class BootstrapModalComponent {
    // attributes of app-bootstrap-modal on nav-bar\nav-bar.component.html
    @Input() title: string;
    @Input() elementId: string;

    @Input() closeOnBodyClick = 'false';
    @ViewChild('modalContainer') containerEl: ElementRef;

    // constructory
    constructor(@Inject(JQUERY_TOKEN) private $: any) {}

    // ----------------- DOM event handlers --------------------- \\
    // closes the modal dialog on click
    closeModal() {
      if (this.closeOnBodyClick.toLocaleLowerCase() === 'true') {
        this.$(this.containerEl.nativeElement).modal('hide');
      }
    }
}
