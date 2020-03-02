import { Injectable } from '@angular/core';

// modelss:
import { IUser } from '../models/user.model';

@Injectable()
export class AuthService {
  // data members:
  currentUser: IUser;

  loginUser(userName: string, password: string ) {
    this.currentUser = {
      id: 1,
      firstName: 'Anthony',
      lastName: 'Zakgaim',
      userName: 'azakgaim'
    };
  };

  updateUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }

  isUserAuthenticated(): boolean {
    return !!this.currentUser;
  };
}
