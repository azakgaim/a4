import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// components
import { AppComponent } from './app.component';
import { EventsLitComponent } from './events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/error-404.component';
import { CreateSessionComponent } from './events/sessions/create-session/create-session.component';
import { SeesionListComponent } from './events/sessions/sessions-list/session-list.component';
import { UpvoteComponent } from './events/voting/upvote.component';
import { MyMiscComponent } from './test/test';

// shared components
import { CollapsableWellComponent } from './shared/collapsable-well.componemnt';
import { BootstrapModalComponent } from './shared/bootstrap-modal/bootstrap-modal.component';

// services
import { EventsService } from './services/events.service';
import { EventRouteActivatorService } from './services/event-route-activator.service';
import { EventsListResolverService } from './services/events-list-resolver.service';
import { AuthService } from './services/auth.service';
import { VotingService } from './services/voting.service';

// routes
import { routes } from './events.routes';

// pipes
import { DurationPipe } from './pipes/duration.pipe';

// directives
import { ModalTriggerDirective } from './directives/modal-trigger.directive';

// 3rd party globals. Note: for large classes we can just use a type of any (although we will
// not have intelly sence)
// declare const toastr: any;
// import { ToastrService } from './services/toastr.service';
import { TOASTR_TOKEN, Toastr} from './services/toastr.service';


import { JQUERY_TOKEN } from './services/jquery.service';
// import { JQUERY_PROVIDER } from './services/jQuery.service';

declare const toastr: Toastr;
declare const jQuery: Object; // we are using Object type since we don't have interface for it


@NgModule({
  declarations: [
    // components
    AppComponent,
    EventsLitComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SeesionListComponent,
    CollapsableWellComponent,
    BootstrapModalComponent,
    UpvoteComponent,

    // pipes
    DurationPipe,

    // directives
    ModalTriggerDirective,

    MyMiscComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    EventsService,

    // ToastrService,
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },

    { provide: JQUERY_TOKEN, useValue: jQuery },
    // JQUERY_PROVIDER,

    EventRouteActivatorService,
    EventsListResolverService,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    VotingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function checkDirtyState(component: CreateEventComponent): boolean {
  if (component.isDirty) {
    return window.confirm('Abort creation of a new event?');
  }
  return true;
}
