import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private _url: any;
  constructor(private url: UrlService, private http: HttpClient) { }

  getList(): Observable<any> {
    this._url = this.url.getDefaultUrl('country');
    return this.http.post<any>(this._url, {});
  }
}
