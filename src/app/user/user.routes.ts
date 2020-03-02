import { Routes } from '@angular/router';

// components
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserLoginComponent } from './user-login/user-login.component';

export const userRoutes: Routes = [
  {path: 'profile', component: UserProfileComponent},
  {path: 'login', component: UserLoginComponent}
];
