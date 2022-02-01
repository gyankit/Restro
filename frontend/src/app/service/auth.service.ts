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

  constructor(private url: UrlService, private http: HttpClient, private session: SessionService) { }

  login(data: any, next: string): Observable<any> {
    data.type = this.userTypeId(next);
    return this.http.post(this.url.getUrl('login'), data);
  }

  register(profile: Customer | Vendor | Supervisor, next: string): Observable<any> {
    return this.http.post<any>(this.url.getUrl('register'), { profile, "type": this.userTypeId(next) });
  }

  setLoggedIn(loggedIn: boolean, user: any) {
    this.session.setSession(loggedIn, user);
  }

  get uid(): string {
    return this.session.uid;
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
      case 'vendor':
        id = 1;
        break;
      case 'customer':
        id = 2;
        break;
      case 'delivery':
        id = 3;
        break;
      case 'reviewer':
        id = 4;
        break;
      default:
        id = 2
    }
    return id;
  }
}
