import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { Login } from '../models/login';
import { Vendor } from '../models/vendor';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private _url: any;

  constructor(private url: UrlService, private http: HttpClient) {
  }

  addCustomerAccount(profile: Customer, login: Login): Observable<boolean> {
    this._url = this.url.getCustomerUrl('register');
    return this.http.post<boolean>(this._url, { profile, login });
  }

  addVendorAccount(profile: Vendor, login: Login): Observable<boolean> {
    this._url = this.url.getVendorUrl('register');
    return this.http.post<boolean>(this._url, { profile, login });
  }
}
