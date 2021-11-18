import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  setSession(loggedIn: boolean, userId: string, userType: string) {
    localStorage.setItem('isLoggedIn', loggedIn ? 'true' : 'false');
    localStorage.setItem('userId', userId);
    localStorage.setItem('userType', userType);
  }

  get isLoggedIn() {
    return localStorage.getItem('isLoggedIn') == 'true' ? true : false;
  }

  get userId() {
    return localStorage.getItem('userId');
  }

  get userType() {
    return localStorage.getItem('userType');
  }

  resetSession() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userId');
    localStorage.removeItem('userType');
  }
}
