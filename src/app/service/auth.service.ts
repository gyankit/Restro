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

  login(data: any): Observable<any> {
    this._url = this.url.getDefaultUrl('login');
    let body;
    if (isNaN(data.username)) {
      body = { email: data.username }
    } else {
      body = { userId: data.username }
    }
    return this.http.post(this._url, body);
  }

  setLoggedIn(loggedIn: boolean, userId: string, type: string) {
    this.session.setSession(loggedIn, userId, type);
  }

  isloggedIn(): boolean {
    return this.session.isLoggedIn;
  }

  isLoggedIn(user: string): boolean {
    return this.session.userType === user ? true : false;
  }

  logout(): void {
    this.session.resetSession();
  }
}
