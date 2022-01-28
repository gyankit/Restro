import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionService } from './session.service';
import { UrlService } from './url.service';
import { Customer } from '../models/customer';
import { Supervisor } from '../models/supervisor';
import { Vendor } from '../models/vendor';

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

  register(profile: Customer | Vendor | Supervisor, next: string): Observable<any> {
    this._url = this.url.getDefaultUrl('register');
    return this.http.post<any>(this._url, { profile, "type": this.userTypeId(next) });
  }

  setLoggedIn(loggedIn: boolean, user: any) {
    this.session.setSession(loggedIn, user);
  }

  get loggedIn(): boolean {
    return this.session.isLoggedIn;
  }

  get type(): string {
    return this.session.type;
  }

  isLoggedIn(type: string): boolean {
    return this.session.type === type ? true : false;
  }

  logout(): void {
    this.session.resetSession();
  }

  userTypeId(type: string) {
    let id;
    switch (type) {
      case 'admin':
        id = 0;
        break;
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
      default:
        id = 1
    }
    return id;
  }
}
