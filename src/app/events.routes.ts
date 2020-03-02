
import { Routes } from '@angular/router';

// components
import { EventsLitComponent } from './events/events-list/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/error-404.component';
import { CreateSessionComponent } from './events/sessions/create-session/create-session.component';
import { MyMiscComponent } from './test/test';

// services
import { EventRouteActivatorService } from './services/event-route-activator.service';
import { EventsListResolverService } from './services/events-list-resolver.service';

// lazy loading modules
import { UserModule } from './user/user.module';


export const routes: Routes = [
  {path: 'events', component: EventsLitComponent,
                   resolve: { events: EventsListResolverService } },
  {path: 'events/new', component: CreateEventComponent,
                       canDeactivate: ['canDeactivateCreateEvent']},
  {path: 'events/:id', component: EventDetailsComponent,
                       canActivate: [EventRouteActivatorService]},
  {path: '404', component: Error404Component},
  {path: '', redirectTo: '/events', pathMatch: 'full'},

  {path: 'user', loadChildren: () => UserModule},

  {path: 'events/session/new', component: CreateSessionComponent},

  {path: 'misc', component: MyMiscComponent}
];
