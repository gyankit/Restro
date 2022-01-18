import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { Login } from '../models/login';
import { Supervisor } from '../models/supervisor';
import { Vendor } from '../models/vendor';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private _url: any;

  constructor(private url: UrlService, private http: HttpClient) {
  }

  addAccount(profile: Customer | Vendor | Supervisor, login: Login, type: string): Observable<boolean> {
    this._url = this.url.getDefaultUrl(type);
    return this.http.post<boolean>(this._url, { profile, login });
  }
}
