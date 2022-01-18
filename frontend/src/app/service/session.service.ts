import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  setSession(loggedIn: boolean, uid: string, type: string) {
    localStorage.setItem('isLoggedIn', loggedIn ? 'true' : 'false');
    localStorage.setItem('uid', uid);
    localStorage.setItem('type', type);
  }

  get isLoggedIn() {
    return localStorage.getItem('isLoggedIn') == 'true' ? true : false;
  }

  get uid(): string {
    let uid = localStorage.getItem('uid');
    if (uid === null) {
      uid = '';
    }
    return uid;
  }

  get type() {
    let type = localStorage.getItem('type');
    if (type === null) {
      type = '';
    }
    return type;
  }

  resetSession() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('uid');
    localStorage.removeItem('type');
  }
}
