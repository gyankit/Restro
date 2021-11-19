import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionService } from './session.service';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _url!: string;

  constructor(private url: UrlService, private http: HttpClient, private session: SessionService) { }

  login(data: any, next: string): Observable<any> {
    this._url = this.url.getDefaultUrl('login');
    data.type = this.userTypeId(next);
    return this.http.post(this._url, data);
  }

  setLoggedIn(loggedIn: boolean, userId: string, type: string) {
    this.session.setSession(loggedIn, userId, type);
  }

  get loggedIn(): boolean {
    return this.session.isLoggedIn;
  }

  isLoggedIn(user: string): boolean {
    return this.session.userType === user ? true : false;
  }

  logout(): void {
    this.session.resetSession();
  }

  userTypeId(type: string) {
    let id = 1;
    switch (type) {
      case 'customer':
        id = 1;
        break;
      case 'vendor':
        id = 2;
        break;
      case 'delivery':
        id = 3;
        break;
      case 'reviewer':
        id = 4;
        break;
      case 'super_su':
        id = 5;
        break;
      default:
        id = 1
    }
    return id;
  }
}
