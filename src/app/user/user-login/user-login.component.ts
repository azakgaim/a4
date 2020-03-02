
import { Component } from '@angular/core';
import { Router } from '@angular/router';

// services
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent {
  // constructor
  constructor(private authService: AuthService,
              private router: Router) {}

  // DOM event handlers
  login(formValues) {
    this.authService.loginUser(formValues.firstName, formValues.lastName);
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
