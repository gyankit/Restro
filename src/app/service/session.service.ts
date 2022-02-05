import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  setSession(loggedIn: boolean, user: any) {
    sessionStorage.setItem('isLoggedIn', loggedIn ? 'true' : 'false');
    sessionStorage.setItem('uid', user.id);
    sessionStorage.setItem('type', user.type);
    sessionStorage.setItem('token', user.token);
  }

  get isLoggedIn() {
    return sessionStorage.getItem('isLoggedIn') == 'true' ? true : false;
  }

  get uid(): string {
    let uid = sessionStorage.getItem('uid');
    if (uid === null) {
      uid = '';
    }
    return uid;
  }

  get type(): string {
    let type = sessionStorage.getItem('type');
    if (type === null) {
      type = '';
    }
    return type;
  }

  get token(): string {
    let token = sessionStorage.getItem('token');
    if (token === null) {
      token = '';
    }
    return token;
  }

  resetSession() {
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('uid');
    sessionStorage.removeItem('type');
    sessionStorage.removeItem('token');
  }
}
