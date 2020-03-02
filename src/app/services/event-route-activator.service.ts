import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

// services
import { EventsService } from './events.service';

@Injectable()
export class EventRouteActivatorService implements CanActivate {
  // constructor
  constructor(private eventsService: EventsService,
              private router: Router) {}

  // CanActivate interface implementation
  canActivate(activatedRouterSnapshot: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot): boolean {

    const id = +activatedRouterSnapshot.params['id'];
    const routeExists = !!this.eventsService.getEvent(id);

    if (!routeExists) {
      this.router.navigate(['/404']);
    }

    return routeExists;
  }
}
