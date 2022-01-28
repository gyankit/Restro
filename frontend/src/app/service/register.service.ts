import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
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

  addAccount(profile: Customer | Vendor | Supervisor, type: string): Observable<any> {
    this._url = this.url.getDefaultUrl('register');
    return this.http.post<any>(this._url, { profile, "type": type });
  }
}
