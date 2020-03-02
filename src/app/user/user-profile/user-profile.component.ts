import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// services
import { AuthService } from '../../services/auth.service';
import { TOASTR_TOKEN, Toastr } from '../../services/toastr.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {
  // data members
  profileForm: FormGroup;

  // constructor
  constructor(private authService: AuthService,
              private router: Router,
              @Inject(TOASTR_TOKEN) private toastr: Toastr ) {}

  // life cycle hooks
  ngOnInit() {
    const firstName = new FormControl(this.authService.currentUser.firstName,
                                      [
                                        Validators.required,
                                        Validators.pattern('[a-zA-Z].*')
                                       ]);
    const lastName = new FormControl(this.authService.currentUser.lastName,
                                     [Validators.required]);

    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    });
  }

  // DOM events
  cancel() {
    this.router.navigate(['/events']);
  }

  saveProvile(formData) {
    this.authService.updateUser(formData.firstName, formData.lastName);

    // this.router.navigate(['/events']);
    this.toastr.success('Profile saved');
  }

  // validation
  firstNameValid() {
    return this.profileForm.controls.firstName.valid || this.profileForm.controls.firstName.untouched;
  }

  lastNameValid() {
    return this.profileForm.controls.lastName.valid || this.profileForm.controls.lastName.untouched;
  }

}
